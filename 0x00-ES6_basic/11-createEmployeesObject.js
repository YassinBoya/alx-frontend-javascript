export default function createEmployeesObject(departmentName, employees) {
  const newarray = { [departmentName]: employees };
  return newarray;
}
