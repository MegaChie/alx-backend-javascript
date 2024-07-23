const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  let output = '';
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const studentsCount = students.length;
    output += `Number of students: ${studentsCount}\n`;

    const fields = {};
    for (const student of students) {
      const [fname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(fname);
    }

    for (const [field, fname] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${fname.length}. List: ${fname.join(', ')}\n`;
      output = output.trimEnd();
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  return output;
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const output = await countStudents(process.argv[2]);
  const fullOutput = `This is the list of our students\n${output}`;
  res.send(fullOutput);
});

app.listen(port, () => {});

module.exports = app;
