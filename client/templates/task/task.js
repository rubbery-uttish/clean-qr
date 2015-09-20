var claimed = false;
var donated = false;

Template.task.rendered = function(){

}
 
Template.task.events({
    "click #submit": function(e){
        claim();
    },
    "click #donate": function(e){
        donate();
    }
});

Template.task.helpers({
    'parseAction': function(data){
        if (data && (data.action == 'claim') && !claimed) {
            claim();
        } else if (data && (data.action == 'donate') && !donated) {
            donate();
        }
    },
    'submitLink': function(){
        try {
            return 'submit/' + Template.instance().data._id;
        } catch (e) {
            console.log(e.message);
        }
    }
});

function recentAction(id){
    var lastAction = Tasks.findOne(id).lastAction;
    return ((new Date() - lastAction) < 10000);
}

function donate(){
    var balance = Template.instance().data.balance;
    var newBalance = balance + parseInt(window.prompt('Amount to donate'));
    Tasks.update(Template.instance().data._id, {$set: {
        balance: newBalance
    }});
    alert('Thanks!');
    donated = true;   
}

function claim(){
    var thisData = Template.instance().data;
    var locationCoords = thisData.loc.coordinates;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var currentCoords = [position.coords.longitude, position.coords.latitude];
            console.log(currentCoords);
            console.log(locationCoords);
            var distanceCondition = getDistanceBetween(currentCoords, locationCoords) < .5;
            var timeCondition = recentAction(thisData._id);
            if (distanceCondition && timeCondition) {
                alert("Good job!");
                Tasks.update(thisData._id, {$set: {
                    balance: 0
                }});
            } else if (!distanceCondition) {
                alert('You must be near the cleanup to claim resposibility.');
            } else if (!timeCondition) {
                alert('No recent action detected.');
            }
        }, function(error){
            console.log(error);
        });
    } 
    claimed = true;
}
