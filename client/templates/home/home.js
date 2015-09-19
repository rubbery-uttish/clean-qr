Template.homeButton.events({
    'click .icon-button': function(){
        Router.go(Template.instance().data.link)
    }
});

Template.home.rendered = function(){
}
 
Template.home.events({
});


Template.home.helpers({
});
