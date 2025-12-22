# Mern-Authentication-
learning about authentication backend connection and more about backend technologies.

backend start with server.js
		npm init ------> it creates package.json
then do okk everythings
		npm i <install all packages whatever you want>
		packages like 
		-express-----its used to create backend
		-cors----- allow to connect backend with frontend, 
		-dotenv---- help us to store environment variable in the backend, 
		-nodemon---- help us to restart when we make any changes in the codefiles, 			-jsonwebtoken----using this we create token for authenication,
 		-mongoose----helps to connects mongoDB database, 
		-bcryptjs---- encrypt the password and  save in the database,
		-nodemailer----helps us to send the emails, 
		-cookie-parser----helps to send the cookies in the api response


add in packeage.json: after main-server.js
		-is "type":"module" which is used for import and export statement


In Express.js, app.use() is a middleware function.
It is used to run some code for every incoming request before sending a response.


one of the SMTP provider called nodemailer(bravo) used in this we can use Google mailer provider also

------------------------------------------------------------------------------------------------------------
client(frontend)--

npm create vite@latest--- then everythings ok ok

packages--
      -axios --> API Calling
	  -react-router-dom --> router in react app
	  -react-toastify --> display notification in web page

remove app.css
go to app.jsx and remove everthings and 
	  -short form for boilwer plate
	 		-rafce

go to index.css and remove everthings and modify html acc.

tailwind css installed using
		-npm install -D tailwindcss@3 postcss auto
		-npx tailwindcss init -p
				- its help tp create tailwind.config.js file and postcss.config.js
				-add this in tailwind.config.js file 

						/* eslint-disable */
						module.exports = {
						content: [
							"./index.html",
							"./src/**/*.{js,ts,jsx,tsx}",
						],
						theme: {
							extend: {},
						},
						plugins: [],
						}

postcss.config.js 
						/* eslint-disable */
						module.exports = {
						plugins: {
							tailwindcss: {},
							autoprefixer: {},
						},
						}


add this in index.css
						@tailwind base;
						@tailwind components;
						@tailwind utilities;






useref is used in EmailVerify.jsx

its used to store that store and input value in current value





------------
why we use jsx in frontend and js in backend file

what is the diff btw app.jsx and main.jsx

why we use backticks 

**checks all api uses and frontend code reviews**

