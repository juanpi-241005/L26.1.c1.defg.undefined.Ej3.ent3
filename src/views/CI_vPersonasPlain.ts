import CI_mPersona from "../models/CI_mPersona.js";
import CI_mPersonas from "../models/CI_mPersonas.js";
import { I_vPersonas } from "../interfaces/I_vPersonas.js";

export default class CI_vPersonasPlain implements I_vPersonas {
    private lblPromedio: HTMLElement;
    private lblEdadesPersonas: HTMLElement;
    private lblMayorMenor: HTMLElement;
    private lblComparacion: HTMLElement;
    private lblPromedioPeso: HTMLElement; // NUEVO
    private btnProcesarPersona: HTMLButtonElement;

    constructor() {
        this.btnProcesarPersona = document.getElementById("body_btnProcesarPersona") as HTMLButtonElement;
        this.lblPromedio = document.getElementById("body_lblPromedio") as HTMLElement;
        this.lblEdadesPersonas = document.getElementById("body_lblEdadesPersonas") as HTMLElement;
        this.lblMayorMenor= document.getElementById("body_lblMayorMenor") as HTMLElement;
        this.lblComparacion= document.getElementById("body_lblComparacion") as HTMLElement;
        this.lblPromedioPeso = document.getElementById("body_lblPromedioPeso") as HTMLElement;
    }

    onProcesarEdad(callback: () => void): void {
        this.btnProcesarPersona.onclick = callback;
    }

    reportar({ persona, personas }: { persona: CI_mPersona; personas: CI_mPersonas }): void {
        this.lblPromedio.innerHTML = personas.PromedioEdad().toFixed(2);
        this.lblEdadesPersonas.innerHTML = ` Análisis por categorías (mayores/menores de edad)
                                            <br>
                                            porcentaje de menores: ${personas.porcentajeMenores()}%
                                            <br> 
                                            pocentaje de mayores: ${personas.porcentajeMayores()}%`;
        this.lblMayorMenor.innerHTML= `  Mayor/Menor relativo  
                                        <br>
                                        - Persona de MAYOR edad: ${personas.getNombreEdadMax()} (${personas.getEdadMax()} años)
                                        <br>
                                        - Persona de MENOR edad: ${personas.getNombreEdadMin()} (${personas.getEdadMin()} años)`
        this.lblComparacion.innerHTML= `Comparativa de tipos:
                                        <br>
                                        - Tipo más común: ${personas.tipoMasComun()}`
        this.lblPromedioPeso.innerHTML = `Nuevo Requerimiento:
                                          <br>
                                          - Promedio de Peso de los Registrados: ${personas.promedioPeso()}Kg`
    }
}