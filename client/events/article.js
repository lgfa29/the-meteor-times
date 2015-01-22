Template.article_preview.events({
  "click .glyphicon-pencil": function (event) {
    Session.set("currentArticleId", this._id);
    Session.set("currentAction", "editing");
  },
  "click .glyphicon-remove": function (event) {
    Meteor.call("deleteArticle", this._id);
  }
})

Template.latest_articles.events({
  "click .glyphicon-plus": function (event) {
    Session.set("currentArticleId", undefined);
    Session.set("currentAction", "new");
  }
});
