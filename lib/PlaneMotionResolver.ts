import { PlaneMotion } from "./muscleData"

const PlaneMotionResolver = (root, args) => {
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

export default PlaneMotionResolver
