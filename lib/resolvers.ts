import {
  Effectors,
  Action,
  InnervationNerves,
  PlaneMotion,
  NerveRoots,
} from "./muscleData"

export const resolvers = {
  Query: {
    Muscles: (root, args) => {
      if (Object.entries(args).length === 0) {
        console.log("Cero")
        return Effectors
      } else if (Object.entries(args).length !== 0) {
        console.log("No Cero")
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

        if (args.action) {
          muscles = muscles.filter((muscle) => {
            let actionsOfMuscle = muscle.action.find((action) => {
              let muscleAction = action.toUpperCase()
              let argsAction = args.action.toUpperCase()
              return muscleAction.includes(argsAction)
            })
            return actionsOfMuscle
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
    Nerves: (root, args) => {
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
    },
  },
}
