import mongoose from "mongoose";

const connection={};
const dotenv = require("dotenv");
dotenv.config();

async function connect(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
}

export default connect;