function change(){
    if(document.getElementById("videos").options[document.getElementById("videos").selectedIndex].text == "Trailer"){
        document.getElementById("video1").style.display = "block";
        document.getElementById("video2").style.display = "none";
        document.getElementById("video3").style.display = "none";
    } else if (document.getElementById("videos").options[document.getElementById("videos").selectedIndex].text == "Highlights") {
        document.getElementById("video2").style.display = "block";
        document.getElementById("video3").style.display = "none";
        document.getElementById("video1").style.display = "none";
    } else {
        document.getElementById("video3").style.display = "block";
        document.getElementById("video1").style.display = "none";
        document.getElementById("video2").style.display = "none";
    }
}