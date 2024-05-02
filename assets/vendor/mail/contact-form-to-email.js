function emailSend() {
    var form = document.querySelector('contact-email-form');
   // const form = document.forms['subscription-form-mailing-list']

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name: " + userName +
        "<br/> Phone: " + phone +
        "<br/> Email: " + email +
        "<br/> Subject: " + subject +
        "<br/> Message: " + message;

    console.log("Sending email...");
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hana.s.bechara@gmail.com",
        Password: "B5D4A42C735905A336D891EC665BFF03FEE9",
        To: "austinwindsurfschool@gmail.com",
        From: "hana.s.bechara@gmail.com",
        Subject: "Windsurf Email",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Successful", "Thank you for your message", "success")
                .then((value) => {
                    form.reset(); // This will reset the form after clicking 'OK' in the swal
                });
            } else {
                swal("Error", "Email sending failed: " + message, "error");
            }
        }
    ).catch(error => {
        console.error("Failed to send email:", error);
        swal("Error", "System error: " + error.message, "error");
    });


    return false;
}
