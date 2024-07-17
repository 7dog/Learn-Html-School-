//Google Map display 日月潭
function initMap(){
    var myLocation ={lat:23.8523012, lng: 120.9009427};
    var thismap = new google.maps.Map(document.getElementById('myMap1'),{
        zoom: 15,
        center: myLocation
    });
    var marker = new google.maps.Marker({
        position:myLocation,
        map:thismap,
    });
}