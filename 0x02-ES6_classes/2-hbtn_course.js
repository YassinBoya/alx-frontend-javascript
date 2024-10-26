export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get legnth() {
    return this._length;
  }

  set legnth(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this.students;
  }

  set students(values) {
    if (!Array.isArray(values) || !values.every((value) => value === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = values;
  }
}
