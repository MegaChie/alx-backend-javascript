const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).filter(line => line.trim() !== '');
    const studentsCount = students.length;
    console.log(`Number of students: ${studentsCount}`);

    const fields = {};
    for (const student of students) {
      const [fname, lname, age, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(fname);
    }

    for (const [field, fname] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${fname.length}. List: ${fname.join(', ')}`);
    }
  } catch (error) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
