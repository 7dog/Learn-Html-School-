function initMap(){
    var myLocation ={lat: 25.078304, lng: 121.5239483};
    var thismap = new google.maps.Map(document.getElementById('myMap3'),{
        zoom: 15,
        center: myLocation,
    });
    var marker = new google.maps.Marker({
        position: myLocation,
        map:thismap,
        icon:"https://www.google.com/mapfiles/arrow.png",
        label:{text:"Not Here", color:"red", fontSize:'24px',},
        animation:google.maps.Animation.BOUNCE,
    });
}