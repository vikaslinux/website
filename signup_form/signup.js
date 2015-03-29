

function checkform(form)
{
 if(form.fname.value == "" ) {
      alert("Error: first name cannot be blank!");
      form.fname.focus();
      return false;
}
if(form.fname.value=="First Name"){
  alert("Error: first name cannot be first name!");
      form.fname.focus();
      return false;
}
 

 if(form.lname.value == "") {
      alert("Error: last name cannot be blank!");
      form.lname.focus();
      return false;
}
 if(form.lname.value == "Last Name") {
      alert("Error: last name cannot be Last name!");
      form.lname.focus();
      return false;
}
 if( form.email.value == "" )
   {
     alert( "Please provide your Email!" );
    Form.email.focus() ;
     return false;
   }
    
  else{
    var emailID = form.email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID")
      form.email.focus() ;
       return false;
   }
}
if(form.pwd.value=="") {
        alert("Error: Password cannot be blank!!");
        form.pwd.focus();
        return false;
      }
 if(form.pwd.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.pwd.focus();
        return false;
      }
if(form.pwd.value != form.cpwd.value)
{
 alert("Error: password and confirm password fields don't matched!!please try again");
      form.pwd.focus();
      return false;

}
if(!form.checkbox.checked) {
    alert("plse accept terms and coditions to continue");
return false;
    }
   
}

