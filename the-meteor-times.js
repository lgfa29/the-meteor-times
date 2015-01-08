Articles = new Mongo.Collection("articles");

if (Meteor.isClient) {
  console.log("Client!");
  Template.body.events({
    "submit .article-form": function(event) {
      console.log("Form submitted!");
      var headline = event.target.headline.value;
      var text = event.target.text.value;

      event.target.headline.value = "";
      event.target.text.value = "";

      Meteor.call("addArticle", headline, text);

      return false;
    },
    "click .delete": function () {
      Meteor.call("deleteArticle", this._id);
    }
  })
}

Meteor.methods({
  addArticle: function(headline, text) {
    console.log("Adding on server!");
    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized");
    }
    var author = Meteor.user().username;

    Articles.insert({
      headline: headline,
      text: text,
      author: { name: author }
    });
  },
  deleteArticle: function(articleId) {
    Articles.remove(articleId);
  }
})