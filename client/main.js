Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.articles.helpers({
  articles: function() {
    return Articles.find();
  }
});

Template.article.helpers({
  currentAuthor: function() {
    var id = new Mongo.ObjectID(Session.get("currentArticle"));
    var article = Article.findOne(id);

    return Meteor.user() && article.author === Meteor.user();
  }
});
