Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/taskList', {name: 'taskList'});
Router.route('/locate', {name: 'locate'});
Router.route('/task/:id', {
    template: 'task',
    data: function(){
        return Tasks.findOne(this.params.id);
    }
});
