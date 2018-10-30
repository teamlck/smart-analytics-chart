import { Canvas } from '@/canvas/canvas'

export class ChartBase {
  constructor (id, opt) {
    this.opt = {
      ...opt
    }

    let el = document.getElementById(id)
    let computedStyle = window.getComputedStyle(el)
    this.canvas = new Canvas(parseInt(computedStyle.width), parseInt(computedStyle.height))

    el.appendChild(this.canvas.element)
  }
}
