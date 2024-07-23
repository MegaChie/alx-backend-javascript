const fs = require('fs').promises;
const http = require('http');

const hostname = '127.0.0.1';
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

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      response.write(output);
      response.end();
    } catch (error) {
      response.write('Cannot load the database\n');
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.write('Not Found');
    response.end();
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
