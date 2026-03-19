/*ceRequerimientos:
1. Estadísticas generales
Edad promedio del grupo

2. Análisis por categorías (mayores/menores de edad)
Cantidad de personas mayores de edad (≥18 años)
Cantidad de personas menores de edad (<18 años)
Porcentaje que representa cada grupo

3. Valores extremos (mayor/menor relativo)
Nombre y edad de la persona de MAYOR edad
Nombre y edad de la persona de MENOR edad

4. Comparativa de tipos
Indicar qué categoría es más común: mayores, menores o si hay igualdad

datos de prueba

Nombre	Edad  Peso
Ana	    15    120
Carlos	14    80
María	19    60
José	20    50
Luisa	16    90
Pedro	18    70

salida
text
=== RESULTADOS DE EDADES ===

 Estadísticas generales:
- Edad promedio: 17.00 años

 Porcentajes:
- Mayores de edad (≥18): 50.00% (3 personas)
- Menores de edad (<18): 50.00% (3 personas)

 Mayor/Menor relativo:
- Persona de MAYOR edad: José (20 años)
- Persona de MENOR edad: Carlos (14 años)

 Comparativa de tipos:
- Tipo más común: Igual cantidad

NUEVO REQUERIMIENTO
- Promedio de Pesos: 78,33 Kg*/
import CI_mPersonas from "../models/CI_mPersonas.js";
export default class CI_cPersonas {
    mPersonas = new CI_mPersonas();
    vPersonas;
    cPersona;
    constructor(vistaPersonas, controladorPersona) {
        this.vPersonas = vistaPersonas;
        this.cPersona = controladorPersona;
        this.vPersonas.onProcesarEdad(() => this.procesarEdad());
    }
    procesarEdad() {
        this.cPersona.solicitarEdad((persona) => {
            if (persona !== null && persona.edad > 1) {
                this.mPersonas.procesarPersona(persona);
                this.vPersonas.reportar({
                    persona: persona,
                    personas: this.mPersonas
                });
            }
        });
    }
}
//# sourceMappingURL=CI_cPersonas.js.map