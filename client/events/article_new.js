Template.article_new.events({
  "input input[name='headline']": function(event) {

    if (Session.get("currentArticleID")) {
      Meteor.call("updateArticleHeadline", Session.get("currentArticleID"), event.currentTarget.value);
    }
    else {
      var article = Articles.insert({
        headline: event.currentTarget.value,
        text: "",
        author_id: Meteor.userId()
      });
      Session.set("currentArticleID", article);
    }

  },
  "input textarea": function(event) {
    if (Session.get("currentArticleID")) {
      Meteor.call("updateArticleText", Session.get("currentArticleID"), event.currentTarget.value);
    }
  },
  "submit .article_new": function(event) {
    Session.set("currentArticleID", undefined);
  }
});
