[![Build Status][build-status-badge]][build-status-badge-url]
[![Can I deploy Status][can-deploy-status-badge]][can-deploy-status-badge-url]


[![Pact Status](https://pqr.pactflow.io/pacts/provider/provider-sqs-pact-example/consumer/consumer-sqs-pact-example/latest/badge.svg?label=provider)](https://pqr.pactflow.io/pacts/provider/provider-sqs-pact-example/consumer/consumer-sqs-pact-example/latest) (latest pact)

[![Pact Status](https://pqr.pactflow.io/matrix/provider/provider-sqs-pact-example/latest/main/consumer/consumer-sqs-pact-example/latest/main/badge.svg?label=provider)](https://pqr.pactflow.io/pacts/provider/provider-sqs-pact-example/consumer/consumer-sqs-pact-example/latest/main) (prod/prod pact)

A Pactflow Provider Example with AWS SQS
========================================


### Install Modules
To install all the dependencies of the project, cd into the home directory and execute the following command,
```
yarn
```
### Test
To run all unit tests, execute the following command from a terminal,
```
yarn test
```
The test report will be generated in the `test-reports` folder.

### Lint
To run lint on the whole project, execute the following command from a terminal,
```
yarn lint
```

### Deployment

In order to deploy the example, you need to run the following command:

```
sls deploy --stage "poc" --region "us-west-2"
```

[build-status-badge]: https://github.com/indrabasak/provider-sqs-pact-example/actions/workflows/build.yml/badge.svg
[build-status-badge-url]: https://github.com/indrabasak/provider-sqs-pact-example/actions
[can-deploy-status-badge]: https://pqr.pactflow.io/pacticipants/provider-sqs-pact-example/branches/main/latest-version/can-i-deploy/to-environment/production/badge.svg
[can-deploy-status-badge-url]: https://pqr.pactflow.io/pacticipants/provider-sqs-pact-example/branches/main/latest-version/can-i-deploy/to-environment/production/badge
