//          {1}
//normally javascript runs in the browser; BUT node.js lets you run js on your (computer) or server. ie.outside browser
//NOTE --> node.js is "Js Runtime Environment"

//1)confirm node js installed --> node -v
//  confirm npm installed     --> npm -v
//inside server folder: cmd: npm init -y --> npm: Node Package Manager: TOOL that installs and manages libraries -(called as packeges) for Node.js / javascript projects
//                                       --> 'npm init' cmd for npm--> so npm creates package.json file. that stores info (ie.MetaData) about project:name,dependencies, version, scripts,etc
// -y --> is optional --> it fills the default values automatically

// when node.js is installed.--> npm is also automatically installed as its node.js Tool . it is part of node.js ecosystem

/*package.json : is json file that lives in root of node project. It helps npm to know what to install. 
               : npm uses package.json file to run and manage node.js application
               : others can clone our project and run 'npm install' to get everything set up. means all dependencies and libraries will be automatically installed
               : allows automation with scripts 
               : supports consistent updates
//shortly: npm is nodejs tool --> npm helps install packages and libraries, also start, run, stop server OR test code --> npm init--> cmd to create package.json file--> that keeps track of all of node.js project metadata & also npm uses package.json to get all this metadata whenever needed 

*/

//2) install express -->cmd: npm install express
//           Express --> Node.js framework. allows to handle HTTP req easily like GET,POST,PUT,DELETE
//                   --> also use to create backend routes for tasks and users
//  {2}
const expressVar = require('express'); //Imports express library(express is a Javascript module library). we have installed it using 'npm init express' 
//  require() is buildin Nodejs func. to import external libraries which are preinstalled
// express helps to build server faster. bcoz manually creating server is lengthy process
//how -->
// express has some buildin methods that make server operations easy.

//inside express module --> it has -->  'module.exports = funtion(){...get()...listen()...,etc}'  ...This is anonymous function (not named) inside express module
//means whenever express module will be installed and imported using require(), it will return a funtion without any name (ie.anonymous funtion) -> that holds all the methods in it. methods like get(), listen(), use()...
//so in above line --> a library is imported: require('express')--> that library returns an 'anonymous function' whenever library is imported--> this func is also termed as 'object', as it has key-value and methods in its body --> and this funtion/(object) has buildin methods like get(), listen() which make server coding easy -->  

// to use this exported anonymous function from express library, we need to call it. AND to call it we need first name it.--> as it will be called it will create an object called Express App Obj

/*NOTE: expressVar is user defined variable--> it is holding anonymous function returned by express library--> ie. variable is holding a function as its value
        in Javascript when variable holds funtion. that time funtion is called using syntax--> variable_name()

        so now to called the anonymous funtion returned by express module--> syntax: expressVar()
        this anonymous function needs to be called to get object which it will return

        NOTE: as when called this anonymous function returns object. Therefore it's a ''constructor''
*/

//       {9}
//import the database connection funtion 
const connectDB = require('./db');


// {3}
const appVar = expressVar(); //--> constructor call

// expressVar is a variable having funtion as stored value
// by calling the expressVar(). we are actually calling the constructor funtion assigned to expressVar variable
// when called, this constructor function returns an OBJECT --> which has methods to build a web server --> this express obj is called "Express Application Object"
// methods like get(), listen(), etc are provided by Express Application Object
// ie. we created /called 'express application Object' here. and stored it in an variable
// this object is stored in 'appVar' named variable

//appVar --> is object --> as it is storing OBJECT created from expressVar() 
//appVar --> is instance --> as it is created from constructor { when object is created from constructor or class, that obj is called instance of that constructor/class }

// ie. instance is type of object: object which is created from constructor or class.
//Hence every instance is an object

//this Object of express lib --> contains methods that help to 1) Define routes 2) Handle request and response 3) add middleware(parser, authentication,etc)
// NOW appVar works as 'web server control panel'

// now we just have to use dot. operator to call methods from object stored in appVar. syntax: appVar.methodName(); 

// {4}
//const PORT = 5000;     //web server needs port to run on
//  this 5000 is port where server will listen and run
// port is like door number on machine that listens for network request
 
//  {10}

// update the port 
const PORT = process.env.PORT || 5000;

//   {11}
connectDB(); //calls mongodb connection

//middleware
appVar.use(expressVar.json());

// {5}
appVar.get('/',(req,res) => {
  res.send('Hello from backend');
});
// we are calling get() method. get() is build in method provided by the Express application object. and we are calling the object stored in appVar
// get() method--> defines route to handle http GET requests made by client
/* GET request is a type of HTTP request used to ask for data
    eg: when we type--> http://localhost:5000/ into the browser, browser sends request to the server for data
        Express sees that request and checks: "do we have a route that handles GET request" ie. checks for get()
                                            : yes we have get()
                                            : which route is asked? --> / ie. root route 
                                            : express will respond with given callback funtion in '/' route 
        syntax--> obj.get(path , callback_handler_Function);

        argument 1 --> URL path -->  path tells the Express server which part or APi is being requested by browser
                        
                           here '/' --> means: its the root path for Home Page 
                                    --> ie.this tells Express server that browser is requesting for home page 
                           similarly we have /about --> this will request for about page.
        
        argument 2 --> callback/Route_handlerFunction --> tells express, what to return when browser requests for the route that is in 1st argument
                                                      --> it contains a funtion that runs and returns when req is made for this route

                                                        routeHandlerFuntion is having two parameters (req, res) --> 
                                                        when server gets request from browser: Express internally creates a Request object 'res' and Response object 'res' --> then automatically calls funtion and passes those obj to it
                                                        req --> this obj contains data about the request made by client (method, URL, headers, etc)
                                                        res --> this obj allows server to send back data to client/ browser  
                                       
      in javascript there are two ways to define function:
      1) function (res,req) { res.send(Hello); } --> using function keyword
      2) (req,res) => { res.send(Hello); }       --> using => arrow function symbol: syntax: () => {}
      
      res --> is response object provided by Express
      on res object --> Express provides a method called send() --> that is used to send a response back to the client 
      this res.send() --> can send 3 types of responses--> 1] string --> res.send('hello') 2] html --> res.send('<h1>hello</h1>') 3] object--> res.send({message: 'hello'})
      
      flow: client visits / route --> Express sees the route and calls your fun --> your funtion runs res.send() --> message is send back and shown in browser
      */

//    {7}
//About route
appVar.get('/about',(req,res) => { res.send("this is about route of Linkedin Ai integreted app");

}); // handles about/ route --> sends string response
 
appVar.get('/abc',(req,res) => { res.send("this is abc dummy route");

}); //handles about/ route --> sends string response

// API checking
appVar.get('/api', (req, res) => {
  res.json( {message : 'API is working fine'} );
    //handles /api route --> sends json message(not a string) in res.
});
//    {8}
//dummy user route
appVar.get('/api/users',(req,res)=>{
  //this route will listen to '/api/users' URL path
  // this route sends back a json format
const users = [
  {id: 1, name:'Riya', title: 'Frontend Dev'},
  {id: 2, name:'Arjun', title:'Backend Dev'},
  {id: 3, name:'Simran', title:'Ai specialist'},
];
res.json(users);
});
//(req,res) --> this is route handler function--> req: incoming request obj--> with all info of client/browser
//                                            --> res: outgoing response obj--> to define what to send
//const users =[{},{},{}] --> array --> this is temporary array--> in actual program it will be replaced by DATA from database like mongoDB
//res.json(users) --> sends the users array as json format --> here json() method is used to convert JS array to JSON format--> automatically sets 'CONTENT-TYPE:application/json' header


//     {6}
appVar.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
/*
computer can run many diff programs ie.servers . But each server must run on a unique port number, else they will clash. 
IMP :--> port number tells computer which server should handle which kind of incoming request from client. So port must be unique for every server.
        listen() method --> tells computer that reserve port number 5000(here) for this Express app. ie. Our server is telling computer: i'm ready to handle request on prt 5000, and keep it reserve for me

When we run : http:/localhost/5000 on browser --> browser makes a req to computer on that port --> with listen() , Express app is listening on that port 5000 --> Bcoz of code line: appVar.listen(PORT) -->         */
//.listen() is the method of Express Application Object *that starts the server* and makes it ready to listen for incoming requests from the client ie.browser or Postman
// Syntax for listen() --> listen( port, [hostname], [backlog], [callback]) --> argument port is complulsory as it tells Express, which server to start--> other arguments are optional
//                     --> this listen funtion listens to HTTP req & starts server with portnumber given in 1st argument. 
//                     --> then further arguments are implemanted on that server just after starting the server                                    
// we used syntax--> listen(port, callback) --> when post will start successfully run this func--> 
//                   value of port is 5000 stored in variable named port, user defined
//                2nd arg --> ()=>{}  arrow function 

