import express from 'express';
const router = express.Router();
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

router.get('/', async (req, res) => {
  const data = JSON.parse(await readFile('grades.json'));
  delete data.nextId;
  console.log(data);
  res.send(data);
});

// router.post('/', async (req, res) => {

//   let data = JSON.parse(await readFile('grades.json'));
  
//   console.log(data);
//   res.send(data);
// });


export default router;
