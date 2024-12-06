const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");

// set middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router 설정
const indexRouter = require("./routes");
app.use("/", indexRouter);

// sync()
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connection success");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.log("db connection error!");
    console.log(e);
  });
