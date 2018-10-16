import './scss/index.scss'

let nav = document.getElementById('navbar')
nav.addEventListener('click', e => {
  let target = e.target

  switch (target.id) {
    case 'home':
      document.getElementById('contentHome').style.display = 'block'
      document.getElementById('contentMouseClick').style.display = 'none'
      document.getElementById('contentMouseMove').style.display = 'none'
      break

    case 'mouseClick':
      document.getElementById('contentHome').style.display = 'none'
      document.getElementById('contentMouseClick').style.display = 'block'
      document.getElementById('contentMouseMove').style.display = 'none'
      break

    case 'mouseMove':
      document.getElementById('contentHome').style.display = 'none'
      document.getElementById('contentMouseClick').style.display = 'none'
      document.getElementById('contentMouseMove').style.display = 'block'
      break
  }
})
