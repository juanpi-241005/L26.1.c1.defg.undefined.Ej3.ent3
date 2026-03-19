export default class CI_vPersonas {
    lblPromedio: HTMLElement;
    lblCantRegistros: HTMLElement;
    lblEdadesPersonas: HTMLElement;
    btnProcesarPersona: HTMLButtonElement;

    constructor() {
        this.btnProcesarPersona = document.getElementById("body_btnProcesarPersona") as HTMLButtonElement;
        this.lblPromedio = document.getElementById("body_lblPromedio") as HTMLElement;
        this.lblCantRegistros = document.getElementById("body_lblCantRegistros") as HTMLElement;
        this.lblEdadesPersonas = document.getElementById("body_lblEdadesPersonas") as HTMLElement;
    }

    reportar({ persona, personas }: { persona: any; personas: any }): void {
        this.lblPromedio.innerHTML = personas.PromedioEdad().toFixed(2);
        this.lblCantRegistros.innerHTML = personas.cantidadRegistros().toString();
        this.lblEdadesPersonas.innerHTML = `edad menor: ${personas.mostrarEdadMenor()}%<br>edad mayor: ${personas.mostrarEdadMayor()}%`;
    }
}