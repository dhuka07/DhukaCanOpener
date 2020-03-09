/*
This page contains form validation using Jquery validation plugin
*/

$(document).ready(function() {													//Ready function
	$("#fname").focus();														//keeps focus on First Name
	$.validator.addMethod("validEmail",											
    function(value, element) {	
        return value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,6}$/);						//Method for Email Validation	
    },
    "Please Enter proper Email"													//Display Message 
);
	$.validator.addMethod("validDate",											//Method for Date Validation	
    function(value, element) {
        return value.match(/^(19|20)?\d{4}[-](0?[1-9]|1[0-2])[-](0?[1-9]|[1[0-9]|2?[0-9]|3[0-1])$/);
    },
    " Date format! YYYY-MM-DD"													//Display Message 
);
	$.validator.addMethod("validDrpDwn",
	function(element){	
		return $("#country").val() !="country";									//Method for Drop Down Validation			
	},	
	"please select your country"												//Display Message 
);
	$("#form").validate({														//validating Rules
        rules:{
            fname:{
                required: true,    												//Required for fname
			},
			lname:{
				required:true,													//Required for lname
			},
		
			'gender[]':{ 			
				required:true 													//Required for Gender Radio button
			},

			email:{																//Required for Email
				required:true,
				email:true,
				validEmail:true,
			},
			bday:{																//Required for date
				required:true,
				validDate:true,
			},
			country:{															//Required for drop down country
				required:true,
				validDrpDwn:true,
			},
			messagefrmUser:{													//Required for user Message
				required:true,
				maxlength:[100],
			},
			'condition[]':{														//Required for agree condition
				required:true,
				maxlength: 2,
			},
		},
		messages:{																//Display Error Messages
            fname:{
                required: "Enter First Name",    
			},
			lname:{
				required: "Enter Last Name"
			},
		
			email:{
				required: "Enter Valid Email"
			},
			bday:{
				required: "Enter Date of Birth"
			},
			messagefrmUser:{
				required: "Enter Your Message for Us!",
				max: "Keep your Message Shortes then 100 words"
			},
			condition:{
				required: "Please check the box",
			},
		},
		submitHandler: function(form){												//Form Submit Event Handler
            form.submit();
        }

    })		

});																					//End Ready