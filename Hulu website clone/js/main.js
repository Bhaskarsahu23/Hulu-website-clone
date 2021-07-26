const modal = document.querySelector('.model')
const loginBtn = document.querySelector('.btn-login')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}
