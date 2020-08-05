import  express from 'express';
import gradesRouter from "./routes/grades.js"
import { promise as fs } from "fs";

const {readFile, writeFile}=fs

const app = express();
app.use(express.json());

app.use("/grades", gradesRouter );

app.listen(3000, async() => {
  try {
    const initialJson={
  nextId:1,
  grades:[]

  
}
await readFile("grades.json")


  console.log('API Started');

  } catch (error) {
    
  }


});


