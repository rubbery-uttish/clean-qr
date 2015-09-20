Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {template: 'taskList'});
Router.route('/taskList', {name: 'taskList'});
Router.route('/locate', {name: 'locate'});
Router.route('/task/:id', {
    template: 'task',
    data: function(){
        return Tasks.findOne(this.params.id);
    }
});
Router.route('/task/:id/:action', {
    template: 'task',
    data: function(){
        try {
            var toReturn = Tasks.findOne(this.params.id);
            toReturn.action = this.params.action;
            return toReturn;
        } catch (e) {
            console.log(e.message);
        }
    }
});
Router.route('/action/:id', {where: 'server'})
.post(function() {
    Tasks.update(this.params.id, {
        $set: {
            lastAction: new Date()
        }
    });
    this.response.end('post request\n');
});
