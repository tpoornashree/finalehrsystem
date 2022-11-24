const bcrypt = require("bcrypt");
async function genPassword(password) {
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  console.log(password);
}
const password = "test1234";
genPassword(password);
// $2b$10$EqZWUtuoGEsbtHJI.XqlyedazEKj.otZ7VwQo6TKtWtL6wV5aPWpi