import * as Effectors from './test.json'

interface Muscle {
  name: string
  origin: string
  insertion: string
  action: Array<string>
  planeMotion: Array<string>
  innervation: {
    nerve: Array<string>
    root: Array<string>
  }
}

interface Exercise {
  reference: string
  name: string
  effectors: Array<Muscle>
}

const e1_11: Exercise = {
  reference: '1_11',
  name: 'Press Banca',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Deltoid Anterior Fibers']
  ]
}
