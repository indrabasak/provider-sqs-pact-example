const AWS = require('aws-sdk');
const { bookFromJson } = require('./book');

AWS.config.update({ region: process.env.AWS_REGION });
const SQS = new AWS.SQS({ apiVersion: '2012-11-05' });

class BookService {
  async create(event) {
    const book = bookFromJson(event);
    await this.sendMessage(book);
  }

  async sendMessage(message) {
    const params = {
      MessageBody: JSON.stringify(message),
      QueueUrl: process.env.QUEUE_URL,
      MessageAttributes: null
    };

    console.log('BookService - sending message:', message);

    return SQS.sendMessage(params).promise();
  }
}

module.exports = {
  BookService
};
