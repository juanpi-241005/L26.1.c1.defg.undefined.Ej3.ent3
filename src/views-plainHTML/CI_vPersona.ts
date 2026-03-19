export default class CI_vPersona {
    inEdad: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("persona") as HTMLElement;
        this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
        this.mostrar();
    }

    get edad(): number {
        return +this.inEdad.value;
    }

    set edad(edad: number) {
        this.inEdad.value = edad.toString();
    }

    mostrar(): void {
        if (this.vista) this.vista.hidden = false;
    }

    ocultar(): void {
        if (this.vista) this.vista.hidden = true;
    }
}