Template.main.helpers({
  today: function () {
    return new Date().toDateString();
  }
});

Template.latest_articles.helpers({
  articles: function() {
    if (Session.get("currentArticleID")) {
      return Articles.find({_id: {$ne: Session.get("currentArticleID")}});
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
    if (Session.get("currentArticleID")) {
      return Articles.findOne({_id: Session.get("currentArticleID")});
    }
    return false;
  }
});
