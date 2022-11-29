export const startAgents = (agents, _p) => {
    const target = _p.createVector(100, 100)

    return agents.map(agent => {
        agent.seek(target)
        agent.update()
        agent.display()
    })
}
