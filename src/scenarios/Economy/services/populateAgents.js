import { CANVAS, AGENT, PHYSICS } from '../constants'
import Agent from '../models/Agent/Agent.model'

export const populateAgents = _p => {
    const agentsArray = []

    for (let i = 0; i < AGENT.MAX_POPULATION; i++) {
        let x = _p.random(0, CANVAS.WIDTH - i)
        let y = _p.random(0, CANVAS.HEIGHT - i)
        let m = 1 * _p.random()

        agentsArray.push(new Agent({ x, y, m }, _p))
    }

    return agentsArray
}
