Router.configure({
  layoutTemplate: 'main'
});

Router.route("/", function() {
  this.render("home");
});

Router.route("/articles/new", function() {
  this.render("new_article")
});

Router.route("/articles/:id", function() {
  var article = Articles.findOne(this.params.id);
  Session.set("currentArticle", article._id);

  this.render("article", { data: article });
});
