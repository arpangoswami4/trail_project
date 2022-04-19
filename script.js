
function mobileNav()
{
    document.getElementById("mob1").classList.toggle("responsive");
    document.getElementById("mob4").style.position = "relative"; 
    document.getElementById("mob2").classList.toggle("p--left");
    document.getElementById("triple--dash").classList.toggle("p--right");
    document.getElementById("mob3").classList.toggle("margin--nil");
}

var textContent=document.getElementById("bar1");
var imgContent=document.getElementById("bar2");
var holderContent=document.getElementById("bar3");


function scroller(){

    var w = window.outerWidth;
    if (w <650) {      
    
        if(textContent.style.display=="none"){
            textContent.style.display="flex";
            imgContent.style.display="none";
            textContent.style.textAlign = "center";
        }
        else{
            imgContent.style.display="flex";
            textContent.style.display="none";
        }
        
    
    }
    else{
        if(textContent.style.display=="none" || imgContent.style.display=="none"){
            textContent.style.display="flex";
            imgContent.style.display="flex";
            holderContent.style.display="none";
        }
        else{
            textContent.style.display="none";
            imgContent.style.display="none";
            holderContent.style.display="flex";
        }
    }
}
window.onresize = resized;
function resized(){
    w=window.outerWidth;
    if( w >= 650 ) {
        imgContent.style.display="flex";
        textContent.style.display="flex";
        textContent.style.textAlign = "justify";
        holderContent.style.display="none";
    }
    else{
        textContent.style.display="none";
        holderContent.style.display="none";
        imgContent.style.display="flex";
        

    }
    
  }
    


