Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.body.helpers({
  currentAuthor: function() {
    var article = Article.findOne(Session.get("currentArticle"));

    return Meteor.user() && article.author_id === Meteor.userId();
  },

  today: function() {
    return new Date().toDateString();
  }
});

Template.articles.helpers({
  articles: function() {
    return Articles.find();
  }
});

Template.new_article.events({
  "submit .article-form": function(event) {
    event.preventDefault();

    var headline = event.target.headline.value;
    var text = event.target.text.value;

    event.target.headline.value = "";
    event.target.text.value = "";

    Meteor.call("addArticle", headline, text);
  }
});

Template.article_preview.helpers({
  author: function() {
    return Meteor.users.findOne()
  }
})
