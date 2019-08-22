const app = require("./users");
const CustomError = require("../../error-handler/index");
const News = require("../models/news");

app.get("/news", (req, res, next) => {
  News.find()
    .exec()
    .then(data => {
      if (!data) {
        throw new CustomError("Internal Server Error", 500);
      }
      if (data.length >= 0) {
        res.status(200).json({
          totalResults: data.length,
          status: "ok",
          articles: data
        });
      } else {
        throw new CustomError("The news data is empty", 200);
      }
    })
    .catch(next);
});

app.get("/news/:id", (req, res, next) => {
  const id = req.params.id;
  News.findById(id)
    .exec()
    .then(doc => {
      if (!doc) {
        throw new CustomError("Single News Server Error", 500);
      } else {
        res.status(200).json({
          message: "Single News!",
          articles: doc
        });
      }
    })
    .catch(next);
});

app.post("/news", (req, res, next) => {
  const newsObj = new News({
    author: req.body.author,
    content: req.body.content,
    description: req.body.description,
    source: req.body.source,
    publishedAt: req.body.publishedAt,
    title: req.body.title,
    url: req.body.url,
    urlToImage: req.body.urlToImage
  });
  newsObj
    .save()
    .then(result => {
      if (!result) {
        throw new CustomError("Internal Server Error while saving", 500);
      } else {
        res.status(201).json({
          Message: "Successfully created a News!",
          articles: result
        });
      }
    })
    .catch(next);
});

app.put("/news/:id", (req, res, next) => {
  const id = req.params.id;
  const operations = {};
  for (const opr of req.body) {
    operations[opr.propName] = opr.value;
  }
  News.update({ _id: id }, { $set: operations })
    .exec()
    .then(result => {
      if (!result) {
        throw new CustomError("Internal Server Error - PUT Method", 500);
      } else {
        res.status(200).json({
          message: "Successfully updated a News!",
          articles: result
        });
      }
    })
    .catch(next);
});

app.delete("/news/:id", (req, res, next) => {
  const id = req.params.id;
  News.remove({ _id: id })
    .exec()
    .then(result => {
      if (!result) {
        throw new CustomError("Unable to Delete News", 500);
      } else {
        res.status(200).json(result);
      }
    })
    .catch(next);
});

module.exports = app;
