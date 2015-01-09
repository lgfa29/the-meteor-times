Articles = new Mongo.Collection("articles");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Template.body.helpers({
    today: function () {
      return new Date().toDateString();
    }
  });

  Template.articles.helpers({
    articles: function() {
      return Articles.find();
    }
  });
}
