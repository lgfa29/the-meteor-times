Template.main.helpers({
  today: function () {
    return new Date().toDateString();
  }
});

Template.latest_articles.helpers({
  articles: function() {
    return Articles.find();
  }
});

Template.ads.helpers({
  ads: function() {
    return Ads.find();
  }
});
