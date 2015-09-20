var locationCoords;

Template.task.rendered = function(){
    try {
        locationCoords = this.data.loc.coordinates;
    } catch (e) {
        console.log('Could not get coords');
    }
}
 
Template.task.events({
    "click #submit": function(e){
        var thisData = Template.instance().data;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                var currentCoords = [position.coords.longitude, position.coords.latitude];
                if (getDistanceBetween(currentCoords, locationCoords) < .02) {
                    alert("Good job!");
                    Tasks.update(thisData._id, {$set: {
                        balance: 0
                    }});
                } else {
                    alert('You must be near the cleanup to claim resposibility.');
                }
            }, function(error){
                console.log(error);
            });
        }
    },
    "click #donate": function(e){
        var balance = Template.instance().data.balance;
        var newBalance = balance + parseInt(window.prompt('Amount to donate'));
        Tasks.update(Template.instance().data._id, {$set: {
            balance: newBalance
        }});
        alert('Thanks!');
    }
});


Template.task.helpers({
    'submitLink': function(){
        try {
            return 'submit/' + Template.instance().data._id;
        } catch (e) {
            console.log(e.message);
        }
    }
});
