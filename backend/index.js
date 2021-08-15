const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");

const PORT = 4001;
const app = express();
/** These options used to solve Deprecation Warnings */
const connectionOptions = {
    /** Using new driver for mongodb for things like server selection, server discovery and monitoring */
    useUnifiedTopology :true, 
    /** New Parser for connection URL */
    useNewUrlParser :true, 
    /** Enables using findOneAndUpdate  instead of findAndModify */
    useFindAndModify:false};

/** Express Json middleware get the request and pass the body as Json formatted */
app.use(express.json());

/** Implement Cors Middleware */
app.use(cors());

mongoose.connect("mongodb+srv://diliru:AQ5BjfOiS7sE7e0i@cluster0.3sph6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",connectionOptions)
        .then(()=> console.log("connected to mongo db successfully"))
        .catch((err)=>console.error(err));

app.use("/todos",todoRoutes);

app.listen(PORT,()=>{
    console.log("APP IS LISTENING ON "+ PORT);
})