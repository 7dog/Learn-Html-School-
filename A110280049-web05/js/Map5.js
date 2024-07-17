//Google Map display 墾丁
function initMap(){
    var myLocation ={lat: 21.9460562, lng: 120.7941664};
    var thismap = new google.maps.Map(document.getElementById('myMap5'),{
        zoom: 15,
        center: myLocation,
    });
    var marker = new google.maps.Marker({
        position: myLocation,
        map:thismap,
        icon:{
            url:'http://maps.google.com/mapfiles/ms/micons/cabs.png',
            scaledSize:new google.maps.Size(30,60),
        },
    });
    var infowindow = new google.maps.InfoWindow({
        content:'<h3><font color="red">離墾丁 A Hotel 300 公尺</font></h3>',
    });
    marker.addListener('click',function(){
            infowindow.open(map, marker);
        }
    );
}