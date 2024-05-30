export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(nme) {
    this._name = nme;
  }

  get code() {
    return this._code;
  }

  set code(cde) {
    this._code = cde;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
