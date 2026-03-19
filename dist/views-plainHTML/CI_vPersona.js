export default class CI_vPersona {
    inEdad;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("persona");
        this.inEdad = document.getElementById("persona_inEdad");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.mostrar();
    }
    get edad() {
        return +this.inEdad.value;
    }
    set edad(edad) {
        this.inEdad.value = edad.toString();
    }
    mostrar() {
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=CI_vPersona.js.map