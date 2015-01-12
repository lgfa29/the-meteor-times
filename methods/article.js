Meteor.methods({
  addArticle: function(headline, text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized");
    }

    Articles.insert({
      headline: headline,
      text: text,
      author_id: Meteor.userId()
    });
  },
  
  deleteArticle: function(articleId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized");
    }
    Articles.remove(articleId);
  }
})
