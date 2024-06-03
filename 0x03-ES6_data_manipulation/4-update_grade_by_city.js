import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(studs = getListStudents(), city, newGrades) {
  return studs.filter((elem) => elem.location === city)
    .map((human) => {
      const grades = newGrades.filter((elem) => elem.studID === human.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...human,
        grade,
      };
    });
}
