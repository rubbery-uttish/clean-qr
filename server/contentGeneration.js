generateContent = function() {
	if (Tasks.find({}).count() == 0) {
		for (var i = 0; i < 10; i++) {
			var task = {
				title: "Title " + i,
				date_added: new Date(),
				balance: Math.floor((Math.random() * 20) + 1),
				status: "unclaimed",
				location: {
					lng: (Math.random() * (41.0800 - 41.0500) + 41.0800).toFixed(4),
					lat: (Math.random() * (73.0800 - 73.0500) + 73.0800).toFixed(4),
				}
			}

			Tasks.insert(task);
		}
	}
}