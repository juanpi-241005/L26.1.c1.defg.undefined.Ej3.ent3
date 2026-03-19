declare var bootstrap: any;

export default class CI_vPersona {
    inEdad: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    modal: any;

    constructor() {
        this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
        const elementoModal = document.getElementById("persona");
        this.modal = new bootstrap.Modal(elementoModal);
        this.mostrar();
    }

    get edad(): number {
        return +this.inEdad.value;
    }

    set edad(edad: number) {
        this.inEdad.value = edad.toString();
    }

    mostrar(): void {
        this.modal.show();
    }

    ocultar(): void {
        this.modal.hide();
    }
}