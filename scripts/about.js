/*
This page contains Ease Out in slow  for padel
*/
$(document).ready(function(){        //Ready
  	$("flip").click(function(){
       $("h4").animate({left: '250px'}, "easeOutExpo"); //on click ease out
	  }); 
    $("#flip").click(function(){    //on lick toggle slow
      $("#panel").slideToggle("slow");
   });                              //End Click
});                                 //End Ready
