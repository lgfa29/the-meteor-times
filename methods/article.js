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
  },

  updateArticleHeadline: function(articleId, headline) {
    Articles.update({_id: articleId}, {$set: {headline: headline}});
  },
  updateArticleText: function(articleId, text) {
    Articles.update({_id: articleId}, {$set: {text: text}});
  }
})
