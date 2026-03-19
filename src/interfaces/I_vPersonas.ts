import CI_mPersona from "../models/CI_mPersona.js";
import CI_mPersonas from "../models/CI_mPersonas.js";

export interface I_vPersonas {
    onProcesarEdad(callback: () => void): void;
    reportar(data: { persona: CI_mPersona; personas: CI_mPersonas }): void;
}