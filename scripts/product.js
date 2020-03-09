/*

This Page get Data from json file and display in web page

*/
$(document).ready(function(){				//Ready 
		$.getJSON("product.json", function(data) {	//get data from product.json file
		$("table").append(	
			"<tr>"+									//Append with Table Data 
			"<th>Model Name</th>"+					//Adding Heading in th tag
			"<th>Stock</th>" +
			"<th>Quantity</th>"+
			"<th>Size</th>"+
			"<th>Colour</th>"+
			"<th>Price</th>"+
			"</tr>"
		);
	
	$.each(data, function() {

	$.each(this, function(key, value) {
		$("table").append(						//Appending data in table 
			"<tr>"+
			"<td>"+ value.Name +"</td> "+		//Adding Data in td tag
			"<td>" + value.Stock + "</td>" + 
			"<td>" + value.Quantity+ "</td>"+
			"<td> " +value.Size +"</td>"+
			"<td> "+ value.Color +"</td>"+
			"<td> "+ value.price +"</td>"+
			"</tr>"
		);
		});
	    }); 
	});
});										//End Ready	