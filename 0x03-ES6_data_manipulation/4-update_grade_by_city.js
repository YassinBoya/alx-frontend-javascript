export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents) || !Array.isArray(newGrades)) {
    throw new TypeError('getListStudents and newGrades should be arrays');
  }
  const filtredStudents = getListStudents.filter(
    (student) => student.location === city,
  );

  const allGradeStudents = filtredStudents.map((student) => {
    for (const studentsGrade of newGrades) {
      if (student.id === studentsGrade.studentId) {
        student.grade = studentsGrade.grade;
      }
    }
    return student;
  });

  return allGradeStudents;
}
