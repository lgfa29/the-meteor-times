if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

Template.articles.helpers({
  articles: function() {
    return Articles.find();
  }
});
