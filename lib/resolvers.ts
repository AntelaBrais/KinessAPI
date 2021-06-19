import ActionResolver from "./ActionsResolver"
import NerveResolver from "./NerveResolver"
import NerveRootsResolver from "./NerveRootsResolver"
import PlaneMotionResolver from "./PlaneMotionResolver"
import MuscleResolver from "./MuscleResolver"

export const resolvers = {
  Query: {
    // TODO: Add Query and resolver for new types
    Muscles: MuscleResolver,
    Actions: ActionResolver,
    Nerves: NerveResolver,
    NerveRoots: NerveRootsResolver,
    PlanesOfMotion: PlaneMotionResolver,
  },
  Mutation: {
    addExercise: (root, args) => {
      const exercise = {
        name: args.name,
        sets: args.sets,
        reps: args.reps,
        restTime: args.restTime,
      }
      return exercise
    },
  },
}
