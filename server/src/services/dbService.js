const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
};

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    process.env.DB,
    connectionParams,
    () => console.log("Connected to db successfully"),
    (err) => console.log(err)
  );
};

module.exports = { connect };
