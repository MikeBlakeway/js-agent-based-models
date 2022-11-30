import { AGENT, PHYSICS } from '../../constants'
// let m = _p.random(AGENT.MASS, AGENT.MASS + AGENT.MASS)
export default class Agent {
    constructor({ x, y }, p5) {
        // P5 METHODS
        this.p5 = p5
        this.V = p5.constructor.Vector
        this.map = this.p5.map

        // CONSTANTS
        this.mass = AGENT.MASS
        this.r = AGENT.RADIUS
        this.vision = AGENT.VISION

        // PHYSICS
        this.max_speed = 10 / this.mass

        // VECTORS
        this.position = p5.createVector(x, y)
        this.velocity = p5.createVector(0, 0)
        this.acceleration = p5.createVector(0, 0)

        this.maxForce = this.max_speed * this.mass
    }

    update() {
        // Update velocity
        this.velocity.add(this.acceleration)
        // Limit speed
        this.velocity.limit(this.max_speed)

        this.position.add(this.velocity)
        // Reset accelerationelertion to 0 each cycle
        this.acceleration.mult(0)
        const energy = this.calcKineticEnergy(this.mass, this.velocity)
        console.log(energy)
    }

    /**
     * PHYSICS METHODS
     */

    /**
     * @param {Force} F
     * Newton's 2nd Law:
     * F = M * A
     * or A = F / M
     */
    applyForce = function (F) {
        const A = this.V.div(F, this.mass)
        this.acceleration.add(A)
    }

    calcMomentum = function (mass, velocity) {
        return velocity.mult(mass)
    }

    calcKineticEnergy = function (mass, velocity) {
        const keMass = 0.5 * mass
        const v2 = velocity.mult(velocity)
        return v2.mult(keMass)
    }

    // A method that calculates a steering Force towards a target
    // STEER = Force MINUS VELOCITY
    moveTo(target) {
        // targetVector: vector pointing from agent to target
        const targetVector = this.V.sub(target, this.position)
        const distanceToTarget = targetVector.mag()

        if (distanceToTarget < this.vision) {
            const reducedSpeed = this.map(
                distanceToTarget,
                0,
                this.vision,
                0,
                this.max_speed
            )
            targetVector.setMag(reducedSpeed)
        } else {
            targetVector.setMag(this.max_speed)
        }

        // the closer it gets, the slower it goes
        targetVector.sub(this.velocity)
        const maxForce = targetVector.mult(this.mass)
        // targetVector.limit(maxForce)
        this.applyForce(maxForce)
    }

    display() {
        this.p5.circle(this.position.x, this.position.y, this.r * 2)
        this.p5.fill(250, 128, 114)
        this.p5.stroke(250, 128, 114)
    }
}
