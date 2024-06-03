import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(studs = getListStudents()) {
  return studs.reduce((sum, next) => sum + next.id, 0);
}
