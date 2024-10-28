export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('the code should be a string');
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') throw new TypeError('the code should be a string');
    this._code = value;
  }

  greet() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
  toString(){
    return `[object ${this._code}]`;
  }
}
