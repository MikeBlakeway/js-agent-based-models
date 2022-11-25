const demo = _p => {
    let x = 100
    let y = 100

    _p.setup = function () {
        _p.createCanvas(800, 400)
    }

    _p.draw = function () {
        _p.background(0)
        _p.fill(255)
        _p.rect(x, y, 50, 50)
    }
}

export default demo
