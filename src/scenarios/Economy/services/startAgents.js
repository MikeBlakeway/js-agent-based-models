export const startAgents = agents => {
    return agents.map(agent => {
        agent.seek()
        agent.update()
        agent.display()
    })
}
