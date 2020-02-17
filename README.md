This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a front end application based on React that also uses a framework called Material UI, which provides beautiful and responsive components for faster development and layout standardization.

This project can work in conjunction with [the quickstart-nodejs server](https://github.com/profusion/quickstart-nodejs-rest). More instruction on how to use it down below.

# Available Scripts

In the project directory, you can run:

### `yarn install`

Run this command before anything else to install all the necessary modules to run this project.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Routes and login

The login route can be found on [http://localhost:3001/login](http://localhost:3001/login). One can get access to the system by using 'admin' as a username and password.

## Working with quickstart-nodejs

Currently this project is compatible with the [the quickstart-nodejs server](https://github.com/profusion/quickstart-nodejs-rest). In some screens, like the profile one, a request will be made and user info will be retrieved and shown on the screen. All instruction on how to run the server are on the repo (make sure to use `yarn populate-db`).


# Troubleshooting

## Problems with CORS
If you end up having problems with CORS when making requests through a browser, you might have to put a new domain on the CORS allowed domain, or even allow all domains (`origin: true`) if that doesn't work.


# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
