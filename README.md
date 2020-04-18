This is the bootstrap for hackathons

Don't forget to add firebase by running

### `npm install -g firebase-tools`

Create firebase account if you don't have one yet, then login

### `firebase login`

Create project in firebase console at https://console.firebase.google.com/

Make sure to install functions and hosting
Configure as SPA and public folder should be build. DON'T REWRITE index.html

# INITIALIZE FIRESTORE IN YOUR CONSOLE AND SET REGION THERE WITHOUT IT YOU WON'T BE ABLE TO INITIALIZE PROJECT

### `firebase init`

After init don't forget to put your key
copy config of your project from settings on console page and paste it in /src/config/firebase.js config constant

_SET YOUR PUBLIC FOLDER AS build_

Configure SPA by changing unregister to register on serviceWorker in src/index.js
Change Favicon in /public by pasting it from favicon generator https://www.favicon-generator.org/ (don't paste manifest file, configure it manually)
Change title and description at /public/index.html

Install all dependencies

### `npm install`

Run your project

### `npm start`

Runs the app in the development mode.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `firebase deploy`

Deploy your project to firebase hosting
