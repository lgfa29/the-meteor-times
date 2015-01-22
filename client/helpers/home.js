Template.main.helpers({
  today: function () {
    return new Date().toDateString();
  }
});

Template.latest_articles.helpers({
  articles: function() {
    if (Session.equals("currentAction", "new") && Session.get("currentArticleId")) {
      return Articles.find({_id: {$ne: Session.get("currentArticleId")}});
    }
    return Articles.find();
  },
  isNewArticle: function () {
    return Session.equals("currentAction", "new");
  },
  isEditingArticle: function() {
    return Session.equals("currentAction", "editing") && Session.equals("currentArticleId", this._id);
  }
});

Template.ads.helpers({
  ads: function() {
    return Ads.find();
  }
});
