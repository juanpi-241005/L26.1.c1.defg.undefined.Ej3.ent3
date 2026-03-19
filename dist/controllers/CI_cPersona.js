import CI_mPersona from "../models/CI_mPersona.js";
export default class CI_cPersona {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarEdad(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new CI_mPersona(this.vista.edad, this.vista.nombre, this.vista.peso));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=CI_cPersona.js.map