Template.article_new.events({
  "input input[name='headline']": function(event) {

    if (Session.get("currentArticleId")) {
      Meteor.call("updateArticleHeadline", Session.get("currentArticleId"), event.currentTarget.value);
    }
    else {
      var article = Articles.insert({
        headline: event.currentTarget.value,
        text: "",
        author_id: Meteor.userId()
      });
      Session.set("currentArticleId", article);
    }

  },
  "input textarea": function(event) {
    if (Session.get("currentArticleId")) {
      Meteor.call("updateArticleText", Session.get("currentArticleId"), event.currentTarget.value);
    }
  },
  "click button": function(event) {
    Session.set("editingArticleId", undefined);
    Session.set("newArticle", undefined);
    Session.set("currentArticleId", undefined);
  }
});
