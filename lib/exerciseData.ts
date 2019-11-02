import { Effectors } from './muscleData'

interface Exercise {
  id: string
  reference: number
  name: string
  effectors: Array<string>
}

const x1_11: Exercise = {
  id: '12',
  reference: 12,
  name: 'Press Banca',
  effectors: [Effectors]
}
