import { InnervationNerves } from "./muscleData"

const NerveResolver = (root, args) => {
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
}

export default NerveResolver
