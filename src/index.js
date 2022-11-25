import p5 from 'p5'
import './sass/index.scss'

import demo from './scenarios/demo.scenario'

const containerElement = document.getElementById('simulation')

new p5(demo, containerElement)
