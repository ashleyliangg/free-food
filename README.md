# FreeFood App
## Ashley Liang


## Overview
This website displays free food around campus. The finished project will be that students can input free food information through a form, and that information will be displayed on the main page for everyone to see. The website consists of a home page, which is the page with all the free food tiles; a food submission page, which is a page to submit free food information; and a form success page, which automatically navigates to when a user submits the form.

Because of time issues, I was only have to fully develop the front-end of this project. Thus, information that someone inputs will only be seen by them on their version of this site. I was having trouble figuring out how to link the Firebase firestore with React Redux and ran out of time. So, the files/code will show the beginnings of implementing Firebase.

### Credits
Watched this video to figure out Formik: https://www.youtube.com/watch?v=vJtyp1YmOpc
I want to credit Hermia for the initial design for the home page as well as Ben Levesque for a lot of the .css styling and initial homepage skeleton.

## My experience
I originally started this React App as a hackathon idea back in fall term that our group didn't complete. I was the only person with a bit of react experience, so I created the react app and helped others through the process of installing npm, etc. At the end of the hackathon, we ended up with a working card component and a homepage written in HTML and CSS with hard-coded cards.

I decided to build upon this project more this term; I wanted to create some sort of data structure holding the food data to create the cards so that it wasn't hard-coded in the HTML. I also wanted to develop a form that people could fill out to add to the free food data. 

I learned a lot about React Redux, Firebase/firestore, and mapping data into components through this project. This was the first time I've mapped prop data into components, so understanding the process and syntax behind it was really insightful. This is also the first time I've ever heard of React Redux and Firebase, so even though I wasn't able to fully create a backend using Firebase because of time issues, I'm proud that I was able to generally understand what it is and how it works.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Pushing to GitHub
git tag withRedux
git push origin --tags
