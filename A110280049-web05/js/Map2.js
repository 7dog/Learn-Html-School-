//Google Map display 阿里山
function initMap(){
    var myLocation ={lat: 23.4495574, lng: 120.6597026};
    var thismap = new google.maps.Map(document.getElementById('myMap2'),{
        zoom: 15,
        center: myLocation,
    });
    var marker = new google.maps.Marker({
        position:myLocation,
        map:thismap,
        icon: "https://maps.google.com/mapfiles/kml/paddle/ylw-blank.png",
        animation: google.maps.Animation.BOUNCE,
    });
}