function sendEmail() {
    var email = document.getElementById('email_addr').value;
    var name = document.getElementById('name_input').value;
    var subject = document.getElementById('subject_handle').value;
    var message = document.getElementById('message').value;

    Email.send({
      //SecureToken: 'Your-Secure-Token', // Replace with your Secure Token
      To: email,
      From: 'austinwindsurfschool@gmail.com', // Replace with your email
      Subject: subject,
      Body: `Name: ${name}<br/>Message: ${message}`
    }).then(
      message => alert('Mail sent successfully')
    );
  }
