Template.taskCard.helpers({
	'title': function() {
		return; //Tasks.findOne().title;
	}
});

Template.taskCard.events({
    'click .template-task-card': function(){
        try {
            Router.go('/task/' + Template.instance().data._id);
        } catch(e) {
            console.log(e.message);
        }
    }
});
