export default class CI_mPersona {
    _edad = 0;
    _nombre = "";
    _peso = 0; // ← NUEVO
    constructor(edad, nombre = "", peso = 0) {
        this.edad = edad;
        this._nombre = nombre;
        this._peso = peso;
    }
    set edad(e) { this._edad = +e; }
    get edad() { return this._edad; }
    set nombre(n) { this._nombre = n; }
    get nombre() { return this._nombre; }
    set peso(p) { this._peso = +p; }
    get peso() { return this._peso; }
}
//# sourceMappingURL=CI_mPersona.js.map