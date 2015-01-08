Articles = new Mongo.Collection("articles");

Router.configure({
  layoutTemplate: 'main'
});

Router.route("/", function() {
  this.render("home");
});

Router.route("/articles/:id", function() {
  this.render("article", {
    data: function() {
      return Articles.findOne({ _id: this.params.id });
    },
    name: 'article.show'
  });
});
