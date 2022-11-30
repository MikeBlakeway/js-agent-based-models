import { CANVAS } from '../constants'

export const startAgents = (agents, _p) => {
    const target = _p.createVector(CANVAS.WIDTH / 2, CANVAS.HEIGHT / 2)

    return agents.map(agent => {
        agent.moveTo(target)
        agent.update()
        agent.display()
    })
}
