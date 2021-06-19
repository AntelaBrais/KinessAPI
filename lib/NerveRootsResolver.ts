import { NerveRoots } from "./muscleData"

const NerveRootsResolver = (root, args) => {
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
}

export default NerveRootsResolver
