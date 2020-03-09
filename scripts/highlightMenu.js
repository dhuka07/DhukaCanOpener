/* 
This is created for Menu Plugin of WEb Navigation Bar
*/

(function($){
    $.fn.highlightMenu = function(options){
        var defaults = $.extend({               //setting up default colors
            'bgColor'   :   '#000000',          //background color    
            'color'   :   'white',            //color
            'float': 'left',                   // floating text to left          
            'hoverBgColor'   :   'white',    //hover backgoundcolor     
            'hoverColor'   :   '#000000',      //hover color  
           // 'linkWidth'   :   '125px',         //width of link 
           
            
        },options);
        return this.each(function(){            //this function is for list item with anchor tag
            var items = $("li a");
            var o = defaults;

            items.css('font-family',  'Georgia', 'Times New Roman', 'sans-serif')    //css for font-familty
                 .css('font-weight', 'bold')                            //font set up to be bold
                 .css('text-decoration', 'none')                        //making text decoration none
                 .css('display', 'inline-block')                        //display nav bar in list
                 .css('list-style-type', 'none')                        //aligning text in center
                 .css('text-align', 'center')
                 .css('background-color', o.bgColor)                    //changeing bg color with option
                 .css('color', o.color)                                 //changing color t
                 .css('width', o.linkWidth);                            //link width from option        
            
            items.mouseover(function() {                                // On mouse hover change bg color and font color
                $(this).css('background-color', o.hoverBgColor)         //That is on mouse-over change    
                       .css('color', o.hoverColor);

            });
            items.mouseout(function() {$(this)
                .css('background-color', o.bgColor)                     // On mouse hover change bg color and font color
                .css('color', o.color);                                 //That is on mouse-out change    
            });     

        });

    }

})(jQuery);



