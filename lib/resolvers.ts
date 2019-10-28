// Los resolvers son las funciones que se encargan de resolver la petición (Query) realizada. Un ejemplo metafórico sería una oficina de paquetería, donde llega una persona al mostrador, hace una consulta con el paquete (data) que quiere, el resolver es la persona que se encarga de ir a buscar el paquete a la zona del almacén y traerlo de vuelta a la persona. Los resolvers entiendes determinadas consultas. Cuando llegas a la oficina de paquetería hay unas reglas de cómo pedir tu paquete, esas normas están escritas en las Query. Los resolvers solo entienden esas Query especificadas.

// import { db } from './db'
import { data } from './muscleData'

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
    getMuscles: (root, args) => {
      return data
    },
    getMuscle: (root, args) => {
      const muscle = data.find((muscle) => {
        let name = muscle.name.toUpperCase()
        let argsName = args.name.toUpperCase()
        return name.includes(argsName)
      })
      return muscle
    }
  }
}
