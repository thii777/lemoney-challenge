require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`running port ${port}`);
});
