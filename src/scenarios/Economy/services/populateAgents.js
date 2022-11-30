import { CANVAS, AGENT } from '../constants'
import Agent from '../models/Agent/Agent.model'

export const populateAgents = _p => {
    const agentsArray = []

    for (let i = 0; i < AGENT.MAX_POPULATION; i++) {
        let x = _p.random(0, CANVAS.WIDTH - i)
        let y = _p.random(0, CANVAS.HEIGHT - i)

        agentsArray.push(new Agent({ x, y }, _p))
    }

    return agentsArray
}
