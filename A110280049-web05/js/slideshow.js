//Auto play pictures
function init(){
    window.setInterval("changelmg()", 2500)
}
var i = 1;
function changelmg(){
    i++;
    document.getElementById("img01").src="photos/0"+i+".jpg"
    if(i==7){
        i=0;
    }
}