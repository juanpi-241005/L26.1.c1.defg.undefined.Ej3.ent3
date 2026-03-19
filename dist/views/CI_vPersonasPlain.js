export default class CI_vPersonasPlain {
    lblPromedio;
    lblEdadesPersonas;
    lblMayorMenor;
    lblComparacion;
    lblPromedioPeso; // NUEVO
    btnProcesarPersona;
    constructor() {
        this.btnProcesarPersona = document.getElementById("body_btnProcesarPersona");
        this.lblPromedio = document.getElementById("body_lblPromedio");
        this.lblEdadesPersonas = document.getElementById("body_lblEdadesPersonas");
        this.lblMayorMenor = document.getElementById("body_lblMayorMenor");
        this.lblComparacion = document.getElementById("body_lblComparacion");
        this.lblPromedioPeso = document.getElementById("body_lblPromedioPeso");
    }
    onProcesarEdad(callback) {
        this.btnProcesarPersona.onclick = callback;
    }
    reportar({ persona, personas }) {
        this.lblPromedio.innerHTML = personas.PromedioEdad().toFixed(2);
        this.lblEdadesPersonas.innerHTML = ` Análisis por categorías (mayores/menores de edad)
                                            <br>
                                            porcentaje de menores: ${personas.porcentajeMenores()}%
                                            <br> 
                                            pocentaje de mayores: ${personas.porcentajeMayores()}%`;
        this.lblMayorMenor.innerHTML = `  Mayor/Menor relativo  
                                        <br>
                                        - Persona de MAYOR edad: ${personas.getNombreEdadMax()} (${personas.getEdadMax()} años)
                                        <br>
                                        - Persona de MENOR edad: ${personas.getNombreEdadMin()} (${personas.getEdadMin()} años)`;
        this.lblComparacion.innerHTML = `Comparativa de tipos:
                                        <br>
                                        - Tipo más común: ${personas.tipoMasComun()}`;
        this.lblPromedioPeso.innerHTML = `Nuevo Requerimiento:
                                          <br>
                                          - Promedio de Peso de los Registrados: ${personas.promedioPeso()}Kg`;
    }
}
//# sourceMappingURL=CI_vPersonasPlain.js.map