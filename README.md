---
title: Kiness API Documentation
author:
  - name: Brais Antela
output: pdf_document
---

[🇪🇸 Traducción](https://github.com/AntelaBrais/KinessAPI/blob/master/README.es.md)

# Introduction

El propósito de _"Kiness API"_ es permitir a los desarrolladores tener acceso a una base de datos relacionados con el campo de la Kinesiología. Permitir a los desarrolladores crear herramientas que puedan desembocar en mejores herramientas para Kinesiólogos.

Kiness API se crea con GraphQL, un "data query language", que permite hacer consultas sobre, por ejemplo:

- Músculos: Gracias a Kiness API se podrá consultar toda la información relativa a un músculo concreto.

Imagina querer saber cuáles son los nervios que inervan el bíceps braquial, o saber en qué planos de movimiento, o su origen e insercción. Esto se podría hacer con las siguientes expresiones:

```graphql
{
  Muscles(name: "Biceps Brachii Short Head") {
    insertion
    action
  }
}
```

Con esta query obtendríamos la insercción y acción de la cabeza corta del bíceps braquial.

La clave es permitir a los desarrolladores tener herramientas (Kiness API) que les permitan crear nuevas herramientas (Ejemplo: Base de datos interactiva sobre músculos) para los Kinesiólogos.

# Kiness API

The **Kiness API** is an API made with GraphQL to bring developers all the data related with the human movement science, also known as Kinesiology 🤾‍♂️⛹️‍♀️. We are starting with muscles 💪 and nerves 🧠 data, with bones data 🦴 and other candies 🏋️‍♀️ being work in progress.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
