/*

This page contains Menu Plugin in Navigation Bar
Image Caruosel in products sale slide show
Color transition in P tag of " Our facility includes smooth Touch design Unlike most can openers Our Features are.  " on clicking this 

*/
$(document).ready(function() {
   
    $("#list h3").click(function() {                            //on clicking list id h3 tag
        $(this).toggleClass("minus");                           
        if ($(this).attr("class") == "minus") {                 // check if minus or hidden
               
             $(this).next().slideDown(1000,"easeOutBounce" );   //Ease out bounce in 1000 mili secinds
                
             $( "#contentfacility" ).animate({                  // make color transitions using Jquery UI
                backgroundColor: "#cccccc",                     // animating background color 
                color: "#fff",                                  //animating font color
                height: 700                                     //increasing height 
              }, 1000 );
           
           }
           
           else {                           
            $(this).next().slideUp(1000, "easeInBounce");       // Else if its maximized or not hidden
                                                                //Then Ease in bounce in 1000 mili seconds
        }
    });                                                         // end click 
       
                                                                //carusal
        var nextSlide = $("#slides img:first-child");
        var nextCaption;
        var nextSlideSource;
            
                                                                // start slide show
        setInterval( function () {   
               $("#caption").fadeOut(1000);
               $("#slide").fadeOut(1000,
                   function () {
                        if (nextSlide.next().length == 0) {     //check for next slide
                        nextSlide = $("#slides img:first-child");//Assigning next slide img first child
                    }
                    else {
                        nextSlide = nextSlide.next();
                    }
                    nextSlideSource = nextSlide.attr("src");    //Assigning next slide img src
                    nextCaption = nextSlide.attr("alt");        //Assigning next slide img alt
                    $("#slide").attr("src", nextSlideSource).fadeIn(1000);					
                    $("#caption").text(nextCaption).fadeIn(1000);   //fade and fade out in gap of 1000 mili sec
                }
            );                                                  // end callback    
               
        2000});
       
    });                                                           // end ready
   