Template.circleButton.rendered = function(){
}
 
Template.circleButton.events({
    'click .icon-button': function(e){
        if (Template.instance().data.link) {
            Router.go(Template.instance().data.link)
        }
    }
});

Template.circleButton.helpers({
});
