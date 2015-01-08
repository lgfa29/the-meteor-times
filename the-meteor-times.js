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
      var id = new Mongo.ObjectID(this.params.id);
      return Articles.findOne(id);
    }
  });
});
