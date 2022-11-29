import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants'

export default class Agent {
    constructor({ x, y, m }, p5) {
        this.p5 = p5
        this.Vector = p5.constructor.Vector
        this.mass = m
        this.r = m * 2
        this.d = this.r * 2

        this.position = p5.createVector(x, y)
        this.velocity = p5.createVector(0, 0)
        this.acceleration = p5.createVector(0, 0)
    }

    getMouse() {
        return this.p5.createVector(this.p5.mouseX, this.p5.mouseY)
    }

    update() {
        // Update velocity
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        // Limit speed
        this.velocity.limit(this.maxspeed)
        // Reset accelerationelertion to 0 each cycle
        this.acceleration.mult(0)
    }

    // Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce = function (force) {
        let f = this.Vector.div(force, this.mass)
        this.acceleration.add(f)
    }

    // A method that calculates a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek() {
        const target = this.p5.createVector(100, 100)
        const desired = this.Vector.sub(target, this.position) // A vector pointing from the location to the target

        // Scale to maximum speed
        desired.setMag(this.maxspeed)

        // Steering = Desired minus velocity
        var steer = this.Vector.sub(desired, this.velocity)
        steer.limit(this.maxforce) // Limit to maximum steering force

        this.applyForce(steer)
    }

    display() {
        this.p5.circle(this.position.x, this.position.y, this.d)
        this.p5.fill(250, 128, 114)
        this.p5.stroke(250, 128, 114)
    }
}
