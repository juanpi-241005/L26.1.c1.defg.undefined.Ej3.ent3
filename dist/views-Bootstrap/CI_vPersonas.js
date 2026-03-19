export default class CI_vPersonas {
    lblPromedio;
    lblCantRegistros;
    lblEdadesPersonas;
    btnProcesarPersona;
    constructor() {
        this.btnProcesarPersona = document.getElementById("body_btnProcesarPersona");
        this.lblPromedio = document.getElementById("body_lblPromedio");
        this.lblCantRegistros = document.getElementById("body_lblCantRegistros");
        this.lblEdadesPersonas = document.getElementById("body_lblEdadesPersonas");
    }
    reportar({ persona, personas }) {
        this.lblPromedio.innerHTML = personas.PromedioEdad().toFixed(2);
        this.lblCantRegistros.innerHTML = personas.cantidadRegistros().toString();
        this.lblEdadesPersonas.innerHTML = `edad menor: ${personas.mostrarEdadMenor()}%<br>edad mayor: ${personas.mostrarEdadMayor()}%`;
    }
}
//# sourceMappingURL=CI_vPersonas.js.map