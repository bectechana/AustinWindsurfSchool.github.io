// Client-side JavaScript
const scriptURL = "https://script.google.com/macros/s/AKfycbyKFNV802fbQv5XnVYxWT8Ew612xv8QwZDXXwirBzSluKjze0guhQRJ_x9yPX8pZCu6/exec";
const form = document.forms['sign-up-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Log the response from Google Apps Script
    alert("Form submitted successfully!"); // Display success message to user
    window.location.reload(); // Reload the page (or redirect) after form submission
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    alert("An error occurred. Please try again later."); // Display error message to user
  });
});
