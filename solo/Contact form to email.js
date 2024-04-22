function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name: " + userName +
        "<br/> Phone: " + phone +
        "<br/> Email: " + email +

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
                swal("Successful", "Thank you for your message", "success");
            } else {
                swal("Error", "Email sending failed: " + message, "error");
            }
        }
    ).catch(error => {
        console.error("Failed to send email:", error);
        swal("Error", "System error: " + error.message, "error");
    });
}
 