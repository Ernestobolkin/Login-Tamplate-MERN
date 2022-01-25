const { connect } = require("mongoose");
const chalk = require("chalk");

module.exports = connect(
  "mongodb://localhost/usersDataBase",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);