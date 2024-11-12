import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

//file importing
import clientRoutes from "./routes/client.js";
import managementRoutes from "./routes/management.js";
import generalRoutes from "./routes/general.js";
import salesRoutes from "./routes/sales.js";

// start configration 
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// ROuTES
app.use(" /client", clientRoutes);
app.use(" /general",generalRoutes)
app.use(" /management",managementRoutes)
app.use("/sales",salesRoutes)


/*MONGOS setups */

const PORT = process.env.PORT || 9000 ;// the backup port if we gone need it 
mongoose
.connect(process.env.MONGO_URL)
.then(()=> {
    app.listen(PORT,()=>console.log(`Server Port :${PORT}`));
})
.catch((error)=>console.log(`${error}did not connct `));     