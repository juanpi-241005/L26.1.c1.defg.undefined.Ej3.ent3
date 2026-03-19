import { I_vPersona } from "../interfaces/I_vPersona.js";

export default class CI_vPersonaPlain implements I_vPersona {
    private inEdad: HTMLInputElement;
    private inNombre:HTMLInputElement;
    private inPeso: HTMLInputElement; // NUEVO
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("persona") as HTMLElement;
        this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
        this.inNombre= document.getElementById("persona_inNombre") as HTMLInputElement;
        this.inPeso = document.getElementById("persona_inPeso") as HTMLInputElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
    }

    get edad(): number {
        return +this.inEdad.value;
    }
    get nombre():string {
        return this.inNombre.value;
    }
    get peso(): number {
        return +this.inPeso.value;
    }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }

    mostrar(): void {
        this.inEdad.value = "";
        this.inNombre.value = "";
        this.inPeso.value = "";
        if (this.vista) this.vista.hidden = false;
    }

    ocultar(): void {
        if (this.vista) this.vista.hidden = true;
    }
}