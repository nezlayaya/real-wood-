var Per = 100;

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.1, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var Per = 200;
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log(Per);
}
myMap();
console.log(Per);