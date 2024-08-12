##Hello sir,
First of all thank you for the oppurtunity. Among the three stack from which I was supposed to pick, I picked React Js and MongoDB to create the product page you have provided me with. Along with 
React Js, I have used Bootstrap and CSS to design the page. I have used mostly CSS to design. For animation, I have used Framer Motion. 

API of this web app is created using Express Js and I have used concurrently package for developing client side and server side of the app simultaneously. 

Also, both the server and client are hosted in one platform by building the React app and serving the index.html of the build folder as a static file, from the server. You can visit the production of the
project [HERE](https://sugartaste-fullstack.onrender.com). This project is hosted in render.com using their free tier web service.

##To setup this project : 
Clone or download the repo, Install all the dependancies using `npm install` in the root directory first and also install the dependancy of React client side code by commanding `cd client` 
and `npm install` in the terminal. 

Before starting the project, `.env` file with all the required variable such as mongoDB connection string, PORT etc must be created. I have gitignored the original `.env` file. 
Here are the variables I have used, you can use them too : 
```

PORT=5000
MONGO_URI="mongodb+srv://interviewjpn:interviewjpn@cluster0.v3evh.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0"
NODE_ENV="production"

```

After setting up `.env` file run `npm run dev` to start developement. This will start both the client and server. Running `npm run start` will open the static build version of the client, but before 
that `npm run build` is required. Other than that, you can use `npm run server` or `npm run client` to start either server or client respectively. 

If you have used other mongoDB connection string in `.env` file, you can seed your database using `node server/seed.js` with demo data.

N.B : Creating `.env` file in the root directory created some problem. However, that issue was resolved in the production and creating the `.env` file in the server folder resolved
the problem in developement. It could be because of the version of node I am using. It might not occur in your case. 

##Thank you again for calling me up for the interview. I am confident, if given chance, I can bring more value to your team. 

And, even if not selected for the next stage, I would very much appreciate some feedback. Thank you.


