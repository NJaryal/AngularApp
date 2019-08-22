const express = require("express");
const app = require("./api/routes/news");
const logger = require("./utils/loggers");
const mongoose = require("mongoose");

//DB Config
mongoose.connect("mongodb://localhost:27017/CRUDNewsDB", {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status,
      message: error.message
    }
  });
  logger.warn(`Error ${error.status} `, new Error(error.message));
});
module.exports = app;
