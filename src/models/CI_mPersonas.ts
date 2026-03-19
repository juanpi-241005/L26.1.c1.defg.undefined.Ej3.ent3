import CI_mPersona from "./CI_mPersona.js";

export default class CI_mPersonas {
    // Propiedades existentes
    private promedioEdad: number = 0;
    private contEdad: number = 0;
    private acumEdad: number = 0.0;
    private contRegistros: number = 0;
    private contMenorEdad: number = 0;
    private contMayorEdad: number = 0;
    private edadMax: number = 0;
    private nombreEdadMax: string = "";
    private edadMin: number = Infinity;
    private nombreEdadMin: string = "";
    // NUEVA PROPIEDAD para el nuevo requerimiento
    private acumPeso: number = 0;

    procesarPersona(persona: CI_mPersona): void { 
        // Lógica existente
        this.acumEdad += persona.edad;
        this.contEdad++;
        this.promedioEdad = this.acumEdad / this.contEdad;

        if (persona.edad >= 18) {
            this.contMayorEdad++;
        } else {
            this.contMenorEdad++;
        }
        
        if (persona.edad > this.edadMax) {
            this.edadMax = persona.edad;
            this.nombreEdadMax = persona.nombre;
        }
        if (persona.edad < this.edadMin && this.contRegistros >=1) {
            this.edadMin = persona.edad;
            this.nombreEdadMin = persona.nombre;
        }
        this.contRegistros++;
        // Nueva Lógica
        this.acumPeso += persona.peso;
    }

    // Getters existentes
    PromedioEdad(): number { 
        return this.promedioEdad; 
    }

    // GETTERS (CANTIDADES) 
    cantidadMayores(): number {
        return this.contMayorEdad;
    }
    cantidadMenores(): number {
        return this.contMenorEdad;
    }

    //  GETTERS (PORCENTAJES)
    porcentajeMayores(): number {
        if (this.contRegistros === 0) return 0;
        return (this.contMayorEdad / this.contRegistros) * 100;
    }
    
    porcentajeMenores(): number {
        if (this.contRegistros === 0) return 0;
        return (this.contMenorEdad / this.contRegistros) * 100;
    }
    
    // GETTERS (MAYOR/MENOR)
    getNombreEdadMax(): string { 
        return this.nombreEdadMax; 
    }
    getEdadMax(): number { 
        return this.edadMax; 
    }
    getNombreEdadMin(): string { 
        if (this.edadMin === Infinity) return this.nombreEdadMax;
        return this.nombreEdadMin; 
    }
    getEdadMin(): number { 
        if (this.edadMin === Infinity) return this.edadMax;
        return this.edadMin; 
    }
    
    //  GETTER (COMPARATIVA)
    tipoMasComun(): string {
        if (this.contMayorEdad > this.contMenorEdad) return "Mayores de edad";
        if (this.contMenorEdad > this.contMayorEdad) return "Menores de edad";
        return `Igual cantidad` ;
    }

    // NUEVO GETTER (PROMEDIO DE PESO)
    promedioPeso(): number {
        return this.acumPeso / this.contRegistros;
    }
}