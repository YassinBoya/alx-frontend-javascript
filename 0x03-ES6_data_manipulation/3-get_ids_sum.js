export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const sum = getListStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
  return sum;
}
