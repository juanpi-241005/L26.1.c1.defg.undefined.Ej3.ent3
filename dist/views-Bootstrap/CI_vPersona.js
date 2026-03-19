export default class CI_vPersona {
    inEdad;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inEdad = document.getElementById("persona_inEdad");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.btAceptar = document.getElementById("persona_btAceptar");
        const elementoModal = document.getElementById("persona");
        this.modal = new bootstrap.Modal(elementoModal);
        this.mostrar();
    }
    get edad() {
        return +this.inEdad.value;
    }
    set edad(edad) {
        this.inEdad.value = edad.toString();
    }
    mostrar() {
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=CI_vPersona.js.map