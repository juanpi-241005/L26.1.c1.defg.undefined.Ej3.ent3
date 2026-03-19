export default class CI_vPersonaPlain {
    inEdad;
    inNombre;
    inPeso; // NUEVO
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("persona");
        this.inEdad = document.getElementById("persona_inEdad");
        this.inNombre = document.getElementById("persona_inNombre");
        this.inPeso = document.getElementById("persona_inPeso");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.btAceptar = document.getElementById("persona_btAceptar");
    }
    get edad() {
        return +this.inEdad.value;
    }
    get nombre() {
        return this.inNombre.value;
    }
    get peso() {
        return +this.inPeso.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inEdad.value = "";
        this.inNombre.value = "";
        this.inPeso.value = "";
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=CI_vPersonaPlain.js.map