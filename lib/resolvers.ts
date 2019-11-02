// Los resolvers son las funciones que se encargan de resolver la petición (Query) realizada. Un ejemplo metafórico sería una oficina de paquetería, donde llega una persona al mostrador, hace una consulta con el paquete (data) que quiere, el resolver es la persona que se encarga de ir a buscar el paquete a la zona del almacén y traerlo de vuelta a la persona. Los resolvers entiendes determinadas consultas. Cuando llegas a la oficina de paquetería hay unas reglas de cómo pedir tu paquete, esas normas están escritas en las Query. Los resolvers solo entienden esas Query especificadas.

// import { db } from './db'
import {
  Effectors,
  Action,
  InnervationNerves,
  PlaneMotion,
  NerveRoots
} from './muscleData'

export const resolvers = {
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
    Muscles: (root, args) => {
      if (Object.entries(args).length === 0) {
        console.log('Cero')
        return Effectors
      } else if (Object.entries(args).length !== 0) {
        console.log('No Cero')
        let muscles = Effectors

        if (args.name) {
          muscles = muscles.filter((muscle) => {
            let property = muscle.name.toUpperCase()
            let argsProperty = args.name.toUpperCase()
            return property.includes(argsProperty)
          })
        }

        if (args.origin) {
          muscles = muscles.filter((muscle) => {
            let property = muscle.origin.toUpperCase()
            let argsProperty = args.origin.toUpperCase()
            return property.includes(argsProperty)
          })
        }

        if (args.insertion) {
          muscles = muscles.filter((muscle) => {
            let property = muscle.insertion.toUpperCase()
            let argsProperty = args.insertion.toUpperCase()
            return property.includes(argsProperty)
          })
        }

        if (args.plane) {
          muscles = muscles.filter((muscle) => {
            let planesOfMuscle = muscle.planeMotion.find((plane) => {
              let musclePlane = plane.toUpperCase()
              let argsPlane = args.plane.toUpperCase()
              return musclePlane.includes(argsPlane)
            })
            return planesOfMuscle
          })
        }

        if (args.root) {
          muscles = muscles.filter((muscle) => {
            let muscleNerveRoot = muscle.innervation.root.toString()

            return muscleNerveRoot
              .toUpperCase()
              .includes(args.root.toUpperCase())
          })
        }

        if (args.nerve) {
          muscles = muscles.filter((muscle) => {
            let muscleNerve = muscle.innervation.nerve.toString()
            return muscleNerve.toUpperCase().includes(args.nerve.toUpperCase())
          })
        }

        return muscles
      }
    },
    Actions: (root, args) => {
      if (!args.name) {
        return Object.keys(Action)
      } else if (args.name) {
        let actionValues = Object.values(Action)
        const actions = actionValues.filter((action) => {
          let name = action.toUpperCase()
          let argsName = args.name.toUpperCase()
          return name.includes(argsName)
        })
        return actions
      }
    },
    InnervationNerves: (root, args) => {
      if (!args.name) {
        return Object.keys(InnervationNerves)
      } else if (args.name) {
        let nerveValues = Object.values(InnervationNerves)
        const nerves = nerveValues.filter((nerve) => {
          let name = nerve.toUpperCase()
          let argsName = args.name.toUpperCase()
          return name.includes(argsName)
        })
        return nerves
      }
    },
    NerveRoots: (root, args) => {
      if (!args.name) {
        return Object.keys(NerveRoots)
      } else if (args.name) {
        let rootValues = Object.values(NerveRoots)
        const roots = rootValues.filter((root) => {
          let name = root.toUpperCase()
          let argsName = args.name.toUpperCase()
          return name.includes(argsName)
        })
        return roots
      }
    },
    PlanesOfMotion: (root, args) => {
      if (!args.name) {
        return Object.keys(PlaneMotion)
      } else if (args.name) {
        let planeValues = Object.values(PlaneMotion)
        const planes = planeValues.filter((plane) => {
          let name = plane.toUpperCase()
          let argsName = args.name.toUpperCase()
          return name.includes(argsName)
        })
        return planes
      }
    }
  }
}
