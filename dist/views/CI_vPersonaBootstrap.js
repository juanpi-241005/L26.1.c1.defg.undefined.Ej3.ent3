export default class CI_vPersonaBootstrap {
    inEdad;
    inNombre;
    inPeso; // NUEVO
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inEdad = document.getElementById("persona_inEdad");
        this.inNombre = document.getElementById("persona_inNombre");
        this.inPeso = document.getElementById("persona_inPeso");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.btAceptar = document.getElementById("persona_btAceptar");
        const elementoModal = document.getElementById("persona");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=CI_vPersonaBootstrap.js.map