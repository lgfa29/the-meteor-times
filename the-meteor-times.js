Articles = new Mongo.Collection("articles", {
  transform: function(doc) {
    doc.author = Meteor.users.findOne(doc.author_id);
    return doc;
  }
});

// Articles = new Mongo.Collection("articles");
Ads = new Mongo.Collection("ads");
