var locationDep = new Tracker.Dependency;
var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";

Template.locate.rendered = function(){
    console.log('rendered');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            getMap(position);
        }, function(error){
            console.log(error);
        });
    } else {
        console.log('No navigator');
    }
}
 
Template.locate.events({
});


Template.locate.helpers({
    'mapUrl': function(){
        locationDep.depend();
        return mapUrl;
    }
});

function getMap(position){
    mapUrl = mapUrl + position.coords.latitude + ',' + position.coords.longitude;
    mapUrl = mapUrl + '&zoom=15&size=512x512&maptype=roadmap&sensor=true';
    locationDep.changed();
}
