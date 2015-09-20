function insertLocation(name, desc, lng, lat){
    Tasks.insert({
        title: name,
        date_added: new Date(),
        balance: Math.floor((Math.random() * 20) + 1),
        status: "unclaimed",
        description: desc,
        loc: {
            type: "Point",
            coordinates: [ 
                -73.538734,
                41.053430
            ]
        }
    });
}

generateContent = function() {
	if (Tasks.find({}).count() == 0) {
		insertLocation('Stamford Innovation Center', 
                'Some team left all their stuff here after pulling an all nighter. ' +  
                'This job will be considered complete once all the stuff on the table is thrown away',
                -73.538734,
                41.053430);
		insertLocation('Bauerfeld Residence', 
                'Some kid left some crap all over the kitchen',
                -73.446055,
                41.246497);

    }
}