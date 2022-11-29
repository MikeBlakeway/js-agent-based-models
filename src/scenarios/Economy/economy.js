import { CANVAS } from './constants'
import { populateAgents, startAgents } from './services'

const economy = _p => {
    const agents = populateAgents(_p)

    _p.setup = () => {
        _p.createCanvas(CANVAS.WIDTH, CANVAS.HEIGHT)
    }

    _p.draw = () => {
        _p.background(240)
        startAgents(agents, _p)
    }
}

export default economy
