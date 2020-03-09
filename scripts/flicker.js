/**
 * This page Contains Flickar  Image Search from Flicker Api
 */
	$(document).ready(function(){				//ready function
    	var searchTerm;
    	$("#btnSearch").click(function() {		//on click id btnseacrch	
			
			// Set the search term
			searchTerm = "";					//Display if seacrh box is empty
			if ($("#search").val() == "") { alert("You must enter one or more tags!"); }	
			else {
				searchTerm = $("#search").val();
				// Build the URL based on the search term
				var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
	    			  	  "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";
	
				$.getJSON(url, function(data){
					var html = "";
					$.each(data.items, function(i, item){
													//	html += "<h2>" + item.title + "</h2>";	
						html += "<img src=" + item.media.m + ">";
													//	html += "<p><b>Tags: </b>" + item.tags + "</p>";
					});
					$("#photos").html(html);
				});
			}								//End Else 	
        });									//End Click function	
    });										//End Ready
	