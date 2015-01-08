Meteor.methods({
  addArticle: function(headline, text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized");
    }
    var author = Meteor.user().username;

    Articles.insert({
      headline: headline,
      text: text,
      author: { name: author }
    });
  },
  deleteArticle: function(articleId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized");
    }
    Articles.remove(articleId);
  }
})