import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { questions } from "./questions.js";
const app = express();

dotenv.config();


const Port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(questions)
})


app.listen(Port,()=>{
    console.log(`server is listening on port ${Port}`)
})
