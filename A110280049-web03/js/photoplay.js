var seqImg = new Array(5);
var seqImg_length = seqImg.length;

for(var i = 1; i <= seqImg_length; i++){
    seqImg[i-1] = "photos/card" + i + ".jpg";
}

setInterval("sequentialImg()", 1500);
var i = 0;
function sequentialImg() {
    document.getElementById("seq_div").innerHTML = "<img src='"+seqImg[i]+"' class = 'mt-4 nb-4 d-block mx-auto' width = '210px' height = '230px'>";
    i++;
    if(i >= seqImg_length){
        i = 0;
    }
}

var ranImg = new Array(5);
for (var j = 1; j <= ranImg.length; j++){
    ranImg[j-1] ="photos/card" + j +".jpg";
}

setInterval("randomImg()",1500);
function randomImg(){
    var imgIndex = Math.floor(Math.random()*ranImg.length);
    document.getElementById("ran_div").innerHTML = "<img src='"+ranImg[imgIndex]+"' class='mt-4 mb-4 d-block mx-auto' style='width:210px; height:230px'>";
}