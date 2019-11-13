import * as Effectors from './data.json'

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

const e3_1: Exercise = {
  reference: '3_1',
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

// Brazos
const e1_1_1: Exercise = {
  reference: '111',
  name: 'Flexion alterna + Rotacion de muñeca + Elevación de codos',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    Effectors['Deltoid Anterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}

const e112: Exercise = {
  reference: '112',
  name: 'Flexion alterna del codo apoyado en muslo',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e113: Exercise = {
  reference: '113',
  name: 'Flexion de los codos con mancuernas en banco inclinado',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e114: Exercise = {
  reference: '114',
  name: 'Flexion de codo com mancuernas y presa de martillo',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}

const e115: Exercise = {
  reference: '115',
  name: 'Flexion alterna de codos en polea baja',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e116: Exercise = {
  reference: '116',
  name: 'Flexion de codo con los brazos en cruz en polea alta',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e117: Exercise = {
  reference: '117',
  name: 'Flexion de codo con barra, manos en supinación',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e118: Exercise = {
  reference: '118',
  name: 'Flexion codo en banco Scott guiado',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e119: Exercise = {
  reference: '119',
  name: 'Curl de biceps en banco Scott',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e1110: Exercise = {
  reference: '1110',
  name: 'Curl de biceps con barra y agarre en pronación',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis']
    // efectores.extensorRadialCarpo
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e121: Exercise = {
  reference: '121',
  name: 'Extensiones de codo en polea alta, manos en pronacion',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e122: Exercise = {
  reference: '122',
  name: 'Extensiones de codo en polea alta, agarre en supinación',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
    // efectores.extensorRadialCarpo
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e123: Exercise = {
  reference: '123',
  name: 'Extension alterna de los codos en polea alta, manos en supinacion',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e124: Exercise = {
  reference: '124',
  name: 'Triceps en polea atlas superior',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head']
    // efectores.serratoAnterior
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e125: Exercise = {
  reference: '125',
  name: 'Extension de los brazos en con barra en banco plano',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e126: Exercise = {
  reference: '126',
  name: 'Extension de los brazos en posicion tendida con mancuernas',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e127: Exercise = {
  reference: '127',
  name: 'Extension vertical alterna de los brazos con mancuerna',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e128: Exercise = {
  reference: '128',
  name:
    'Extension alterna de los codos con mancuerna, tronco inclinado hacia delante',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e129: Exercise = {
  reference: '129',
  name: 'Extension de los brazos, sentado con una mancuerna cogida a dos manos',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e1210: Exercise = {
  reference: '1210',
  name: 'Extension de los brazos, sentado, con barra',
  effectors: [
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e1211: Exercise = {
  reference: '1211',
  name: 'Dippigns entre dos bancos',
  effectors: [
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}

// Hombros

const e211: Exercise = {
  reference: '211',
  name: 'Press tras nuca con barra',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus'],
    Effectors['Supra-spinatus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e212: Exercise = {
  reference: '212',
  name: 'Press frontal con barra',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e213: Exercise = {
  reference: '213',
  name: 'Press sentado con mancuernas',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e214: Exercise = {
  reference: '214',
  name: 'Press anterior con rotacion de muñeca',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e222: Exercise = {
  reference: '222',
  name: 'Elevaciones laterales, tronco inclinado hacia delante',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.redondoMenor,
    efectores.infraespinoso,
    efectores.trapecio
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e224: Exercise = {
  reference: '224',
  name: 'Elevaciones laterales de los brazos con mancuernas',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.trapecioGrupo.superior,
    efectores.trapecioGrupo.media
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e215: Exercise = {
  reference: '215',
  name: 'Elvacones anteriores alternas con mancuernas',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e228: Exercise = {
  reference: '228',
  name: 'Elevaciones laterales, acostado de lado',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e216: Exercise = {
  reference: '216',
  name: 'Elevaciones anteriores alternas con polea baja',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e217: Exercise = {
  reference: '217',
  name: 'Elevacion frontal en polea baja, mano en semipronacion',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e223: Exercise = {
  reference: '223',
  name: 'Cara posterior de los hombros en polea doble',
  effectors: [
    efectores.redondoMenor,
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.infraespinoso,
    efectores.romboides,
    efectores.trapecio
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e232: Exercise = {
  reference: '232',
  name: 'Rotacion externa del brazo en polea',
  effectors: [
    efectores.infraespinoso,
    efectores.redondoMenor,
    Effectors['Deltoid Posterior Fibers'],
    efectores.romboides,
    efectores.trapecioGrupo.media
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e226: Exercise = {
  reference: '226',
  name: 'Elevaciones laterales con polea baja, tronco inclinado hacia delante',
  effectors: [
    efectores.redondoMayor,
    efectores.redondoMenor,
    efectores.infraespinoso,
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.trapecio
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e227: Exercise = {
  reference: '227',
  name: 'Elevaciones laterales alternas con polea baja',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e218: Exercise = {
  reference: '218',
  name: 'Elevaciones frontales con una mancuerna',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e219: Exercise = {
  reference: '219',
  name: 'Elevaciones frontales con barra',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    efectores.infraespinoso,
    efectores.serratoAnterior
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e221: Exercise = {
  reference: '221',
  name: 'Traccion vertical en barra, manos separadas',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.trapecio,
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e225: Exercise = {
  reference: '225',
  name: 'Elevaciones laterales en maquina',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    efectores.supraespinoso
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e231: Exercise = {
  reference: '231',
  name: 'Parte posterior de los hombros en maquina',
  effectors: [
    efectores.trapecio,
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.infraespinoso,
    efectores.redondoMenor,
    efectores.romboides
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e311: Exercise = {
  reference: '311',
  name: 'Press de banco inclinado',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Deltoid Anterior Fibers'],
    efectores.serratoAnterior,
    efectores.triceps
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e312: Exercise = {
  reference: '312',
  name: 'Press de banco plano',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    efectores.triceps,
    Effectors['Deltoid Anterior Fibers'],
    efectores.serratoAnterior
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e313: Exercise = {
  reference: '313',
  name: 'Press de banco plano, manos juntas',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e314: Exercise = {
  reference: '314',
  name: 'Press de banco declinado',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Deltoid Anterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e315: Exercise = {
  reference: '315',
  name: 'Press de banco inclinado en maquina convergente',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e316: Exercise = {
  reference: '316',
  name: 'Dips en paralelas',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Anconeus'],
    Effectors['Deltoid Anterior Fibers']
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}
const e317: Exercise = {
  reference: '317',
  name: 'Flexiones de brazos en el suelo',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Lateral Head'],
    Effectors['Triceps Brachii Long Head'],
    Effectors['Triceps Brachii Medial Head'],
    Effectors['Deltoid Anterior Fibers']
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}
const e318: Exercise = {
  reference: '318',
  name: 'Press con mancuernas en banco plano',
  effectors: [
    efectores.triceps,
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Anconeus']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e321: Exercise = {
  reference: '321',
  name: 'Aperturas con mancuernas en banco plano',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e319: Exercise = {
  reference: '319',
  name: 'Press con mancuernas en banco inclinado',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    efectores.triceps,
    efectores.serratoAnterior
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}

// TO-DO: Completar ejercicio
// {
//   name: 'Aperturas con mancuernas en banco inclinado',
//   effectors: Array,
//   cadenaCineticaAbierta: Boolean,
//   tipoMaterial: String,
//   material: Array,
//   patronMovimiento: String
// },

const e322: Exercise = {
  reference: '322',
  name: 'Aperturas en contractor',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e323: Exercise = {
  reference: '323',
  name: 'Contractor Pecho en Maquina',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e324: Exercise = {
  reference: '324',
  name: 'Cruces de poleas de pie',
  effectors: [
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e331: Exercise = {
  reference: '331',
  name: 'Pull-over con mancuerna',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Long Head'],
    efectores.redondoMayor,
    efectores.dorsalAncho,
    efectores.dorsalAncho,
    efectores.romboides
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e332: Exercise = {
  reference: '332',
  name: 'Pull-over con barra en banco plano',
  effectors: [
    Effectors['Pectoralis Major lower fibers'],
    Effectors['Pectoralis Major upper fibers'],
    Effectors['Triceps Brachii Long Head'],
    efectores.serratoAnterior,
    efectores.redondoMayor,
    efectores.dorsalAncho
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}

// Espalda

const e411: Exercise = {
  reference: '411',
  name: 'Traccion en barra fija',
  effectors: [
    efectores.braquiorradial,
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    efectores.redondoMayor,
    efectores.dorsalAncho,
    efectores.romboides,
    efectores.trapecioGrupo.inferior
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}

const e412: Exercise = {
  reference: '412',
  name: 'Traccion en barra fija, agarre estrecho en supinacion',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    efectores.dorsalAncho,
    efectores.redondoMayor
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}

const e413: Exercise = {
  reference: '413',
  name: 'Traccion pecho en polea alta',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    efectores.dorsalAncho,
    efectores.redondoMayor
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e414: Exercise = {
  reference: '414',
  name: 'Traccion tras nuca en polea alta',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    efectores.dorsalAncho,
    efectores.redondoMayor,
    efectores.trapecioGrupo.inferior
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e415: Exercise = {
  reference: '415',
  name: 'Polea al pecho con agarre estrecho',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    efectores.redondoMayor,
    efectores.dorsalAncho
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e421: Exercise = {
  reference: '421',
  name: 'Remo en polea baja, agarre estrecho y semipronacion',
  effectors: [
    efectores.trapecio,
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.dorsalAncho,
    efectores.romboides
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e422: Exercise = {
  reference: '422',
  name: 'Remo en polea baja con barra ancha, manos en pronación',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.redondoMenor,
    efectores.dorsalAncho,
    efectores.romboides,
    efectores.infraespinoso,
    efectores.redondoMayor,
    efectores.trapecio
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e423: Exercise = {
  reference: '423',
  name: 'Pull-over con polea alta brazos extendidos',
  effectors: [
    efectores.tricepsGrupo.larga,
    efectores.dorsalAncho,
    efectores.redondoMayor
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e424: Exercise = {
  reference: '424',
  name: 'Remo horizontal a una mano con mancuernas',
  effectors: [
    efectores.redondoMayor,
    efectores.dorsalAncho,
    efectores.romboides,
    efectores.trapecio,
    Effectors['Deltoid Posterior Fibers'],
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e425: Exercise = {
  reference: '425',
  name: 'Traccion horizontal con mancuernas',
  effectors: [
    Effectors['Deltoid Posterior Fibers'],
    efectores.dorsalAncho,
    efectores.infraespinoso,
    efectores.romboides,
    efectores.redondoMayor,
    efectores.redondoMenor,
    efectores.trapecio
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e426: Exercise = {
  reference: '426',
  name: 'Remo horizontal con barra',
  effectors: [
    efectores.dorsalAncho,
    efectores.trapecio,
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    efectores.romboides,
    efectores.redondoMayor,
    efectores.redondoMenor,
    efectores.infraespinoso,
    Effectors['Deltoid Posterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e427: Exercise = {
  reference: '427',
  name: 'Remo en barra T sin apoyo ventral',
  effectors: [
    efectores.dorsalAncho,
    efectores.romboides,
    efectores.infraespinoso,
    efectores.trapecio,
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    efectores.redondoMayor,
    efectores.redondoMenor,
    Effectors['Deltoid Posterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e428: Exercise = {
  reference: '428',
  name: 'Remo en barra T con apoyo ventral',
  effectors: [
    efectores.trapecio,
    efectores.romboides,
    efectores.infraespinoso,
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    efectores.dorsalAncho,
    Effectors['Deltoid Posterior Fibers']
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e416: Exercise = {
  reference: '416',
  name: 'Peso muerto, piernas extendidas',
  effectors: [
    efectores.gluteosGrupo.mayor,
    efectores.bicepsFemoral,
    efectores.isquiotibiales,
    efectores.erectoresEspalda
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e417: Exercise = {
  reference: '417',
  name: 'Peso muerto estilo sumo',
  effectors: [
    efectores.trapecio,
    efectores.cuadriceps,
    efectores.aductores,
    efectores.dorsalAncho,
    efectores.gluteos,
    efectores.erectoresEspalda
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e418: Exercise = {
  reference: '418',
  name: 'Peso muerto con barra',
  effectors: [
    efectores.trapecio,
    efectores.cuadriceps,
    efectores.bicepsFemoral,
    efectores.rectoAbdomen,
    efectores.oblicuoExternoAbdomen,
    efectores.dorsalAncho,
    efectores.erectoresEspalda
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e419: Exercise = {
  reference: '419',
  name: 'Peso muerto con barra trap',
  effectors: [
    efectores.dorsalAncho,
    efectores.trapecio,
    efectores.infraespinoso,
    efectores.redondoMayor,
    efectores.redondoMenor,
    efectores.gluteos,
    efectores.cuadriceps,
    efectores.erectoresEspalda
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e4110: Exercise = {
  reference: '4110',
  name: 'Extension de tronco en banco',
  effectors: [
    efectores.isquiotibiales,
    efectores.erectoresEspalda,
    efectores.gluteosGrupo.mayor,
    efectores.bicepsFemoral
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}
const e4111: Exercise = {
  reference: '4111',
  name: 'Extension de tronco en maquina guiada',
  effectors: [efectores.erectoresEspalda],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e4112: Exercise = {
  reference: '4112',
  name: 'Remo al cuello con manos juntas',
  effectors: [
    Effectors['Biceps Brachii Long Head'],
    Effectors['Biceps Brachii Short Head'],
    Effectors['Brachialis'],
    Effectors['Brachio-Radialis'],
    efectores.trapecio,
    Effectors['Deltoid Anterior Fibers'],
    Effectors['Deltoid Middle Fibers'],
    Effectors['Deltoid Posterior Fibers'],
    efectores.gluteos,
    efectores.rectoAbdomen,
    efectores.elevadorEscapula
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e4113: Exercise = {
  reference: '4113',
  name: 'Encogimiento de hombros con barra',
  effectors: [efectores.trapecioGrupo.superior, efectores.elevadorEscapula],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e4114: Exercise = {
  reference: '4114',
  name: 'Encogimiento y rotacion de hombros con mancuernas',
  effectors: [
    efectores.trapecio,
    efectores.trapecio,
    efectores.elevadorEscapula
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e4115: Exercise = {
  reference: '4115',
  name: 'Elevacion de los hombros con barra trap',
  effectors: [
    efectores.elevadorEscapula,
    efectores.trapecio,
    efectores.romboides
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e4116: Exercise = {
  reference: '4116',
  name: 'Levantamiento de hombros maquina guiada',
  effectors: [efectores.trapecioGrupo.superior, efectores.elevadorEscapula],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
// Piernas
const e511: Exercise = {
  reference: '511',
  name: 'Flexion de rodillas con mancuernas',
  effectors: [efectores.gluteos, efectores.cuadriceps],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e512: Exercise = {
  reference: '512',
  name: 'Flexion de rodillas con mancuerna sujeta entre las piernas',
  effectors: [efectores.gluteos, efectores.cuadriceps],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e513: Exercise = {
  reference: '513',
  name: 'Squat frontal con barra',
  effectors: [
    efectores.cuadriceps,
    efectores.gluteos,
    efectores.rectoAbdomen,
    efectores.erectoresEspalda
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e514: Exercise = {
  reference: '514',
  name: 'Squat',
  effectors: [
    efectores.gluteos,
    efectores.cuadriceps,
    efectores.isquiotibiales,
    efectores.erectoresEspalda,
    efectores.rectoAbdomen
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e515: Exercise = {
  reference: '515',
  name: 'Squat piernas separadas',
  effectors: [
    efectores.isquiotibiales,
    efectores.cuadriceps,
    efectores.gluteos,
    efectores.rectoAbdomen,
    efectores.erectoresEspalda
  ],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e516: Exercise = {
  reference: '516',
  name: 'Press de piernas inclinado',
  effectors: [
    efectores.cuadriceps,
    efectores.gluteos,
    efectores.isquiotibiales
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e517: Exercise = {
  reference: '517',
  name: 'Hack Squat',
  effectors: [efectores.cuadriceps, efectores.gluteos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e518: Exercise = {
  reference: '518',
  name: 'Box Squat',
  effectors: [efectores.cuadriceps, efectores.erectoresEspalda],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e519: Exercise = {
  reference: '519',
  name: 'Extension de rodillas en maquina guiada',
  effectors: [efectores.cuadriceps],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e521: Exercise = {
  reference: '521',
  name: 'Leg Curl',
  effectors: [
    efectores.isquiotibiales,
    efectores.gemelos,
    efectores.bicepsFemoral
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e522: Exercise = {
  reference: '522',
  name: 'Isquiotibiales alterno en maquina guiada de pie',
  effectors: [
    efectores.bicepsFemoral,
    efectores.isquiotibiales,
    efectores.gemelos
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e523: Exercise = {
  reference: '523',
  name: 'Isquiotibiales sentado en maquina',
  effectors: [
    efectores.isquiotibiales,
    efectores.bicepsFemoral,
    efectores.gemelos
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e524: Exercise = {
  reference: '524',
  name: 'Buenos dias',
  effectors: [
    efectores.erectoresEspalda,
    efectores.isquiotibiales,
    efectores.bicepsFemoral
  ],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
const e531: Exercise = {
  reference: '531',
  name: 'Aductores en polea baja',
  effectors: [efectores.aductores],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.polea,
  material: Array
}
const e532: Exercise = {
  reference: '532',
  name: 'Aductores en maquina',
  effectors: [efectores.aductores],
  cadenaCineticaAbierta: true,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e551: Exercise = {
  reference: '551',
  name: 'Flexion y extension de los pies',
  effectors: [efectores.gemelos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.calistenia,
  material: Array
}
const e552: Exercise = {
  reference: '552',
  name: 'Extension de los tobillos en maquina',
  effectors: [efectores.gemelos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e553: Exercise = {
  reference: '553',
  name: 'Extension de un pie con mancuerna',
  effectors: [efectores.gemelos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.mancuerna,
  material: Array
}
const e554: Exercise = {
  reference: '554',
  name: 'Donkey Calf Raise',
  effectors: [efectores.gemelos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e555: Exercise = {
  reference: '555',
  name: 'Extension de los pies, sentado en maquina',
  effectors: [efectores.gemelos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.maquinaAsistencia,
  material: Array
}
const e556: Exercise = {
  reference: '556',
  name: 'Soleos con barra',
  effectors: [efectores.gemelos],
  cadenaCineticaAbierta: false,
  tipoMaterial: tipoMaterial.movimientoLibre.barra,
  material: Array
}
