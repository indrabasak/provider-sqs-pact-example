// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const { MessageProviderPact } = require('@pact-foundation/pact');
const { bookFromJson } = require('../../src/book/book');

describe('Message provider tests', () => {
  const baseOpts = {
    logLevel: 'INFO',
    providerVersion: process.env.GIT_COMMIT,
    providerVersionTags: process.env.GIT_BRANCH ? [process.env.GIT_BRANCH] : []
  };

  // For builds triggered by a 'contract content changed' webhook,
  // just verify the changed pact. The URL will have been passed in
  // from the webhook to the CI job.
  const pactChangedOpts = {
    pactUrls: [process.env.PACT_URL]
  };

  // For 'normal' provider builds, fetch `master` and `prod` pacts for this provider
  const fetchPactsDynamicallyOpts = {
    provider: 'provider-sqs-pact-example',
    consumerVersionTags: ['master', 'prod', 'main'], // the old way of specifying which pacts to verify
    // consumerVersionSelectors: [{ tag: 'master', latest: true }, { tag: 'prod', latest: true } ], // the new way of specifying which pacts to verify
    pactBrokerUrl: process.env.PACT_BROKER_BASE_URL,
    enablePending: true
  };

  const book = bookFromJson({ title: 'Test Book', author: 'John Doe' });
  console.log(book);

  const opts = {
    ...baseOpts,
    ...(process.env.PACT_URL ? pactChangedOpts : fetchPactsDynamicallyOpts),
    messageProviders: {
      'a book event update': () => book
    }
  };

  const pact = new MessageProviderPact(opts);

  describe('send an event', () => {
    it('a book creation', () => {
      return pact.verify();
    });
  });
});
