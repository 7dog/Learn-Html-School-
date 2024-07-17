//Google Map display 實踐大學
function initMap(){
    var myLocation ={lat: 25.0846814, lng: 121.5455938};
    var thismap = new google.maps.Map(document.getElementById('myMap4'),{
        zoom: 15,
        center: myLocation,
    });
    var marker = new google.maps.Marker({
        position: myLocation,
        map:thismap,
        icon:"http://maps.google.com/mapfiles/kml/paddle/grn-square.png",
        animation:google.maps.Animation.DROP,
        title:"This is my school",
    });
}