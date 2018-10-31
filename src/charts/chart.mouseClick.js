import { ChartBase } from '@/charts/chart.base'

export class ChartMouseClick extends ChartBase {
  constructor (id, opt) {
    super(id, opt)

    this.canvas.drawRect()
  }
}
