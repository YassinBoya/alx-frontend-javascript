export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  if (typeof city !== 'string') {
    return new TypeError('the city should be a string');
  }
  return getListStudents.filter((student) => city === student.location);
}
