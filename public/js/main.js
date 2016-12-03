function validateForm() {
    var fName = document.forms["myForm"]["firstname"].value;
    var lName = document.forms["myForm"]["lastname"].value;
    var email = document.forms["myForm"]["email"].value;
    var cEmail = document.forms["myForm"]["confirmemail"].value;
    if (fName == null || fName == "") {
        alert("First Name must be filled out");
        return false;
    }
    else if (lName == null || lName == "") {
        alert("Last Name must be filled out");
        return false;
    }
    else if (email == null || email == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (cEmail == null || cEmail == "" ) {
        alert("Confirm Email must be filled out");
        return false;
    }
    else if (cEmail != email){
      alert("Confirm Email and Email must match");
      return false;
    }
    else{
      alert("Thank you for your submission");
    }
}
