// Template.article.events({
//   "click .article_delete": function (event) {
//     event.preventDefault();
//     if(confirm("Are you sure?")) {
//       Meteor.call("deleteArticle", this._id);
//     }
//   }
// });

Template.article_preview.events({
  "click .glyphicon-pencil": function (event) {
    Session.set("currentArticleId", this._id);
    Session.set("editingArticleId", this._id);
  },
  "click .glyphicon-remove": function (event) {
    Meteor.call("deleteArticle", this._id);
  }
})

Template.latest_articles.events({
  "click div.article-header > a": function (event) {
      Session.set("newArticle", true);
  }
});
