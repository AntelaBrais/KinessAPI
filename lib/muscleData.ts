enum InnervationNerves {
  Musculocutaneous = 'Musculocutaneous nerve',
  Radial = 'Radial nerve',
  Median = 'Median nerve',
  LateralPectoral = 'Lateral Pectoral nerve',
  MedialPectoral = 'Medial Pectoral nerve',
  UpperSubscapular = 'Upper subscapular nerve',
  LowerSubscapular = 'Lower subscapular nerve',
  Axillary = 'Axillary nerve',
  Suprascapula = 'Suprascapula nerve',
  Thoracodorsal = 'Thoracodorsal nerve',
  Lumbar = 'Lumbar nerve',
  Femoral = 'Femoral nerve',
  Obturador = 'Obturador nerve',
  Sciatic = 'Sciatic nerve'
}

enum NerveRoots {
  c1 = 'C1',
  c2 = 'C2',
  c3 = 'C3',
  c4 = 'C4',
  c5 = 'C5',
  c6 = 'C6',
  c7 = 'C7',
  c8 = 'C8',
  t1 = 'T1',
  t2 = 'T2',
  t3 = 'T3',
  t4 = 'T4',
  t5 = 'T5',
  t6 = 'T6',
  t7 = 'T7',
  t8 = 'T8',
  t9 = 'T9',
  t10 = 'T10',
  t11 = 'T11',
  t12 = 'T12',
  l1 = 'L1',
  l2 = 'L2',
  l3 = 'L3',
  l4 = 'L4',
  l5 = 'L5',
  s1 = 'S1',
  s2 = 'S2',
  s3 = 'S3'
}

interface Innervation {
  nerve: InnervationNerves | Array<InnervationNerves>
  root: Array<NerveRoots>
}

enum Action {
  ForearmSupination = 'Supination of the forearm',
  ForearmPronation = 'Pronation of the forearm',

  ElbowFlexion = 'Flexion of the elbow',
  ElbowExtension = 'Extension of the elbow',

  WeakShoulderFlexion = 'Weak flexion of the shoulder',
  WeakShoulderAbduction = 'Weak Abduction of the Shoulder',

  ShoulderExtension = 'Extension of the shoulder',
  ShoulderFlexion = 'Flexion of the shoulder',
  ShoulderAdduction = 'Adduction of the shoulder',
  ShoulderAbduction = 'Abudction of the shoulder',

  ShoulderHorizontalAbduction = 'Horizontal abduction of the shoulder',
  ShoulderHorizontalAdduction = 'Horizontal adduction of the shoulder',
  ShoulderInternalRotation = 'Internal rotation of the shoulder',
  ShoulderExternalRotation = 'External rotation of the shoulder',
  ShoulderDiagonalAdduction = 'Diagonal Adduction of the shoulder',
  ShoulderDiagonalAbduction = 'Diagonal Abduction of the shoulder',

  HipFlexion = 'Flexion of the hip',
  HipExtension = 'Extension of the hip',
  HipAdduction = 'Adduction of the hip',
  HipAbduction = 'Abduction of the hip',
  AnteriorPelvicRotation = 'Anterior Pelvic Rotation',
  HipExternalRotation = 'External Rotation of the hip',
  HipInternalRotation = 'Internal Rotation of the hip',
  HipInternalRotationKneeFlexed = 'Internal rotation of the hip when knee is flexed',
  PelvicTransverseRotationContralaterallyFtabilizedFemur = 'Transverse pelvic rotation contralaterally when ipsilateral femur is stabilized',

  LumbarSpineFlexion = 'Flexion of the lumbar spine',
  LumbarSpineLateralFlexion = 'Lateral flexion of the lumbar spine',
  PelvicLateralRotationContralateral = 'Lateral rotation of the pelvic to the contralateral side',

  PelvicPosteriorRotation = 'Posterior Rotation of the Pelvic',

  KneeExtension = 'Extension of the knee',
  KneeFlexion = 'Flexion of the knee',
  KneeInternalRotation = 'Internal rotation of the knee',

  ThighExternalRotation = 'External Rotation of the thigh'
}

enum PlaneMotion {
  Transverse = 'Transverse',
  Sagittal = 'Sagittal',
  Frontal = 'Frontal',
  Diagonal = 'Diagonal'
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

const brachialis: Muscle = {
  name: 'Brachialis',
  origin: 'Distal half of the anterior shaft of the humerus',
  insertion: 'Coronoid process of the ulna',
  action: [Action.ElbowFlexion],
  planeMotion: [PlaneMotion.Sagittal],
  innervation: {
    nerve: InnervationNerves.Musculocutaneous,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const brachioRadialis: Muscle = {
  name: 'Brachio-Radialis',
  origin:
    'Distal 2/3 of the lateral condyloid (supracondylar) rydge of the humerus',
  insertion:
    'Lateral surface of the distal end of the radius and the styloid process',
  action: [
    Action.ElbowFlexion,
    Action.ForearmPronation,
    Action.ForearmSupination
  ],
  planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
  innervation: {
    nerve: InnervationNerves.Radial,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const pronatorTeres: Muscle = {
  name: 'Pronator teres',
  origin:
    'Distal part of the medial condyloid ridge of the humerus and medial side of the proximal ulna',
  insertion: 'Middle 1/3 of the lateral surface of the radius',
  action: [Action.ElbowFlexion, Action.ForearmPronation],
  planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
  innervation: {
    nerve: InnervationNerves.Median,
    root: [NerveRoots.c7, NerveRoots.c6]
  }
}

const pronatorQuadratus: Muscle = {
  name: 'Pronator Quadratus',
  origin: 'Distal 1/4 of the anterior side of the ulna',
  insertion: 'Distal 1/4 of the anterior side of the radius',
  action: [Action.ForearmPronation],
  planeMotion: [PlaneMotion.Transverse],
  innervation: {
    nerve: InnervationNerves.Median,
    root: [NerveRoots.c7, NerveRoots.c6]
  }
}

const tricepsBrachiLongHead: Muscle = {
  name: 'Triceps Brachii Long Head',
  origin:
    'Infraglenoid tubercle below inferior lip of the glenoid fossa of the scapula',
  insertion: 'Olecranon process of the ulna',
  action: [
    Action.ElbowExtension,
    Action.ShoulderExtension,
    Action.ShoulderAdduction,
    Action.ShoulderHorizontalAbduction
  ],
  planeMotion: [
    PlaneMotion.Transverse,
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal
  ],
  innervation: {
    nerve: InnervationNerves.Radial,
    root: [NerveRoots.c7, NerveRoots.c8]
  }
}

const tricepsBrachiLateralHead: Muscle = {
  name: 'Triceps Brachii Lateral Head',
  origin: 'Upper half of the posterior surface of the humerus',
  insertion: 'Olecranon process of the ulna',
  action: [Action.ElbowExtension],
  planeMotion: [PlaneMotion.Sagittal],
  innervation: {
    nerve: InnervationNerves.Radial,
    root: [NerveRoots.c7, NerveRoots.c8]
  }
}

const tricepsBrachiMedialHead: Muscle = {
  name: 'Triceps Brachii Medial Head',
  origin: 'Distal 2/3 of the posterior surface of the humerus',
  insertion: 'Olecranon process of the ulna',
  action: [Action.ElbowExtension],
  planeMotion: [PlaneMotion.Sagittal],
  innervation: {
    nerve: InnervationNerves.Radial,
    root: [NerveRoots.c7, NerveRoots.c8]
  }
}

const supinator: Muscle = {
  name: 'Supinator',
  origin:
    'Lateral epicondyle of the humerus and the neighboring posterior part of the ulna',
  insertion: 'Lateral surface of the proximal radius just below the head',
  action: [Action.ForearmSupination],
  planeMotion: [PlaneMotion.Transverse],
  innervation: {
    nerve: InnervationNerves.Radial,
    root: [NerveRoots.c6]
  }
}

const anconeus: Muscle = {
  name: 'Anconeus',
  origin: 'Posterior surface of the lateral condyle of the humerus',
  insertion:
    'Posterior surface of the lateral olecranon process and proximal 1/4 of the ulna',
  action: [Action.ElbowExtension],
  planeMotion: [PlaneMotion.Sagittal],
  innervation: {
    nerve: InnervationNerves.Radial,
    root: [NerveRoots.c7, NerveRoots.c8]
  }
}

const pectoralisMajorUpper: Muscle = {
  name: 'Pectoralis Major upper fibers',
  origin: 'Medial half of anterior surface of clavicle',
  insertion:
    'Flat tendon 2-3 inches wide to lateral lip of intertubercular groove of humerus',
  action: [
    Action.ShoulderInternalRotation,
    Action.ShoulderHorizontalAdduction,
    Action.ShoulderDiagonalAdduction,
    Action.ShoulderFlexion,
    Action.ShoulderAbduction
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse,
    PlaneMotion.Diagonal
  ],
  innervation: {
    nerve: InnervationNerves.LateralPectoral,
    root: [NerveRoots.c5, NerveRoots.c6, NerveRoots.c7]
  }
}

const pectoralisMajorLower: Muscle = {
  name: 'Pectoralis Major lower fibers',
  origin:
    'Anterior surface of costal cartilages of first six ribs, and adjoining portion of sternum',
  insertion:
    'Flat tendon 2-3 inches wide to lateral lip of intertubercular groove of humerus',
  action: [
    Action.ShoulderInternalRotation,
    Action.ShoulderHorizontalAdduction,
    Action.ShoulderDiagonalAdduction,
    Action.ShoulderFlexion,
    Action.ShoulderAbduction
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse,
    PlaneMotion.Diagonal
  ],
  innervation: {
    nerve: InnervationNerves.MedialPectoral,
    root: [NerveRoots.c8, NerveRoots.t1]
  }
}

const pectoralisMajorGroup: Array<Muscle> = [
  pectoralisMajorUpper,
  pectoralisMajorLower
]

const subscapularis: Muscle = {
  name: 'Sub-scapularis',
  origin: 'Entire anterior surface of subscapular fossa',
  insertion: 'Lesser tubercle of humerus',
  action: [
    Action.ShoulderInternalRotation,
    Action.ShoulderExtension,
    Action.ShoulderAdduction
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: [
      InnervationNerves.UpperSubscapular,
      InnervationNerves.LowerSubscapular
    ],
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const coracoBrachialis: Muscle = {
  name: 'Coraco-brachialis',
  origin: 'Coracoid process of scapula',
  insertion: 'Middle of medial border of humeral shaft',
  action: [
    Action.ShoulderDiagonalAdduction,
    Action.ShoulderHorizontalAdduction
  ],
  planeMotion: [PlaneMotion.Diagonal, PlaneMotion.Transverse],
  innervation: {
    nerve: InnervationNerves.Musculocutaneous,
    root: [NerveRoots.c5, NerveRoots.c6, NerveRoots.c7]
  }
}

const deltoidAnterior: Muscle = {
  name: 'Deltoid Anterior Fibers',
  origin: 'Anterior lateral third of clavicle',
  insertion: 'Deltoid tuberosity on lateral humerus',
  action: [
    Action.ShoulderAbduction,
    Action.ShoulderFlexion,
    Action.ShoulderHorizontalAdduction,
    Action.ShoulderDiagonalAdduction,
    Action.ShoulderInternalRotation
  ],
  planeMotion: [
    PlaneMotion.Diagonal,
    PlaneMotion.Transverse,
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal
  ],
  innervation: {
    nerve: InnervationNerves.Axillary,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const deltoidMiddle: Muscle = {
  name: 'Deltoid Middle Fibers',
  origin: 'Lateral aspect of acromion',
  insertion: 'Deltoid tuberosity on lateral humerus',
  action: [Action.ShoulderAbduction, Action.ShoulderHorizontalAbduction],
  planeMotion: [PlaneMotion.Transverse, PlaneMotion.Frontal],
  innervation: {
    nerve: InnervationNerves.Axillary,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const deltoidPosterior: Muscle = {
  name: 'Deltoid Posterior Fibers',
  origin: 'Inferior edge of spine of ulna',
  insertion: 'Deltoid tuberosity on lateral humerus',
  action: [
    Action.ShoulderAbduction,
    Action.ShoulderHorizontalAbduction,
    Action.ShoulderDiagonalAbduction,
    Action.ShoulderExternalRotation
  ],
  planeMotion: [
    PlaneMotion.Transverse,
    PlaneMotion.Frontal,
    PlaneMotion.Diagonal
  ],
  innervation: {
    nerve: InnervationNerves.Axillary,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const deltoidGroup: Array<Muscle> = [
  deltoidAnterior,
  deltoidMiddle,
  deltoidPosterior
]

const supraSpinatus: Muscle = {
  name: 'Supra-spinatus',
  origin: 'Medial 2/3 of supraspinous fossa',
  insertion: 'Superiorly on greater tubercle of humerus',
  action: [Action.ShoulderAbduction],
  planeMotion: [PlaneMotion.Frontal],
  innervation: {
    nerve: InnervationNerves.Suprascapula,
    root: [NerveRoots.c5]
  }
}

const latissimusDorsi: Muscle = {
  name: 'Latissimus Dorse',
  origin:
    'Posterior crest of ilium, back of sacrum and spinous processes of lumbar and lower six thoracic vertebrae, slips from lower three ribs',
  insertion:
    'Medial side of intertubercular groove of humerus, just anterior to the insertion of the teres major',
  action: [
    Action.ShoulderExtension,
    Action.ShoulderAdduction,
    Action.ShoulderInternalRotation,
    Action.ShoulderHorizontalAbduction
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: InnervationNerves.Suprascapula,
    root: [NerveRoots.c6, NerveRoots.c7, NerveRoots.c8]
  }
}

const teresMajor: Muscle = {
  name: 'Teres Major',
  origin:
    'Posteriorly on inferior third of lateral border of scapula and just superior to the inferior angle',
  insertion:
    'Medial lip of intertubercular groove of humerus, just posterior to the insertion of the latissimus dorsi',
  action: [
    Action.ShoulderExtension,
    Action.ShoulderAdduction,
    Action.ShoulderInternalRotation
  ],
  planeMotion: [
    PlaneMotion.Frontal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: InnervationNerves.LowerSubscapular,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const infraSpinatus: Muscle = {
  name: 'Infra-spinatus',
  origin: 'Infraspinous fossa just below spine of scapula',
  insertion: 'Posteriorly on greater tubercle of humerus',
  action: [
    Action.ShoulderExtension,
    Action.ShoulderDiagonalAbduction,
    Action.ShoulderExternalRotation,
    Action.ShoulderHorizontalAbduction
  ],
  planeMotion: [
    PlaneMotion.Diagonal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: InnervationNerves.Suprascapula,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const teresMinor: Muscle = {
  name: 'Teres Minor',
  origin: 'Posteriorly on upper and middle aspect of lateral border of scapula',
  insertion: 'Posteriorly on greater tubercle of humerus',
  action: [
    Action.ShoulderExtension,
    Action.ShoulderDiagonalAbduction,
    Action.ShoulderExternalRotation,
    Action.ShoulderHorizontalAbduction
  ],
  planeMotion: [
    PlaneMotion.Diagonal,
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: InnervationNerves.Axillary,
    root: [NerveRoots.c5, NerveRoots.c6]
  }
}

const iliacus: Muscle = {
  name: 'Iliacus',
  origin: 'Inner surface of the ilium',
  insertion: 'Lesser trochanter of the femur and shaft just below',
  action: [
    Action.HipFlexion,
    Action.AnteriorPelvicRotation,
    Action.HipExternalRotation,
    Action.PelvicTransverseRotationContralaterallyFtabilizedFemur
  ],
  planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
  innervation: {
    nerve: [InnervationNerves.Lumbar, InnervationNerves.Femoral],
    root: [NerveRoots.l2, NerveRoots.l4]
  }
}

const psoas: Muscle = {
  name: 'Psoas major and minor',
  origin:
    'Lower borders of the transverse processes (L1–L5), sides of the bodies of the last thoracic vertebra (T12), the lumbar vertebrae (L1–L5), intervertebral fibrocartilages, and base of the sacrum',
  insertion:
    'Lesser trochanter of the femur and shaft just below psoas minor; pectineal line (of pubis) and iliopectineal eminence',
  action: [
    Action.HipFlexion,
    Action.AnteriorPelvicRotation,
    Action.LumbarSpineFlexion,
    Action.HipExternalRotation,
    Action.PelvicTransverseRotationContralaterallyFtabilizedFemur,
    Action.LumbarSpineLateralFlexion,
    Action.PelvicLateralRotationContralateral
  ],
  planeMotion: [
    PlaneMotion.Sagittal,
    PlaneMotion.Transverse,
    PlaneMotion.Frontal
  ],
  innervation: {
    nerve: [InnervationNerves.Lumbar, InnervationNerves.Femoral],
    root: [NerveRoots.l2, NerveRoots.l4]
  }
}

const rectusFemoris: Muscle = {
  name: 'Rectus Femoris',
  origin:
    'Anterior inferior iliac spine of the ilium and groove (poste- rior) above the acetabulum',
  insertion:
    'Superior aspect of the patella and patella tendon to the tibial tuberosity',
  action: [
    Action.HipFlexion,
    Action.KneeExtension,
    Action.AnteriorPelvicRotation
  ],
  planeMotion: [PlaneMotion.Sagittal],
  innervation: {
    nerve: [InnervationNerves.Femoral],
    root: [NerveRoots.l2, NerveRoots.l4]
  }
}

const sartorius: Muscle = {
  name: 'Sartorius',
  origin: 'Anterior superior iliac spine and notch just below the spine',
  insertion: 'Anterior medial surface of the tibia just below the condyle',
  action: [
    Action.HipFlexion,
    Action.KneeFlexion,
    Action.AnteriorPelvicRotation,
    Action.ThighExternalRotation,
    Action.KneeInternalRotation,
    Action.HipAbduction
  ],
  planeMotion: [
    PlaneMotion.Sagittal,
    PlaneMotion.Frontal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: [InnervationNerves.Femoral],
    root: [NerveRoots.l2, NerveRoots.l3]
  }
}

const pectineus: Muscle = {
  name: 'Pectineus',
  origin: 'Space 1 inch wide on the front of the pubis just above the crest',
  insertion:
    'Rough line leading from the lesser trochanter down to the linea aspera',
  action: [Action.HipFlexion, Action.HipAdduction, Action.HipExternalRotation],
  planeMotion: [
    PlaneMotion.Sagittal,
    PlaneMotion.Frontal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: [InnervationNerves.Femoral],
    root: [NerveRoots.l2, NerveRoots.l4]
  }
}

const adductorBrevis: Muscle = {
  name: 'Adductor Brevis',
  origin:
    'Front of the inferior pubic ramus just below the origin of the adductor longus',
  insertion:
    'Lower 2/3 of the pectineal line of the femur and the upper half of the medial lip of the linea aspera',
  action: [Action.HipFlexion, Action.HipAdduction, Action.HipExternalRotation],
  planeMotion: [
    PlaneMotion.Sagittal,
    PlaneMotion.Frontal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: [InnervationNerves.Obturador],
    root: [NerveRoots.l3, NerveRoots.l4]
  }
}

const adductorLongus: Muscle = {
  name: 'Adductor Longus',
  origin: 'Anterior pubis just below its crest',
  insertion: 'Middle 1/3 of the linea aspera',
  action: [Action.HipFlexion, Action.HipAdduction],
  planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Frontal],
  innervation: {
    nerve: [InnervationNerves.Obturador],
    root: [NerveRoots.l3, NerveRoots.l4]
  }
}

const adductorMagnus: Muscle = {
  name: 'Adductor Magnus',
  origin:
    'Edge of the en- tire pubic ramus and the ischium and ischial tuberosity',
  insertion:
    'Whole length of the linea aspera, inner condyloid ridge, and adductor tubercle',
  action: [
    Action.HipExtension,
    Action.HipAdduction,
    Action.HipExternalRotation
  ],
  planeMotion: [
    PlaneMotion.Sagittal,
    PlaneMotion.Frontal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: [InnervationNerves.Obturador, InnervationNerves.Sciatic],
    root: [
      NerveRoots.l2,
      NerveRoots.l3,
      NerveRoots.l4,
      NerveRoots.l5,
      NerveRoots.s1,
      NerveRoots.s2,
      NerveRoots.s3
    ]
  }
}

const gracilis: Muscle = {
  name: 'Gracilis',
  origin: 'Anteromedial edge of the descending ramus of the pubis',
  insertion: 'Anterior medial surface of the tibia below the condyle',
  action: [
    Action.HipFlexion,
    Action.HipAdduction,
    Action.HipInternalRotation,
    Action.KneeInternalRotation,
    Action.KneeFlexion
  ],
  planeMotion: [
    PlaneMotion.Sagittal,
    PlaneMotion.Frontal,
    PlaneMotion.Transverse
  ],
  innervation: {
    nerve: [InnervationNerves.Obturador],
    root: [NerveRoots.l2, NerveRoots.l3, NerveRoots.l4]
  }
}

const semitendinosus: Muscle = {
  name: 'Semitendinosus',
  origin: 'Ischial tuberosity',
  insertion:
    'Upper anterior medial surface of the tibia just below the condyle',
  action: [
    Action.HipExtension,
    Action.HipInternalRotation,
    Action.KneeInternalRotation,
    Action.KneeFlexion,
    Action.PelvicPosteriorRotation
  ],
  planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
  innervation: {
    nerve: [InnervationNerves.Sciatic],
    root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.s2]
  }
}
