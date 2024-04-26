const scriptURL = "https://script.google.com/macros/s/AKfycbyKFNV802fbQv5XnVYxWT8Ew612xv8QwZDXXwirBzSluKjze0guhQRJ_x9yPX8pZCu6/exec"
const form = document.forms['sign-up-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! You are added to our mailing list!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error! Please call or email AWS!', error.message))
})