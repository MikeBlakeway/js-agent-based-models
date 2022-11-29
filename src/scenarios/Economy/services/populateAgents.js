import { CANVAS_HEIGHT, CANVAS_WIDTH, AGENT } from '../constants'
import Agent from '../models/Agent/Agent.model'

export const populateAgents = _p => {
    const agentsArray = []

    for (let i = 0; i < AGENT.MAX_POPULATION; i++) {
        let x = _p.random(0, CANVAS_WIDTH - i)
        let y = _p.random(0, CANVAS_HEIGHT - i)
        let m = AGENT.MASS

        agentsArray.push(new Agent({ x, y, m }, _p))
    }

    return agentsArray
}
