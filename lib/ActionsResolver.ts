import { Action } from "./muscleData"

const ActionResolver = (root, args) => {
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
}

export default ActionResolver
