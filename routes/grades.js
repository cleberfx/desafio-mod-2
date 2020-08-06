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

router.post('/', async (req, res) => {
  let grade = req.body;
  let date = new Date();
  let dateString = date.toString();
  console.log(dateString);
  let data = JSON.parse(await readFile('grades.json'));
  grade = {
    id: data.nextId++,
    ...grade,
    timestamp: dateString,
  };
  console.log(grade);
  data.grades.push(grade);
  console.log(grade);
  await writeFile('grades.json', JSON.stringify(data));

  console.log(data);
  res.send(grade);
});

export default router;
