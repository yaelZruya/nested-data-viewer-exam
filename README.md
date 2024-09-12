# Vue Client-Side Exam Project #
This project consists of a Node.js server and a Vue.js 3 client application. 
The Node.js server provides API data,
and the Vue.js frontend consumes this data to display nested data.

The project is divided into two main directories:

## server/: 
Contains the server-side code (node.js).
## client/:
Contains the client-side code (Vue.js project).

# Server Directory #
The server/ directory contains:

server.js: The main entry point for the server API data.
package.json: Defines the server's dependencies and scripts.
package-lock.json: Lock file for the server's dependencies.

# Client Directory #
The client/ directory contains a full Vue.js project, including:

src/: The source directory of the project.

assets/: Static assets.
components/: Vue components.
router/: Routing configurations.
stores/: Stores (likely Pinia or Vuex).
App.vue: The main application component.
main.js: The application entry point.

Configuration files:

babel.config.js
jsconfig.json
vue.config.js

package.json and package-lock.json: For managing client dependencies.




# Installation #

## Install server dependencies:
cd server

npm install

## Install client dependencies:
cd ../client/nested-data-viewer

npm install

# Running the Application #

## Start the server:
cd server

node server.js

## Run the client in development mode:
cd ../client/nested-data-viewer

npm run serve


# Production Build #
cd ../client/nested-data-viewer

npm run build
