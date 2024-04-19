const scriptURL = "https://script.google.com/macros/s/AKfycbwfGmGQaj1NSiK_hHxs7LXamKLiFIxg2vWj0IMhXfAO7HrpD-4lcrGQgat32q2AjHFvMA/exec"

const form = document.forms['subscription-form-mailing-list']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! You are added to our mailing list!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error! Please call or email AWS!', error.message))
})