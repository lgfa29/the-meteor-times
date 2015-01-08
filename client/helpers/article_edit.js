Meteor.article_edit.helpers({
  article: function(){
    return Articles.findOne(Session.get('selectedArticleId'));
  }
})