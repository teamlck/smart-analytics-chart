export class Canvas {
  constructor (width, height) {
    this.width = width
    this.height = height

    this.element = null
    this.context = null

    this.initCanvas()
  }

  initCanvas () {
    let el = document.createElement('canvas')

    el.display = 'block'
    el.width = this.width
    el.height = this.height
    el.style.width = '100%'
    el.style.height = '100%'

    this.element = el
    this.context = this.element.getContext('2d')
  }

  drawRect () {
    this.context.lineWidth = 1
    this.context.strokeStyle = 'blue'
    this.context.rect(20,20,40,40);
    this.context.stroke();
  }
}
