//in thiws file: We will define the structure of a 'User' in our MongoDB database using Mongoose
//--> mongoose is library that connects our code to MongoDB using JS
//-->Schema is a template for how a MOngoDB document should look. define User fields eg.name, email,etc --> note schema cannot directly connect and talk with mongoDB-->ie it cannot perform operations on MongoDB --> it must be compiled into model for this purpose
//-->model is a Mongoose object based on Schema-->it lets us rn database operations like.save(), .find(), .delete(),etc --> schema needs to be compiled into model for connecting to MongoDB--> only model can perform operations on mongoDB --> so compiling schema into model is needed

//NOTE --> MongoDB bydefault is 'schemaLess'. So we use mongoose to give our data, a structure. using Schema which is inside mongoose

const mongoose = require("mongoose"); //imports the mongoose library from installed mongoose npm package (installed using: npm )

/*this mongoose library gets installed when we run 'npm install mongoose', its added as a folder in node_modules folder
require("mongoose"); loads that modeule and assigns the 'Js OBJECT' returned by this module inside a const variable name'mongoose'-->(userdefined)
this OBJECT gives access to all of Mongoose features like: mongoose.Schema() --> to define schemas ie. document structure  
                                                           mongoose.model()  --> to create models based on schemas
                                                           mongoose.connect()--> to connect our applicaiton to mongoDB
                                                           etc

                                                           */

//here we are calling the Schema() --> constructor function. its already defined in the mongoose library.(constructor function is a func that returns obj when called) 
//new keyword creates a new schema instance
const userSchema = new mongoose.Schema({
  //here we used key-value pairs ie: field: {property}
  // field1(key) : { property  },
  // field2: {property},           --> property is also in key:value pair. property can be 1.type: String/Boolean,etc OR 2.required: true ,3.etc
  // field3: {property} 
  //NOTE--> fields are userdefined But properties are syntax. thou defined/used by user but suntax is must.
  name: { type: String, //type : specifies the datatype
         required: true, //--> bcoz every user must have a name. 'required : true,' means this field cannot be left empty
        },
  email: {type: String,
          required: true,//--> email is key for authentication/login
  
          unique:true //--> prevents duplicate registration
          },
  password: {type: String,
             required: true, //required for secure login
  },
  headline: {type: String,
            default:''  // default'' means if nothing is given by user, then automcatically add this. Here we have kept it blank by default,
  },
  bio:{ type: String,
        default:'tech entusiast & AI learner' //optional, for brief description
  },
  profilePic:{ type: String, 
            default:''
  },
  createAt: { type: Date, // Date is a datatype in Js 
              default: Date.now //automatically stores registration timestamp
  }
});

//create model from schema
//mongoose.medel() is a func buildin by mongoose that compiles schema into model.
//schema cannot directly connect with mongoDB and also cannot perform operations--> schema is just a template to structure data
//model is used to connect with mongoDB and performs operations(CRUD)
const User = mongoose.model('User', userSchema);

//Export model
model.exports = User;

//This file doesnot store anything --> it only defines how data should look
// and exposes the model for user in other files.