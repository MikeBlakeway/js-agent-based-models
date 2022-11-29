import { CANVAS_HEIGHT, CANVAS_WIDTH, PHYSICS } from '../../constants'

export default class Agent {
    constructor({ x, y, m }, p5) {
        this.p5 = p5
        this.Vector = p5.constructor.Vector
        this.map = this.p5.map

        this.mass = m
        this.r = 2
        this.d = this.r * 2

        this.position = p5.createVector(x, y)
        this.velocity = p5.createVector(0, 0)
        this.acceleration = p5.createVector(0, 0)
        this.max_speed = 4 * this.mass
    }

    update() {
        // Update velocity
        this.velocity.add(this.acceleration)
        // Limit speed
        this.velocity.limit(this.max_speed)

        this.position.add(this.velocity)
        // Reset accelerationelertion to 0 each cycle
        this.acceleration.mult(0)
    }

    // Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce = function (F) {
        const A = this.Vector.div(F, this.mass)
        this.acceleration.add(A)
    }

    // A method that calculates a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target) {
        // _v: vector pointing from agent to target
        const _v = this.Vector.sub(target, this.position)
        let d = _v.mag()
        // Scale with arbitrary damping within 100 pixels
        if (d < 100) {
            var m = this.map(d, 0, 100, 0, this.max_speed)
            _v.setMag(m)
        } else {
            _v.setMag(this.max_speed)
        }

        // the closer it gets, the slower it goes
        let force = this.Vector.sub(_v, this.velocity)
        force.limit(0.1)
        this.applyForce(force)
    }

    display() {
        this.p5.circle(this.position.x, this.position.y, this.d)
        this.p5.fill(250, 128, 114)
        this.p5.stroke(250, 128, 114)
    }
}
