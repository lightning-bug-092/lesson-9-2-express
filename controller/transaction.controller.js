var db = require("../db.js");
var shortId = require("shortid");
module.exports.index = function(req, res) {
  var transactions = db.get("transactions").value();
  res.render("./transactions/index.pug", {
    transactions: transactions
  });
}
module.exports.create = function(req, res) {
  var books = db.get("books").value();
  var users = db.get("users").value();
  res.render("./transactions/create.pug", {
    books: books,
    users: users
  });
};
module.exports.postCreate = function(req, res) {
  req.body.id = shortId.generate();
  req.body.isComplete =false;
  db.get("transactions")
    .push(req.body)
    .write();
  res.redirect("/");
};
module.exports.complete = function(req,res){
  res.render('./transactions/complete.pug')
}
module.exports.postComplete = function(req,res){
  var id = req.params.id;
  db.get("transactions")
    .find({ id: id })
    .assign({ isComplete: req.body.isComplete })
    .write();
  res.redirect("/");
}
