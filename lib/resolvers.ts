// Los resolvers son las funciones que se encargan de resolver la petición (Query) realizada. Un ejemplo metafórico sería una oficina de paquetería, donde llega una persona al mostrador, hace una consulta con el paquete (data) que quiere, el resolver es la persona que se encarga de ir a buscar el paquete a la zona del almacén y traerlo de vuelta a la persona. Los resolvers entiendes determinadas consultas. Cuando llegas a la oficina de paquetería hay unas reglas de cómo pedir tu paquete, esas normas están escritas en las Query. Los resolvers solo entienden esas Query especificadas.

// import { db } from './db'
import {
  data,
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
        return data
      } else if (Object.entries(args).length !== 0) {
        const muscles = data.filter((muscle) => {
          let name = muscle.name.toUpperCase()
          let argsName = args.name.toUpperCase()
          return name.includes(argsName)
        })
        return muscles
      }
    },
    getMusclesByAction: (root, args) => {
      const muscles = data.filter((muscle) => {
        let actionsOfMuscle = muscle.action.find((action) =>
          action.includes(args.action)
        )
        return actionsOfMuscle
      })

      return muscles
    },
    getMusclesByPlaneOfMotion: (root, args) => {
      const muscles = data.filter((muscle) => {
        let planesOfMuscle = muscle.planeMotion.find((plane) => {
          let musclePlane = plane.toUpperCase()
          let argsPlane = args.plane.toUpperCase()
          return musclePlane.includes(argsPlane)
        })
        return planesOfMuscle
      })

      return muscles
    },
    getMusclesByNerve: (root, args) => {
      const muscles = data.filter((muscle) => {
        let muscleNerve = muscle.innervation.nerve.toString()

        return muscleNerve.toUpperCase().includes(args.nerve.toUpperCase())
      })

      return muscles
    },
    getMusclesByNerveRoot: (root, args) => {
      const muscles = data.filter((muscle) => {
        let muscleNerveRoot = muscle.innervation.root.toString()

        return muscleNerveRoot.toUpperCase().includes(args.root.toUpperCase())
      })

      return muscles
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
    PlanesOfMotion: () => {
      return Object.keys(PlaneMotion)
    }
  }
}
