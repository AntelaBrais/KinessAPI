"use strict";
exports.__esModule = true;
var fs = require('fs');
var InnervationNerves;
(function (InnervationNerves) {
    InnervationNerves["Musculocutaneous"] = "Musculocutaneous nerve";
    InnervationNerves["Radial"] = "Radial nerve";
    InnervationNerves["Median"] = "Median nerve";
    InnervationNerves["LateralPectoral"] = "Lateral Pectoral nerve";
    InnervationNerves["MedialPectoral"] = "Medial Pectoral nerve";
    InnervationNerves["UpperSubscapular"] = "Upper subscapular nerve";
    InnervationNerves["LowerSubscapular"] = "Lower subscapular nerve";
    InnervationNerves["Axillary"] = "Axillary nerve";
    InnervationNerves["Suprascapula"] = "Suprascapula nerve";
    InnervationNerves["Thoracodorsal"] = "Thoracodorsal nerve";
    InnervationNerves["Lumbar"] = "Lumbar nerve";
    InnervationNerves["Femoral"] = "Femoral nerve";
    InnervationNerves["Obturador"] = "Obturador nerve";
    InnervationNerves["Sciatic"] = "Sciatic nerve";
    InnervationNerves["InferiorGluteal"] = "Inferior Gluteal nerve";
    InnervationNerves["SuperiorGluteal"] = "Superior Gluteal nerve";
    InnervationNerves["FirstSacral"] = "First Sacral Nerve";
    InnervationNerves["SecondSacral"] = "Second Sacral Nerve";
    InnervationNerves["Sacral"] = "Sacral nerve";
    InnervationNerves["Pudental"] = "Pudental nerve";
    InnervationNerves["SacralPlexus"] = "Sacral Plexus nerve";
    InnervationNerves["PosteriorCutaneousFemoral"] = "Posterior Cutaneous Femoral nerve";
    InnervationNerves["Tibial"] = "Tibial nerve";
})(InnervationNerves = exports.InnervationNerves || (exports.InnervationNerves = {}));
var NerveRoots;
(function (NerveRoots) {
    NerveRoots["c1"] = "C1";
    NerveRoots["c2"] = "C2";
    NerveRoots["c3"] = "C3";
    NerveRoots["c4"] = "C4";
    NerveRoots["c5"] = "C5";
    NerveRoots["c6"] = "C6";
    NerveRoots["c7"] = "C7";
    NerveRoots["c8"] = "C8";
    NerveRoots["t1"] = "T1";
    NerveRoots["t2"] = "T2";
    NerveRoots["t3"] = "T3";
    NerveRoots["t4"] = "T4";
    NerveRoots["t5"] = "T5";
    NerveRoots["t6"] = "T6";
    NerveRoots["t7"] = "T7";
    NerveRoots["t8"] = "T8";
    NerveRoots["t9"] = "T9";
    NerveRoots["t10"] = "T10";
    NerveRoots["t11"] = "T11";
    NerveRoots["t12"] = "T12";
    NerveRoots["l1"] = "L1";
    NerveRoots["l2"] = "L2";
    NerveRoots["l3"] = "L3";
    NerveRoots["l4"] = "L4";
    NerveRoots["l5"] = "L5";
    NerveRoots["s1"] = "S1";
    NerveRoots["s2"] = "S2";
    NerveRoots["s3"] = "S3";
})(NerveRoots = exports.NerveRoots || (exports.NerveRoots = {}));
var Action;
(function (Action) {
    Action["ForearmSupination"] = "Supination of the forearm";
    Action["ForearmPronation"] = "Pronation of the forearm";
    Action["ElbowFlexion"] = "Flexion of the elbow";
    Action["ElbowExtension"] = "Extension of the elbow";
    Action["WeakShoulderFlexion"] = "Weak flexion of the shoulder";
    Action["WeakShoulderAbduction"] = "Weak Abduction of the Shoulder";
    Action["ShoulderExtension"] = "Extension of the shoulder";
    Action["ShoulderFlexion"] = "Flexion of the shoulder";
    Action["ShoulderAdduction"] = "Adduction of the shoulder";
    Action["ShoulderAbduction"] = "Abudction of the shoulder";
    Action["ShoulderHorizontalAbduction"] = "Horizontal abduction of the shoulder";
    Action["ShoulderHorizontalAdduction"] = "Horizontal adduction of the shoulder";
    Action["ShoulderInternalRotation"] = "Internal rotation of the shoulder";
    Action["ShoulderExternalRotation"] = "External rotation of the shoulder";
    Action["ShoulderDiagonalAdduction"] = "Diagonal Adduction of the shoulder";
    Action["ShoulderDiagonalAbduction"] = "Diagonal Abduction of the shoulder";
    Action["HipFlexion"] = "Flexion of the hip";
    Action["HipExtension"] = "Extension of the hip";
    Action["HipAdduction"] = "Adduction of the hip";
    Action["HipAbduction"] = "Abduction of the hip";
    Action["AnteriorPelvicRotation"] = "Anterior Pelvic Rotation";
    Action["HipExternalRotation"] = "External Rotation of the hip";
    Action["HipInternalRotation"] = "Internal Rotation of the hip";
    Action["HipInternalRotationKneeFlexed"] = "Internal rotation of the hip when knee is flexed";
    Action["PelvicTransverseRotationContralaterallyFtabilizedFemur"] = "Transverse pelvic rotation contralaterally when ipsilateral femur is stabilized";
    Action["LumbarSpineFlexion"] = "Flexion of the lumbar spine";
    Action["LumbarSpineLateralFlexion"] = "Lateral flexion of the lumbar spine";
    Action["PelvicLateralRotation"] = "Lateral rotation of the pelvic";
    Action["PelvicPosteriorRotation"] = "Posterior Rotation of the Pelvic";
    Action["KneeExtension"] = "Extension of the knee";
    Action["KneeFlexion"] = "Flexion of the knee";
    Action["KneeInternalRotation"] = "Internal rotation of the knee";
    Action["KneeExternalRotation"] = "External rotation of the knee";
    Action["ThighExternalRotation"] = "External Rotation of the thigh";
})(Action = exports.Action || (exports.Action = {}));
var PlaneMotion;
(function (PlaneMotion) {
    PlaneMotion["Transverse"] = "Transverse";
    PlaneMotion["Sagittal"] = "Sagittal";
    PlaneMotion["Frontal"] = "Frontal";
    PlaneMotion["Diagonal"] = "Diagonal";
})(PlaneMotion = exports.PlaneMotion || (exports.PlaneMotion = {}));
var bicepsBrachiLongHead = {
    name: 'Biceps Brachii Long Head',
    origin: 'Supraglenoid tubercle above the superior lip of the glenoid fossa',
    insertion: 'Tuberosity of the radius and bicipital aponeurosis (lacertus fibrosis)',
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
        nerve: [InnervationNerves.Musculocutaneous],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var bicepsBrachiShortHead = {
    name: 'Biceps Brachii Short Head',
    origin: 'Coracoid process of the scapula and upper lip of the glenoid fossa in conjunction with the proximal attachment of the coracobrachialis',
    insertion: 'Tuberosity of the radius and bicipital aponeurosis (lacertus fibrosis)',
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
        nerve: [InnervationNerves.Musculocutaneous],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var bicepsBrachiGroup = [
    bicepsBrachiLongHead,
    bicepsBrachiShortHead
];
var brachialis = {
    name: 'Brachialis',
    origin: 'Distal half of the anterior shaft of the humerus',
    insertion: 'Coronoid process of the ulna',
    action: [Action.ElbowFlexion],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Musculocutaneous],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var brachioRadialis = {
    name: 'Brachio-Radialis',
    origin: 'Distal 2/3 of the lateral condyloid (supracondylar) rydge of the humerus',
    insertion: 'Lateral surface of the distal end of the radius and the styloid process',
    action: [
        Action.ElbowFlexion,
        Action.ForearmPronation,
        Action.ForearmSupination
    ],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Radial],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var pronatorTeres = {
    name: 'Pronator teres',
    origin: 'Distal part of the medial condyloid ridge of the humerus and medial side of the proximal ulna',
    insertion: 'Middle 1/3 of the lateral surface of the radius',
    action: [Action.ElbowFlexion, Action.ForearmPronation],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Median],
        root: [NerveRoots.c7, NerveRoots.c6]
    }
};
var pronatorQuadratus = {
    name: 'Pronator Quadratus',
    origin: 'Distal 1/4 of the anterior side of the ulna',
    insertion: 'Distal 1/4 of the anterior side of the radius',
    action: [Action.ForearmPronation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Median],
        root: [NerveRoots.c7, NerveRoots.c6]
    }
};
var tricepsBrachiLongHead = {
    name: 'Triceps Brachii Long Head',
    origin: 'Infraglenoid tubercle below inferior lip of the glenoid fossa of the scapula',
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
        nerve: [InnervationNerves.Radial],
        root: [NerveRoots.c7, NerveRoots.c8]
    }
};
var tricepsBrachiLateralHead = {
    name: 'Triceps Brachii Lateral Head',
    origin: 'Upper half of the posterior surface of the humerus',
    insertion: 'Olecranon process of the ulna',
    action: [Action.ElbowExtension],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Radial],
        root: [NerveRoots.c7, NerveRoots.c8]
    }
};
var tricepsBrachiMedialHead = {
    name: 'Triceps Brachii Medial Head',
    origin: 'Distal 2/3 of the posterior surface of the humerus',
    insertion: 'Olecranon process of the ulna',
    action: [Action.ElbowExtension],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Radial],
        root: [NerveRoots.c7, NerveRoots.c8]
    }
};
var supinator = {
    name: 'Supinator',
    origin: 'Lateral epicondyle of the humerus and the neighboring posterior part of the ulna',
    insertion: 'Lateral surface of the proximal radius just below the head',
    action: [Action.ForearmSupination],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Radial],
        root: [NerveRoots.c6]
    }
};
var anconeus = {
    name: 'Anconeus',
    origin: 'Posterior surface of the lateral condyle of the humerus',
    insertion: 'Posterior surface of the lateral olecranon process and proximal 1/4 of the ulna',
    action: [Action.ElbowExtension],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Radial],
        root: [NerveRoots.c7, NerveRoots.c8]
    }
};
var pectoralisMajorUpper = {
    name: 'Pectoralis Major upper fibers',
    origin: 'Medial half of anterior surface of clavicle',
    insertion: 'Flat tendon 2-3 inches wide to lateral lip of intertubercular groove of humerus',
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
        nerve: [InnervationNerves.LateralPectoral],
        root: [NerveRoots.c5, NerveRoots.c6, NerveRoots.c7]
    }
};
var pectoralisMajorLower = {
    name: 'Pectoralis Major lower fibers',
    origin: 'Anterior surface of costal cartilages of first six ribs, and adjoining portion of sternum',
    insertion: 'Flat tendon 2-3 inches wide to lateral lip of intertubercular groove of humerus',
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
        nerve: [InnervationNerves.MedialPectoral],
        root: [NerveRoots.c8, NerveRoots.t1]
    }
};
var pectoralisMajorGroup = [
    pectoralisMajorUpper,
    pectoralisMajorLower
];
var subscapularis = {
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
};
var coracoBrachialis = {
    name: 'Coraco-brachialis',
    origin: 'Coracoid process of scapula',
    insertion: 'Middle of medial border of humeral shaft',
    action: [
        Action.ShoulderDiagonalAdduction,
        Action.ShoulderHorizontalAdduction
    ],
    planeMotion: [PlaneMotion.Diagonal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Musculocutaneous],
        root: [NerveRoots.c5, NerveRoots.c6, NerveRoots.c7]
    }
};
var deltoidAnterior = {
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
        nerve: [InnervationNerves.Axillary],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var deltoidMiddle = {
    name: 'Deltoid Middle Fibers',
    origin: 'Lateral aspect of acromion',
    insertion: 'Deltoid tuberosity on lateral humerus',
    action: [Action.ShoulderAbduction, Action.ShoulderHorizontalAbduction],
    planeMotion: [PlaneMotion.Transverse, PlaneMotion.Frontal],
    innervation: {
        nerve: [InnervationNerves.Axillary],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var deltoidPosterior = {
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
        nerve: [InnervationNerves.Axillary],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var deltoidGroup = [
    deltoidAnterior,
    deltoidMiddle,
    deltoidPosterior
];
var supraSpinatus = {
    name: 'Supra-spinatus',
    origin: 'Medial 2/3 of supraspinous fossa',
    insertion: 'Superiorly on greater tubercle of humerus',
    action: [Action.ShoulderAbduction],
    planeMotion: [PlaneMotion.Frontal],
    innervation: {
        nerve: [InnervationNerves.Suprascapula],
        root: [NerveRoots.c5]
    }
};
var latissimusDorsi = {
    name: 'Latissimus Dorse',
    origin: 'Posterior crest of ilium, back of sacrum and spinous processes of lumbar and lower six thoracic vertebrae, slips from lower three ribs',
    insertion: 'Medial side of intertubercular groove of humerus, just anterior to the insertion of the teres major',
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
        nerve: [InnervationNerves.Suprascapula],
        root: [NerveRoots.c6, NerveRoots.c7, NerveRoots.c8]
    }
};
var teresMajor = {
    name: 'Teres Major',
    origin: 'Posteriorly on inferior third of lateral border of scapula and just superior to the inferior angle',
    insertion: 'Medial lip of intertubercular groove of humerus, just posterior to the insertion of the latissimus dorsi',
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
        nerve: [InnervationNerves.LowerSubscapular],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var infraSpinatus = {
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
        nerve: [InnervationNerves.Suprascapula],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var teresMinor = {
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
        nerve: [InnervationNerves.Axillary],
        root: [NerveRoots.c5, NerveRoots.c6]
    }
};
var iliacus = {
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
};
var psoas = {
    name: 'Psoas major and minor',
    origin: 'Lower borders of the transverse processes (L1–L5), sides of the bodies of the last thoracic vertebra (T12), the lumbar vertebrae (L1–L5), intervertebral fibrocartilages, and base of the sacrum',
    insertion: 'Lesser trochanter of the femur and shaft just below psoas minor; pectineal line (of pubis) and iliopectineal eminence',
    action: [
        Action.HipFlexion,
        Action.AnteriorPelvicRotation,
        Action.LumbarSpineFlexion,
        Action.HipExternalRotation,
        Action.PelvicTransverseRotationContralaterallyFtabilizedFemur,
        Action.LumbarSpineLateralFlexion,
        Action.PelvicLateralRotation
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
};
var rectusFemoris = {
    name: 'Rectus Femoris',
    origin: 'Anterior inferior iliac spine of the ilium and groove (posteior) above the acetabulum',
    insertion: 'Superior aspect of the patella and patella tendon to the tibial tuberosity',
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
};
var sartorius = {
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
};
var pectineus = {
    name: 'Pectineus',
    origin: 'Space 1 inch wide on the front of the pubis just above the crest',
    insertion: 'Rough line leading from the lesser trochanter down to the linea aspera',
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
};
var adductorBrevis = {
    name: 'Adductor Brevis',
    origin: 'Front of the inferior pubic ramus just below the origin of the adductor longus',
    insertion: 'Lower 2/3 of the pectineal line of the femur and the upper half of the medial lip of the linea aspera',
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
};
var adductorLongus = {
    name: 'Adductor Longus',
    origin: 'Anterior pubis just below its crest',
    insertion: 'Middle 1/3 of the linea aspera',
    action: [Action.HipFlexion, Action.HipAdduction],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Frontal],
    innervation: {
        nerve: [InnervationNerves.Obturador],
        root: [NerveRoots.l3, NerveRoots.l4]
    }
};
var adductorMagnus = {
    name: 'Adductor Magnus',
    origin: 'Edge of the en- tire pubic ramus and the ischium and ischial tuberosity',
    insertion: 'Whole length of the linea aspera, inner condyloid ridge, and adductor tubercle',
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
};
var gracilis = {
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
};
var semitendinosus = {
    name: 'Semitendinosus',
    origin: 'Ischial tuberosity',
    insertion: 'Upper anterior medial surface of the tibia just below the condyle',
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
};
var semimembranosus = {
    name: 'Semimembranosus',
    origin: 'Ischial tuberosity',
    insertion: 'Posteromedial surface of the medial tibial condyle',
    action: [
        Action.KneeFlexion,
        Action.HipExtension,
        Action.PelvicPosteriorRotation,
        Action.HipInternalRotation,
        Action.KneeInternalRotation
    ],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Sciatic],
        root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.s2]
    }
};
var bicepsFemoris = {
    name: 'Biceps Femoris',
    origin: 'Long head: ischial tuberosity. Short head: lower half of the linea aspera, and lateral condyloid ridge',
    insertion: 'Head of the fibula and lateral condyle of the tibia',
    action: [
        Action.KneeFlexion,
        Action.HipExtension,
        Action.PelvicPosteriorRotation,
        Action.HipExternalRotation,
        Action.KneeExternalRotation
    ],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Sciatic],
        root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.s2, NerveRoots.s3]
    }
};
var gluteusMaximus = {
    name: 'Gluteus Maximus',
    origin: 'Posterior 1/4 of the crest of the ilium, posterior surface of the sacrum and coccyx near the ilium, and fascia of the lumbar area',
    insertion: 'Oblique ridge on the lateral surface of the greater trochanter and the iliotibial band of the fasciae latae',
    action: [
        Action.HipExtension,
        Action.PelvicPosteriorRotation,
        Action.HipExternalRotation,
        Action.HipAbduction,
        Action.HipAdduction
    ],
    planeMotion: [
        PlaneMotion.Sagittal,
        PlaneMotion.Transverse,
        PlaneMotion.Frontal
    ],
    innervation: {
        nerve: [InnervationNerves.InferiorGluteal],
        root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.s2]
    }
};
var gluteusMedius = {
    name: 'Gluteus Medius',
    origin: 'Lateral surface of the ilium just below the crest',
    insertion: 'Posterior and middle surfaces of the greater trochanter of the femur',
    action: [
        Action.HipAbduction,
        Action.HipExtension,
        Action.HipFlexion,
        Action.PelvicPosteriorRotation,
        Action.AnteriorPelvicRotation,
        Action.HipInternalRotation,
        Action.HipExternalRotation
    ],
    planeMotion: [
        PlaneMotion.Sagittal,
        PlaneMotion.Transverse,
        PlaneMotion.Frontal
    ],
    innervation: {
        nerve: [InnervationNerves.SuperiorGluteal],
        root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.l4]
    }
};
var gluteusMinimus = {
    name: 'Gluteus Minimus',
    origin: 'Lateral surface of the ilium just below the origin of the gluteus medius',
    insertion: 'Anterior surface of the greater trochanter of the femur',
    action: [
        Action.HipAbduction,
        Action.PelvicLateralRotation,
        Action.HipInternalRotation,
        Action.HipFlexion,
        Action.AnteriorPelvicRotation
    ],
    planeMotion: [
        PlaneMotion.Sagittal,
        PlaneMotion.Transverse,
        PlaneMotion.Frontal
    ],
    innervation: {
        nerve: [InnervationNerves.SuperiorGluteal],
        root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.l4]
    }
};
var tensorFasciaeLatae = {
    name: 'Tensor Fasciae Latae',
    origin: 'Anterior iliac crest and surface of the ilium just below the crest',
    insertion: 'One-fourth of the way down the thigh into the iliotibial tract, which in turn inserts onto Gerdy’s tubercle of the anterolateral tibial condyle',
    action: [
        Action.HipAbduction,
        Action.PelvicLateralRotation,
        Action.HipInternalRotation,
        Action.HipFlexion,
        Action.AnteriorPelvicRotation
    ],
    planeMotion: [
        PlaneMotion.Sagittal,
        PlaneMotion.Transverse,
        PlaneMotion.Frontal
    ],
    innervation: {
        nerve: [InnervationNerves.SuperiorGluteal],
        root: [NerveRoots.l5, NerveRoots.s1, NerveRoots.l4]
    }
};
var piriformis = {
    name: 'Piriformis',
    origin: 'Anterior sacrum, posterior portions of the ischium, and obturator foramen',
    insertion: 'Superior and posterior aspect of the greater trochanter',
    action: [Action.HipExternalRotation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.FirstSacral, InnervationNerves.SecondSacral],
        root: [NerveRoots.s1, NerveRoots.s2]
    }
};
var gemellusSuperior = {
    name: 'Gemellus Superior',
    origin: 'Ischial Spine',
    insertion: 'Posterior aspect of the greater trochanter immediately below piriformis',
    action: [Action.HipExternalRotation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Sacral],
        root: [NerveRoots.s1, NerveRoots.s2, NerveRoots.l5]
    }
};
var gemellusInferior = {
    name: 'Gemellus Inferior',
    origin: 'Ischial tuberosity',
    insertion: 'Posterior aspect of the greater trochanter with obturator internus',
    action: [Action.HipExternalRotation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Sacral],
        root: [NerveRoots.l4, NerveRoots.l5, NerveRoots.s1, NerveRoots.s2]
    }
};
var obturatorInternus = {
    name: 'Obturator Internus',
    origin: 'Margin of obturator foramen',
    insertion: 'Posterior aspect of the greater trochanter with gamellus superior',
    action: [Action.HipExternalRotation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Sacral],
        root: [NerveRoots.l4, NerveRoots.l5, NerveRoots.s1, NerveRoots.s2]
    }
};
var obturatorExternus = {
    name: 'Obturator Externus',
    origin: 'Inferior margin of obturator foramen',
    insertion: 'Posterior aspect of the greater trochanter immediately below obturator internus',
    action: [Action.HipExternalRotation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Sacral],
        root: [NerveRoots.l3, NerveRoots.l4]
    }
};
var quadratusFemoris = {
    name: 'Quadratus Femoris',
    origin: 'Ischial tuberosity',
    insertion: 'Intertrochanteric ridge of femur',
    action: [Action.HipExternalRotation],
    planeMotion: [PlaneMotion.Transverse],
    innervation: {
        nerve: [
            InnervationNerves.Pudental,
            InnervationNerves.Sciatic,
            InnervationNerves.PosteriorCutaneousFemoral
        ],
        root: [NerveRoots.l4, NerveRoots.l5, NerveRoots.s1]
    }
};
var vastusIntermedius = {
    name: 'Vastus Intermedius',
    origin: 'Upper 2/3 of anterior surface of femur',
    insertion: 'Upper border of the patella and patellar tendon to tibial tuberosity',
    action: [Action.KneeExtension],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Femoral],
        root: [NerveRoots.l2, NerveRoots.l4]
    }
};
var vastusLateralis = {
    name: 'Vastus Lateralis',
    origin: 'Intertrochanteric line, anterior and inferior borders of the greater trochanter, gluteal tuberosity, upper half of the linea aspera, and entire lateral intermuscular septum',
    insertion: 'Lateral border of the patella and patellar tendon to tibial tuberosity',
    action: [Action.KneeExtension],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Femoral],
        root: [NerveRoots.l2, NerveRoots.l4]
    }
};
var vastusMedialis = {
    name: 'Vastus Medialis',
    origin: 'Whole length of linea aspera and medial condyloid ridge',
    insertion: 'Medial half of upper border of patella and patellar tendon to tibial tuberosity',
    action: [Action.KneeExtension],
    planeMotion: [PlaneMotion.Sagittal],
    innervation: {
        nerve: [InnervationNerves.Femoral],
        root: [NerveRoots.l2, NerveRoots.l4]
    }
};
var popliteus = {
    name: 'Popliteus',
    origin: 'Posterior surface of lateral condyle of femur',
    insertion: 'Upper posterior medial surface of tibia',
    action: [Action.KneeFlexion, Action.KneeInternalRotation],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Tibial],
        root: [NerveRoots.s1, NerveRoots.l5]
    }
};
var gastrocnemius = {
    name: 'Gastrocnemius',
    origin: 'Posterior surface of lateral condyle of femur',
    insertion: 'Upper posterior medial surface of tibia',
    action: [Action.KneeFlexion, Action.KneeInternalRotation],
    planeMotion: [PlaneMotion.Sagittal, PlaneMotion.Transverse],
    innervation: {
        nerve: [InnervationNerves.Tibial],
        root: [NerveRoots.s1, NerveRoots.s2]
    }
};
exports.Effectors = [
    adductorBrevis,
    adductorLongus,
    adductorMagnus,
    anconeus,
    bicepsBrachiLongHead,
    bicepsBrachiShortHead,
    bicepsFemoris,
    gastrocnemius,
    brachialis,
    brachioRadialis,
    deltoidAnterior,
    deltoidMiddle,
    deltoidPosterior,
    gluteusMaximus,
    gluteusMedius,
    gluteusMinimus,
    gracilis,
    iliacus,
    infraSpinatus,
    latissimusDorsi,
    pectineus,
    pectoralisMajorUpper,
    pectoralisMajorLower,
    pronatorQuadratus,
    pronatorTeres,
    psoas,
    rectusFemoris,
    sartorius,
    semimembranosus,
    semitendinosus,
    subscapularis,
    supinator,
    supraSpinatus,
    teresMajor,
    teresMinor,
    tricepsBrachiLateralHead,
    tricepsBrachiLongHead,
    tricepsBrachiMedialHead,
    vastusMedialis,
    vastusLateralis,
    vastusIntermedius,
    popliteus,
    quadratusFemoris,
    obturatorExternus,
    obturatorInternus,
    gemellusInferior,
    gemellusSuperior,
    piriformis,
    tensorFasciaeLatae,
    coracoBrachialis
];
var effectorsObject = {};
function createEffectorsObject(effectorsData) {
    effectorsData.map(function (element) {
        var el = {
            name: element.name,
            origin: element.origin,
            insertion: element.insertion,
            action: element.action,
            planeMotion: element.planeMotion,
            innervation: {
                nerve: element.innervation.nerve,
                root: element.innervation.root
            }
        };
        effectorsObject[element.name] = el;
    });
}
exports.mandan = createEffectorsObject(exports.Effectors);
var dataObject = JSON.stringify(effectorsObject, null, 2);
fs.writeFileSync('./lib/test.json', dataObject);