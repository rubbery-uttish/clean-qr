Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/taskList', {name: 'taskList'});