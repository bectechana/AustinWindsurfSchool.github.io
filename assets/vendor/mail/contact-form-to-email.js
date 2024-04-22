function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
	"<br/> Message" + message;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hana.s.bechara@gmail.com",
    Password : "B5D4A42C735905A336D891EC665BFF03FEE9",
    To : "austinwindsurfschool@gmail.com",
    From : "hana.s.bechara@gmail.com",
    Subject : "Windsurf Email",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "Thank you for your message", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}