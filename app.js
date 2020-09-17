const express = require("express");
const AppError = require("./ErrorController/appError");
const userRouter = require("./route");
const globalErrorHandler=require('./ErrorController/globalError');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
//built-in middleware function in Express. It parses incoming requests with JSON
app.use(express.json());
//Handling base route
app.use("", userRouter);
// Handling unexpcted routes
app.all("*", (req, res, next) => {
  next( new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler.globalError);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("App is running on port number ", port);
});

