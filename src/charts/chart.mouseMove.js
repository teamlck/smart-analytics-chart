import { ChartBase } from '@/charts/chart.base'

export class ChartMouseMove extends ChartBase {
  constructor (id, opt) {
    super(id, opt)

    this.canvas.drawCircle()
  }
}
