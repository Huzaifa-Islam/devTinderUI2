- create a react project using vite
- removed unnecessary files
- install the tailwind css
- install the daisyUI
- try some daisyUI components

- create a NavBar.jsx file and import that in app.js file 

- Lets create a routing feature.. as we cannot show everything on one page..
- we will use react browser router -- read the documentation --> npm i react-router-dom
- we will use this react router dom in the app.jsx file and define the routers and element/component/code to show on that path 
- we will use browser router

- Lets plan how our application will look like
Body
    NavBar
    Route=/ => Feed
    Route=/login => Login
    Route=/connections => Connections
    Route=/profile => profile

-Lets start creating a login page and then its functionality
-Install axios
-try hitting the backend api developed by me for now its on local server
-if the backend server is up, we will get the cors error
-To resolve that install cors in backend project
-Now use cors as a middleware
-Hit the api again -- response 200 will come if backend is up but in browser cookies the token will not come as it used to come in postman
-To resolve that cookies issue in backend add the configuration like : origin and credentials, in origin give the frontend domain and in credentials give true.
-Still if the api is hit after doing the above changes, the cookies will not come
-In Frontend as well, add a config withCredentials as true in axios while making an api call
-Hit the api, the token will come in the browser cookies 

After hitting the login api and getting a success response, lets store the user data in the redux store. 
Docs - https://redux-toolkit.js.org/tutorials/quick-start
lets install redux toolkit  --> npm i @reduxjs/toolkit react-redux
Now steps to setup store --> configureStore ==> Provider ==> createSlice ==> add reducer to Store
useDispatch --> to dispatch action (add data to redux store)
useSelector --> subscribing to store (get data from redux store)

When user logs in and now refreshed the browser page, do not logout the user instead make a profile/view call to get the user again using the toen which is there in the cookies.. Bcz just refreshing the page do not cause cookies to be removed, so we can use the token to get our user and store the value in the redux store.
Also handled a case when user is not logged in, user cannot go to any other routes.. or if user is logged in and the token is expired or deleted manually from the browser then when user tries to do anything, or refreshes the page, user should be taken to login page.