export default class CI_mPersonas {
    // Propiedades existentes
    promedioEdad = 0;
    contEdad = 0;
    acumEdad = 0.0;
    contRegistros = 0;
    contMenorEdad = 0;
    contMayorEdad = 0;
    edadMax = 0;
    nombreEdadMax = "";
    edadMin = Infinity;
    nombreEdadMin = "";
    // NUEVA PROPIEDAD para el nuevo requerimiento
    acumPeso = 0;
    procesarPersona(persona) {
        // Lógica existente
        this.acumEdad += persona.edad;
        this.contEdad++;
        this.promedioEdad = this.acumEdad / this.contEdad;
        if (persona.edad >= 18) {
            this.contMayorEdad++;
        }
        else {
            this.contMenorEdad++;
        }
        if (persona.edad > this.edadMax) {
            this.edadMax = persona.edad;
            this.nombreEdadMax = persona.nombre;
        }
        if (persona.edad < this.edadMin && this.contRegistros >= 1) {
            this.edadMin = persona.edad;
            this.nombreEdadMin = persona.nombre;
        }
        this.contRegistros++;
        // Nueva Lógica
        this.acumPeso += persona.peso;
    }
    // Getters existentes
    PromedioEdad() {
        return this.promedioEdad;
    }
    // GETTERS (CANTIDADES) 
    cantidadMayores() {
        return this.contMayorEdad;
    }
    cantidadMenores() {
        return this.contMenorEdad;
    }
    //  GETTERS (PORCENTAJES)
    porcentajeMayores() {
        if (this.contRegistros === 0)
            return 0;
        return (this.contMayorEdad / this.contRegistros) * 100;
    }
    porcentajeMenores() {
        if (this.contRegistros === 0)
            return 0;
        return (this.contMenorEdad / this.contRegistros) * 100;
    }
    // GETTERS (MAYOR/MENOR)
    getNombreEdadMax() {
        return this.nombreEdadMax;
    }
    getEdadMax() {
        return this.edadMax;
    }
    getNombreEdadMin() {
        if (this.edadMin === Infinity)
            return this.nombreEdadMax;
        return this.nombreEdadMin;
    }
    getEdadMin() {
        if (this.edadMin === Infinity)
            return this.edadMax;
        return this.edadMin;
    }
    //  GETTER (COMPARATIVA)
    tipoMasComun() {
        if (this.contMayorEdad > this.contMenorEdad)
            return "Mayores de edad";
        if (this.contMenorEdad > this.contMayorEdad)
            return "Menores de edad";
        return `Igual cantidad`;
    }
    // NUEVO GETTER (PROMEDIO DE PESO)
    promedioPeso() {
        return this.acumPeso / this.contRegistros;
    }
}
//# sourceMappingURL=CI_mPersonas.js.map