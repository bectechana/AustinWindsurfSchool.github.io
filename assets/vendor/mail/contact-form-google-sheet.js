const scriptURL = ""

const form = document.forms['contact-form-mailing-list']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! We will get back to you as soon as possible, please check you email!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error! Please call or email AWS!', error.message))
})