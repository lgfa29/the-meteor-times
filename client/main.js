Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.registerHelper("isAuthor", function() {
  return Meteor.userId() === this.author_id;
});
