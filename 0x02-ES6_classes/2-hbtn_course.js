export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(nme) {
    if (typeof nme !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nme;
  }

  get length() {
    return this._length;
  }

  set length(lngth) {
    if (typeof lngth !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = lngth;
  }

  get students() {
    return this._students;
  }

  set students(stud) {
    if (!Array.isArray(stud)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = stud;
  }
}
