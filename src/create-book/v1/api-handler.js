const { BookService } = require('../../book/book-service');

const service = new BookService();

// eslint-disable-next-line no-unused-vars
exports.postBook = async (req) => {
  console.log('1 -----------------------------');
  console.log(req);
  console.log('2 -----------------------------');

  try {
    await service.create(req.body);
    return { status: 201, payload: req.body };
  } catch (e) {
    console.error(e);
    return { status: 400, payload: 'Bad request' };
  }
};
