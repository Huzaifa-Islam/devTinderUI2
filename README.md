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