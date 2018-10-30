import './scss/index.scss'
import { ChartMouseClick, ChartMouseMove } from '@'

let nav = document.getElementById('navbar')
let mouseClickChart = null
let mouseMoveChart = null

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

      if (!mouseClickChart) mouseClickChart = new ChartMouseClick('mouse_click_chart')
      break

    case 'mouseMove':
      document.getElementById('contentHome').style.display = 'none'
      document.getElementById('contentMouseClick').style.display = 'none'
      document.getElementById('contentMouseMove').style.display = 'block'

      if (!mouseMoveChart) mouseMoveChart = new ChartMouseMove('mouse_move_chart')
      break
  }
})
