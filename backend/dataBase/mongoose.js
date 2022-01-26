const { connect } = require("mongoose");

module.exports = connect(
  "mongodb://localhost/usersDataBase",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);