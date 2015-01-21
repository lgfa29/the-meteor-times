Template.main.helpers({
  today: function () {
    return new Date().toDateString();
  }
});

Template.latest_articles.helpers({
  articles: function() {
    if (Session.get("currentArticleId") && Session.equals("newArticle", true)) {
      return Articles.find({_id: {$ne: Session.get("currentArticleId")}});
    }
    return Articles.find();
  },
  newArticle: function () {
    return Session.equals("newArticle", true)
  }
});

Template.ads.helpers({
  ads: function() {
    return Ads.find();
  }
});



Template.article_new.helpers({
  currentArticle: function () {
    if (Session.get("currentArticleId")) {
      return Articles.findOne({_id: Session.get("currentArticleId")});
    }
    return false;
  }
});

Template.article_preview.helpers({
  editingArticle: function() {
    return Session.get("editingArticleId") == this._id;
  }
});
