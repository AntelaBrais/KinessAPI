import { Effectors } from "./muscleData"

const MuscleResolver = (root, args) => {
  if (Object.entries(args).length === 0) {
    return Effectors
  } else if (Object.entries(args).length !== 0) {
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

        return muscleNerveRoot.toUpperCase().includes(args.root.toUpperCase())
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
}

export default MuscleResolver
