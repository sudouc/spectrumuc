# SpectrumUC
SpectrumUC is a network of DMX-controlled colour-changing lights around the UC Campus.

## Objectives
The aim of this project is to provide this infrastructure and an API to use it to members of SUDO UC, which can be leveraged in various projects, encouraging innovative applications to be built on top of this platform.

SpectrumUC is a campus engagement and interactivity project, we expect use of it to be respected as such.

## Nodes
Each Node consists of a RaspberryPi, a DMX-controlled light and some circuitry to allow the Pi to output a DMX signal to the light. The entry for each node in the database contains location and descriptive information, as well as the project a node is assigned to, it's online status, and current colour.

### Adding A Node / Node Authentication
Nodes can only be added by a system administrator. A Node authenticates using a normal email/password user account (as supported by the Firebase).
The email of a node should follow the syntax: `node@<pi hostname>.spectrumuc.sudo.org.au`
The password should be a random 20+ character string.

Registration of user accounts for a new node can be achieved by running `spectrumuc nodetools register` (exact syntax of the command TBA)

An administrator will then need to add the node account to a node record from the [administrator console](https://sudo-spectrumuc.firebaseapp.com/) (exact address TBA)

When connected, Nodes will subscribe to the `color` property of their node record, and each time it is updated, will change the colour of their connected light accordingly.

Additionally, nodes will write their IP address & hostname, along with any other debugging information to `/diagnostics/{node_id}` this is only readable by logged in administrators.

### Node Presence
When a node comes online it will set `/nodes/{node_id}/online` to `true` and will register an [`onDisconnect`](https://firebase.google.com/docs/reference/node/firebase.database.OnDisconnect) to set this value to the server timestamp (unix) at the time of disconnection. Providing an easy 'last online' functionality for monitoring node status.

## Database
SpectrumUC is powered by [Google Firebase](firebase.google.com), a realtime noSQL database. We made this choice becasue it's much simpler and arguably more reliable than managing our own realtime database, additionally, as we don't need a history of everything in the application, just the current state, the free tier of Firebase is adequate.

Leveraging Firebase allows members to use the existing [REST API](https://firebase.google.com/docs/reference/rest/database/) as well as their various SDK's.

This architecture may change in future, but not without far notice to any projects that are currently running on the system.

### Administrators
There is a special tree in the database `/admins/` that lists `<uid>:true` entries for all admin accounts. These need to be set up manually by the system owners. Admin accounts are the ones that may add new node entries and assign nodes to projects.

## Status & Register
View the network status and register your project at [TBA]()

## Building an App
Further information about building an app that leverages SpectrumUC can be found at [TBA]()
