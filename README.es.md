---
title: Kiness API Documentation
author:
  - name: Brais Antela
output: pdf_document
---

# Introducción

El propósito de _Kiness API_ es permitir a los desarrolladores tener acceso a casi todos los datos relacionados con el movimiento humano, músculos, ejercicios de fuerza, todo esto bajo el paraguas del concepto "Kinesiología".

Nuestra aspiración es crear herramientas que permitan a los desarrolladores crear su vez, nuevas apps y servicios increíbles relacionados con el campo de la Kinesiología y las Ciencias de la Actividad Física y del Deporte.

# Kiness API

**Kiness API** es una API hecha con GraphQL que proporciona a los desarrolladores todos los datos relacionados con las ciencias del movimiento humano, también conocida como Kinesiología 🤾‍♂️⛹️‍♀️.

Los datos por los que hemos empezado son los relacionados con los músculos 💪 y nervios 🧠. Datos relacionados con los huesos y otras cosas muy interesantes están de camino por llegar 🏋️‍♀️.

## Empecemos

Estas instrucciones te ayudarán a entender mejor el funcionamiento de la API y el tipo de datos que puedes consultar y obtener.

### Estructura de los datos

Las entitades de datos principales que encontrarás son:

- Músculos
- Nervios
- Raíces Nerviosas
- Acciones
- Planos de Movimiento

### Consultando datos

Para obtener la información relacionada con una entidad debes construir las consultas como la siguiente:

```graphql
# Reemplazar 'Entity' por alguna de las mencionadas anteriormente.
{
  Entity(name: "Algún texto que pueda incluir el nombre")
}
# Si quieres obtener todas las entradas de la base de datos...:
{
  Entity
}
```

Esta es la forma de obtener todas las entradas que coincidan con la entidad (músculos, nervios, etc) especificada.

Pongamos por ejemplo que quieres obtener los nombres de todos los músculos y nervios disponibles en la base de datos:

```graphql
{
  Nerves(name: "")
  Muscles(name: "") {
    name
  }
}
```

Estas dos formas, escribiendo el parámetro "name" vacío o sin pasar ningún parámetro, te dan el mismo resultado.

## Ejemplos

### Músculos

- Obtén los músculos cuyos nombres incluyan el texto especificado, concretando los datos que quieres obtener de ellos (nombre, origen, insercción, nervio, raíz nerviosa):

```graphql
{
  Muscles(name: "biceps") {
    name
    origin
    insertion
    nerve
    root
  }
}
```

![Query and Result](docAssets/queryMuscle.png)

La entidad "músculo" es la más interesante ya que es la que más posibilidades ofrece. Los parámetros que puedes añadir para filtrar la lista de músculos son: nombre, origen, insercción, nervio, raíz nerviosa, plano de movimiento y acción. Por ejemplo, podemos obtener el músculo que sea invervado por un nervio específico y que realice una acción concreta:

```graphql
{
  Muscles(name: "biceps", plane: "frontal", action: "flexion") {
    name
    planeMotion
    action
  }
}
```

Dando lo siguiente:

![Query and Result](docAssets/queryMultipleParameter.png)

### Nervios

- Obtén los nombres de los nervios que incluyan el texto incluído:

```graphql
{
  Nerves(name: "sciatic")
}
```

![Query and Result](docAssets/queryNerve.png)

### Raíces Nerviosas

- Obtén los nombres de las raíces nerviosas que incluyan el texto incluído:

```graphql
{
  NerveRoots(name: "T7")
}
```

![Query and Result](docAssets/queryNerveRoot.png)

### Acciones

- Obtén los nombres de las acciones que incluyan el texto incluído:

```graphql
{
  Actions(name: "flexion")
}
```

![Query and Result](docAssets/queryAction.png)

### Plano de Movimiento

- Get planes of motion whose names include the specific string provided:

```graphql
{
  PlanesOfMotion(name: "sagittal")
}
```

![Query and Result](docAssets/queryPlaneMotion.png)

## Creado con

- [GraphQL](https://graphql.org/) - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
- [TypeScript](http://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.

## Contributing

Échale un vistazo a [CONTRIBUTING.md](#) para detalles sobre nuestro código de conducta, y el proceso para proponer pull requests.

## Versionado

Usamos [SemVer](http://semver.org/) para el versionado. Para las versiones disponibles, mira las [etiquetas en este repositorio](https://github.com/AntelaBrais/KinessAPI/tags).

## Autores

- **Brais Antela** - _Trabajo inicial_ - [AntelaBrais](https://github.com/AntelaBrais)

Mira la lista de [contribuidores](https://github.com/AntelaBrais/KinessAPI/graphs/contributors) que han participado en este proyecto.

## Licencia

Este proyecto está bajo licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles.

## Acknowledgments

None for the moment.
