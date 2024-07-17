function bmi(){
    //First describe way
    var Hei = document.getElementById("height");
    var h = parseFloat(Hei.value);
    //Another describe way
    var w = parseFloat(document.getElementById("weight").value);

    var bmi = w/((h/100)*(h/100));
    var bmi = Math.round(bmi*100);
    var bmi = bmi/100
    bmi.innerHTML = "計算出來的BMI值為" + bmi;

    bmiLevel = [0, 16, 18, 21, 24, 27, 30];
    meaning = ["太瘦了","有點瘦","正常範圍","體重略重","輕微胖了","真的胖了","過於肥胖"];
    colors =["#4775d1","#e6b800","green","pink","orange","red","darkred"];
    for(var i = bmiLevel.length - 1; i >= 0; i--){
        if(bmi >= bmiLevel[i]){
            break;
        }
    };
    customElements.innerHTML ="<font color = "+colors[i] +">您的BMI評估結果為" +meaning[i]+"</font>";

    //勾選的性別
    var obj =document.getElementsByName("gender");
    var selected=[];
    for(var j=0; j<obj.length;j++){
        if(obj[j].checked){
            selected.push(obj[j],value);
        }
    }
    var sex = selected.join();
    if(sex =="male"){
        graphs.innerHTML = "<img src= images/m00" +[i]+".png>";
    }
    else{
        graphs.innerHTML="<img src= images/f00" +[i]+".png>";
    }
};

function clearInfo(){
    bmi.innerHTML ="";customElements.innerHTML ="";grapghs.innerHTML="";
}