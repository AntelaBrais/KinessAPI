// Esta variable es de razón, ya que cuando es 0 indica ausencia de la característica.
enum AssistanceDegree {
  Free = 0,
  Intermediate = 0.5,
  Complete = 1
}

interface Material {
  reference: string
  name: string
  assistance: AssistanceDegree
}

// 1 is for Free Movement, 2 for Intermediate assistance material and 3 for complete assistance material.

const m1_1: Material = {
  reference: 'm1_1',
  name: 'Mancuernas',
  assistance: AssistanceDegree.Free
}

const m1_2: Material = {
  reference: 'm1_2',
  name: 'Kettlebell',
  assistance: AssistanceDegree.Free
}

const m1_3: Material = {
  reference: 'm1_3',
  name: 'Barra recta corta',
  assistance: AssistanceDegree.Free
}

const m1_4: Material = {
  reference: 'm1_4',
  name: 'Barra Z',
  assistance: AssistanceDegree.Free
}

const m1_5: Material = {
  reference: 'm1_5',
  name: 'Barra olímpica',
  assistance: AssistanceDegree.Free
}

export const Material = {
  m1_1,
  m1_2,
  m1_3,
  m1_4,
  m1_5
}
