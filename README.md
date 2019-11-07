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
