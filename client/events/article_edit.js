Template.article_edit.events({
  "input input[name='headline']": function(event) {
    Meteor.call("updateArticleHeadline", Session.get("currentArticleId"), event.currentTarget.value);
  },
  "input textarea": function(event) {
    if (Session.get("currentArticleId")) {
      Meteor.call("updateArticleText", Session.get("currentArticleId"), event.currentTarget.value);
    }
  },
  "click button": function(event) {
    Session.set("currentArticleId", undefined);
    Session.set("currentAction", "none");
  }
});

Template.article_edit.rendered = function(){
    var input = this.find('input')

    if(input){
        input.focus()
    }
}
