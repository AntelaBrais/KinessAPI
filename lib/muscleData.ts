enum InnervationNerves {
  Musculocutaneous = 'Musculocutaneous nerve',
  Radial = 'Radial nerve',
  Median = 'Median nerve',
  LateralPectoral = 'Lateral Pectoral nerve',
  MedialPectoral = 'Medial Pectoral nerve',
  UpperSubscapular = 'Upper subscapular nerve',
  LowerSubscapular = 'Lower subscapular nerve',
  Axillary = 'Axillary nerve'
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
  l5 = 'L5'
}

interface Innervation {
  nerve: InnervationNerves | Array<InnervationNerves>
  root: Array<NerveRoots>
}

enum Action {
  ForearmSupination = 'Supination of the forearm',
  ForearmPronation = 'Pronation of the forearm',
  ElbowFlexion = 'Flexion of the elbow',
  WeakShoulderFlexion = 'Weak flexion of the shoulder',
  WeakShoulderAbduction = 'Weak Abduction of the Shoulder',
  ElbowExtension = 'Extension of the elbow',
  ShoulderExtension = 'Extension of the shoulder',
  ShoulderFlexion = 'Flexion of the shoulder',
  ShoulderAdduction = 'Adduction of the shoulder',
  ShoulderAbduction = 'Abudction of the shoulder',
  ShoulderHorizontalAbduction = 'Horizontal abduction of the shoulder',
  ShoulderHorizontalAdduction = 'Horizontal adduction of the shoulder',
  ShoulderInternalRotation = 'Internal rotation of the shoulder',
  ShoulderExternalRotation = 'External rotation of the shoulder',
  ShoulderDiagonalAdduction = 'Diagonal Adduction of the shoulder',
  ShoulderDiagonalAbduction = 'Diagonal Abduction of the shoulder'
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
