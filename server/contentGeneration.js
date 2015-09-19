generateContent = function() {
	if (Tasks.find({}).count() == 0) {
		for (var i = 0; i < 10; i++) {
			var task = {
				title: "Title " + i,
				date_added: new Date(),
				balance: Math.floor((Math.random() * 20) + 1),
				status: "unclaimed",
				description: "This is another description " + i,
				location: {
					lng: (Math.random() * (41.0800 - 41.0500) + 41.0800).toFixed(4),
					lat: (Math.random() * (73.0800 - 73.0500) + 73.0800).toFixed(4),
				},
			}

			Tasks.insert(task);
		}
	}
}

/*function setDefaultPicture() {
	var fs = Npm.require('fs');

	try {
		var defaultPic = fs.readFileSync('/stamford-icenter.jpg');
		var newFile = new FS.File();

        newFile.attachData(defaultPic, {type: 'image/jpeg'}, function(error){
            //if(error) throw error;
            newFile.name('default_pic.png');
            return Images.insert(newFile);
        });
	} catch (error) {
		console.log("Error inserting default picture into DB");
	}
}*/