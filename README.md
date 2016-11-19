# SpectrumUC
SpectrumUC is a network of DMX-controlled colour-changing lights around the UC Campus.

## Objectives
The aim of this project is to provide this infrastructure and an API to use it to members of SUDO UC, which can be leveraged in various projects, encouraging innovative applications to be built on top of this platform.

SpectrumUC is a campus engagement and interactivity project, we expect use of it to be respected as such.

## Nodes
Each Node consists of a RaspberryPi, a DMX-controlled light and some circuitry to allow the Pi to output a DMX signal to the light. The entry for each node in the database contains location and descriptive information, as well as the project a node is assigned to, it's online status, and current colour.

## Database
SpectrumUC is powered by [Google Firebase](firebase.google.com), a realtime noSQL database. We made this choice becasue it's much simpler and arguably more reliable than managing our own realtime database, additionally, as we don't need a history of everything in the application, just the current state, the free tier of Firebase is adequate.

Leveraging Firebase allows members to use the existing [REST API](https://firebase.google.com/docs/reference/rest/database/) as well as their various SDK's.

This architecture may change in future, but not without far notice to any projects that are currently running on the system.

## Status & Register
View the network status and register your project at [TBA]()

## Building an App
Further information about building an app that leverages SpectrumUC can be found at [TBA]()
