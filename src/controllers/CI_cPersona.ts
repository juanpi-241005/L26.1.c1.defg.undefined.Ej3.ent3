import CI_mPersona from "../models/CI_mPersona.js";
import { I_vPersona } from "../interfaces/I_vPersona.js";

export default class CI_cPersona {
    private vista: I_vPersona;
    private callback!: (persona: CI_mPersona | null) => void;

    constructor(vista: I_vPersona) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }

    solicitarEdad(callback: (persona: CI_mPersona | null) => void) {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btCancelarOnClick(): void {
        this.callback(null);
        this.vista.ocultar();
    }

    private btAceptarOnClick(): void {
        this.callback(new CI_mPersona(this.vista.edad, this.vista.nombre, this.vista.peso));
        this.vista.ocultar();
    }
}