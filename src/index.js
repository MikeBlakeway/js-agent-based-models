import p5 from 'p5'
import './sass/index.scss'

import economy from './scenarios/Economy/economy'

const containerElement = document.getElementById('simulation')

const P5 = new p5(economy, containerElement)
