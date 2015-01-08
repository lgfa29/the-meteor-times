Articles = new Mongo.Collection("articles");

Router.configure({
  layoutTemplate: 'main'
});

Router.route("/", function() {
  this.render("home");
});

Router.route("/articles/:id", function() {
  var id = new Mongo.ObjectID(this.params.id);
  var article = Articles.findOne(id);
  Session.set("currentArticle", article._id);

  this.render("article", { data: article });
});
