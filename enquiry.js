function validateForm(){

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var country = document.getElementById("country").value;
var message = document.getElementById("message").value;

if(name=="" || email=="" || country=="" || message==""){
alert("Please fill all fields");
return false;
}

alert("Thank you! Your enquiry has been submitted.");

return true;

}
