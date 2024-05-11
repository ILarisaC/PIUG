const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')
  
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.contact-form');
  form.addEventListener('trimite', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      alert('Vă rugăm să completați corect toate câmpurile.');
    }
  });
});
