Template.article.events({
  "click .article_delete": function (event) {
    event.preventDefault();
    if(confirm("Are you sure?")) {
      Meteor.call("deleteArticle", this._id);
    }
  }
});