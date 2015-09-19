Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/taskCard', {name: 'taskCard'});