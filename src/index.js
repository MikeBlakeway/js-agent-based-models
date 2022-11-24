import p5 from 'p5'
import './sass/index.scss'

const containerElement = document.getElementById('simulation')

const sketch = scenario => {
    let x = 100
    let y = 100

    scenario.setup = function () {
        scenario.createCanvas(800, 400)
    }

    scenario.draw = function () {
        scenario.background(0)
        scenario.fill(255)
        scenario.rect(x, y, 50, 50)
    }
}
new p5(sketch, containerElement)
