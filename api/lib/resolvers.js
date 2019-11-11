"use strict";
// Los resolvers son las funciones que se encargan de resolver la petición (Query) realizada. Un ejemplo metafórico sería una oficina de paquetería, donde llega una persona al mostrador, hace una consulta con el paquete (data) que quiere, el resolver es la persona que se encarga de ir a buscar el paquete a la zona del almacén y traerlo de vuelta a la persona. Los resolvers entiendes determinadas consultas. Cuando llegas a la oficina de paquetería hay unas reglas de cómo pedir tu paquete, esas normas están escritas en las Query. Los resolvers solo entienden esas Query especificadas.
exports.__esModule = true;
// import { db } from './db'
var muscleData_1 = require("./muscleData");
exports.resolvers = {
    Query: {
        // getCourses: () => {
        //   let courses = []
        //   let docsRef = db.collection('afinityExercises')
        //   let allExercises = docsRef
        //     .get()
        //     .then((snapshot) => {
        //       snapshot.forEach((doc) => {
        //         courses.push(doc)
        //         console.log(doc.id, '=>', doc.data())
        //       })
        //     })
        //     .catch((err) => {
        //       console.log('Error getting documents', err)
        //     })
        //   return courses
        // },
        Muscles: function (root, args) {
            if (Object.entries(args).length === 0) {
                console.log('Cero');
                return muscleData_1.Effectors;
            }
            else if (Object.entries(args).length !== 0) {
                console.log('No Cero');
                var muscles = muscleData_1.Effectors;
                if (args.name) {
                    muscles = muscles.filter(function (muscle) {
                        var property = muscle.name.toUpperCase();
                        var argsProperty = args.name.toUpperCase();
                        return property.includes(argsProperty);
                    });
                }
                if (args.origin) {
                    muscles = muscles.filter(function (muscle) {
                        var property = muscle.origin.toUpperCase();
                        var argsProperty = args.origin.toUpperCase();
                        return property.includes(argsProperty);
                    });
                }
                if (args.insertion) {
                    muscles = muscles.filter(function (muscle) {
                        var property = muscle.insertion.toUpperCase();
                        var argsProperty = args.insertion.toUpperCase();
                        return property.includes(argsProperty);
                    });
                }
                if (args.plane) {
                    muscles = muscles.filter(function (muscle) {
                        var planesOfMuscle = muscle.planeMotion.find(function (plane) {
                            var musclePlane = plane.toUpperCase();
                            var argsPlane = args.plane.toUpperCase();
                            return musclePlane.includes(argsPlane);
                        });
                        return planesOfMuscle;
                    });
                }
                if (args.action) {
                    muscles = muscles.filter(function (muscle) {
                        var actionsOfMuscle = muscle.action.find(function (action) {
                            var muscleAction = action.toUpperCase();
                            var argsAction = args.action.toUpperCase();
                            return muscleAction.includes(argsAction);
                        });
                        return actionsOfMuscle;
                    });
                }
                if (args.root) {
                    muscles = muscles.filter(function (muscle) {
                        var muscleNerveRoot = muscle.innervation.root.toString();
                        return muscleNerveRoot
                            .toUpperCase()
                            .includes(args.root.toUpperCase());
                    });
                }
                if (args.nerve) {
                    muscles = muscles.filter(function (muscle) {
                        var muscleNerve = muscle.innervation.nerve.toString();
                        return muscleNerve.toUpperCase().includes(args.nerve.toUpperCase());
                    });
                }
                return muscles;
            }
        },
        Actions: function (root, args) {
            if (!args.name) {
                return Object.keys(muscleData_1.Action);
            }
            else if (args.name) {
                var actionValues = Object.values(muscleData_1.Action);
                var actions = actionValues.filter(function (action) {
                    var name = action.toUpperCase();
                    var argsName = args.name.toUpperCase();
                    return name.includes(argsName);
                });
                return actions;
            }
        },
        Nerves: function (root, args) {
            if (!args.name) {
                return Object.keys(muscleData_1.InnervationNerves);
            }
            else if (args.name) {
                var nerveValues = Object.values(muscleData_1.InnervationNerves);
                var nerves = nerveValues.filter(function (nerve) {
                    var name = nerve.toUpperCase();
                    var argsName = args.name.toUpperCase();
                    return name.includes(argsName);
                });
                return nerves;
            }
        },
        NerveRoots: function (root, args) {
            if (!args.name) {
                return Object.keys(muscleData_1.NerveRoots);
            }
            else if (args.name) {
                var rootValues = Object.values(muscleData_1.NerveRoots);
                var roots = rootValues.filter(function (root) {
                    var name = root.toUpperCase();
                    var argsName = args.name.toUpperCase();
                    return name.includes(argsName);
                });
                return roots;
            }
        },
        PlanesOfMotion: function (root, args) {
            if (!args.name) {
                return Object.keys(muscleData_1.PlaneMotion);
            }
            else if (args.name) {
                var planeValues = Object.values(muscleData_1.PlaneMotion);
                var planes = planeValues.filter(function (plane) {
                    var name = plane.toUpperCase();
                    var argsName = args.name.toUpperCase();
                    return name.includes(argsName);
                });
                return planes;
            }
        }
    }
};
