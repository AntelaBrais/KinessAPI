enum InnervationNerves {
  Musculocutaneous = 'Musculocutaneous'
}

enum NerveRoots {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  l1,
  l2,
  l3,
  l4,
  l5
}

interface Innervation {
  nerve: InnervationNerves
  root: Array<NerveRoots>
}

enum Action {
  ForearmSupination = 'Supination of the forearm',
  ElbowFlexion = 'Flexion of the elbow',
  WeakShoulderFlexion = 'Weak flexion of the shoulder',
  WeakShoulderAbduction = 'Weak Abduction of the Shoulder'
}

enum PlaneMotion {
  Transverse = 'Transverse',
  Sagittal = 'Sagittal',
  Frontal = 'Frontal'
}

interface Muscle {
  name: string
  origin: string
  insertion: string
  action: Array<Action>
  planeMotion: Array<PlaneMotion>
  innervation: Innervation
}

const bicepsBrachiLongHead: Muscle = {
  name: 'Biceps Brachii Long Head',
  origin: 'Supraglenoid tubercle above the superior lip of the glenoid fossa',
  insertion:
    'Tuberosity of the radius and bicipital aponeurosis (lacertus fibrosis)',
  action: [
    Action.ForearmSupination,
    Action.ElbowFlexion,
    Action.WeakShoulderAbduction,
    Action.WeakShoulderFlexion
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: InnervationNerves.Musculocutaneous,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const bicepsBrachiShortHead: Muscle = {
  name: 'Biceps Brachii Short Head',
  origin:
    'Coracoid process of the scapula and upper lip of the glenoid fossa in conjunction with the proximal attachment of the coracobrachialis',
  insertion:
    'Tuberosity of the radius and bicipital aponeurosis (lacertus fibrosis)',
  action: [
    Action.ForearmSupination,
    Action.ElbowFlexion,
    Action.WeakShoulderAbduction,
    Action.WeakShoulderFlexion
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: InnervationNerves.Musculocutaneous,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const bicepsBrachiGroup: Array<Muscle> = [
  bicepsBrachiLongHead,
  bicepsBrachiShortHead
]

console.log(bicepsBrachiLongHead)

const efectores = {
  pectorales: 'Pectorales',
  pectoralesGrupo: {
    mayor: 'Pectoral Mayor',
    menor: 'Pectoral Menor'
  },
  deltoides: 'Deltoides',
  deltoidesGrupo: {
    anterior: 'Deltoides Haces Anteriores',
    medial: 'Deltoides Porcion Media',
    posterior: 'Deltoides Haces Posteriores'
  },
  supraespinoso: 'Supraespinoso',
  subescapular: 'Subescapular',
  infraespinoso: 'Infraespinoso',
  redondoMenor: 'Redondo Menor',
  redondoMayor: 'Redondo Mayor',
  trapecio: 'Trapecio',
  elevadorEscapula: 'Elevador de la escapula',
  trapecioGrupo: {
    superior: 'Trapecio Porcion Superior',
    media: 'Trapecio Porcion Media',
    inferior: 'Trapecio Porcion Inferior'
  },
  bicepsBraquial: 'Biceps Braquial',
  braquial: 'Braquial',
  romboides: 'Romboides',
  bicepsFemoral: 'Biceps Femoral',
  isquiotibiales: 'Isquiotibiales',
  gluteos: 'Gluteos',
  gluteosGrupo: {
    mayor: 'Gluteo Mayor',
    medio: 'Gluteo Medio',
    menor: 'Gluteo Menor'
  },
  cuadriceps: 'Cuadriceps',
  cuadricepsGrupo: {
    rectoFemoral: 'Recto Femoral',
    vastoLateral: 'Vasto Lateral',
    vastoMedial: 'Vasto Medial',
    vastoIntermedio: 'Vasto Intermedio'
  },
  serratoAnterior: 'Serrato Anterior',
  dorsalAncho: 'Dorsal Ancho',
  braquiorradial: 'Braquiorradial',
  triceps: 'Triceps',
  tricepsGrupo: {
    lateral: 'Triceps Cabeza Lateral',
    larga: 'Triceps Cabeza Larga',
    medial: 'Triceps Cabeza Medial'
  },
  extensorRadialCarpo: 'Extensor Radial del Carpo',
  anconeo: 'Anconeo',
  aductores: 'Aductores',
  rectoAbdomen: 'Recto del Abdomen',
  oblicuoExternoAbdomen: 'Oblicuo Externo del Abdomen',
  erectoresEspalda: 'Erectores Espalda',
  gemelos: 'Gemelos'
}
