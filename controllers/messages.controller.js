const path = require("path");

function getMessages(req, res) {
  const pathFile = path.join(__dirname, "..", "public", "test.jpg");
  res.sendFile(pathFile);
}

module.exports = {
  getMessages,
};
