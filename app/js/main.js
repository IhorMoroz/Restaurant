var map,
    marker,
    position = {
        lat: 48.312386,
        lng: 31.526764
    },
    mapOption = {
        center : position,
        zoom : 10,
        scrollwheel: false
    },
    markerOption = {
        position: position,
        map: map,
        title: 'Good Food',
        icon: "../img/app/decoration/goodfood.png"
    };

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), mapOption);
    marker = new google.maps.Marker(markerOption);
    marker.setMap(map);
}
