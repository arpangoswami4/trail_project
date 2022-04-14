$(document).ready(function() {
    $(".icon i").click(function() {
        $(".heading__topbar__navbar").toggleClass("responsive");
        $(".heading").css("position", "relative"); 
        $(".heading__topbar__title").toggleClass("p--left");
        $(this).toggleClass("p--right");
        $(".heading__topbar").toggleClass("margin--nil");
        
               
        
        
    });
    $(".heading__content__arrow").click(function(){
        var w = $(window).width();
        if (w <650) {      
            $(".heading__content__text").toggle();
            $(".heading__content__asset").toggle();
            $(".heading__content__text").css("text-align", "center");
        }
        else{
            $(".heading__content__placeholder").toggle();
            $(".heading__content__text").toggle();
            $(".heading__content__asset").toggle();
        }
    });
    $(window).resize(function() {
        if( $(this).width() >= 650 ) {
            // code
            $(".heading__content__asset").show();
            $(".heading__content__text").show();
            $(".heading__content__text").css("text-align", "justify");
            $(".heading__content__placeholder").hide();
        }
        else{
            $(".heading__content__text").hide();

        }
    });
    

});