var map;
var mapOptions;
var markers = [];

function initialize() {
    //var myLatlng = new google.maps.LatLng(39.000, -105.500);
    mapOptions = {
        zoom: 7,
    }


    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(pos);

        var marker = new google.maps.Marker({
            position: pos,
            map: map
        });
    });



    google.maps.event.addListener(map, 'click', function (e) {
        placeMarker(e.latLng, map);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);



// To add the marker to the map, use the 'map' property

var placeMarker = function (position, map) {
    var contentString = '<div style="height:30px; width: 100px; overflow:auto"' + ' contenteditable="true"></div>'

    var marker = new google.maps.Marker({
        position: position,
        map: map
    });

    google.maps.event.addListener(marker, 'click', removeMarker);

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(infowindow, 'click', editWindow);

    infowindow.open(map, marker);
    markers.push(marker);
    //map.panTo(position);
};

var removeMarker = function () {
    this.setMap(null);
    console.log(this);
};