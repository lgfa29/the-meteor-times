Template.article_new.events({
  "submit .article_new": function(event) {
    var headline = event.target.headline.value;
    var text = event.target.text.value;

    event.target.headline.value = "";
    event.target.text.value = "";

    Meteor.call("addArticle", headline, text);

    return false;
  }
});
