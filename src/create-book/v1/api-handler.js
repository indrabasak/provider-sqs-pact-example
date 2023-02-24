
// eslint-disable-next-line no-unused-vars
exports.postBook = async (req) => {
  console.log('1 -----------------------------');
  console.log(req);
  console.log('2 -----------------------------');

  let finalRsp = {
    status: 201,
    payload: req.body
  };

  console.log('3 -----------------------------');

  return finalRsp;
};
