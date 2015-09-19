// Global Configuration
var Api = new Restivus({
	useDefaultAuth: false,
	prettyJson: true,
	apiPath: 'api/',
	version: 'v1',
	defaultHeaders: {
		'Content-Type': 'application/json'
	}
});

Api.addRoute('/task/:task_id', {
	get: function() {
		var task_id = this.urlParams.task_id;
		return Tasks.findOne(task_id).balance;
	},
	post: function() {

	},
	put: function() {
		
	}
});