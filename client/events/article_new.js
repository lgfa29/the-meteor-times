Template.article_new.events({
  "input input[name='headline']": function(event) {
    var article = Articles.insert({
      headline: event.currentTarget.value,
      text: "",
      author_id: Meteor.userId()
    });
    Session.set("currentArticleId", article);
    Session.set("currentAction", "editing");
  },
  "click button": function(event) {
    Session.set("currentArticleId", undefined);
    Session.set("currentAction", "none");
  }
});

Template.article_new.rendered = function(){
    var input = this.find('input')

    if(input){
        input.focus()
    }
}
