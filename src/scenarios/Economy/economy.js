import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants'
import { populateAgents, startAgents } from './services'

const economy = _p => {
    const agents = populateAgents(_p)

    _p.setup = () => {
        _p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    }

    _p.draw = () => {
        _p.background(240)
        startAgents(agents)
    }
}

export default economy
