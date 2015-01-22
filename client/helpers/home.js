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
    return Articles.find().fetch();
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

Template.article_preview.helpers({
  authorName: function() {
    return Meteor.users.findOne(this.author_id).username;
  },
  preview: function() {
    var t = "";

    if (this.text.length > 400) {
      t = this.text.substring(0, 200) + "\n...\n" + this.text.substring(this.text.length - 200);
    }
    else {
      t = this.text;
    }

    return t.split("\n");
  }
});
