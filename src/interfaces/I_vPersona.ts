export interface I_vPersona {
    get edad(): number;
    get nombre(): string;
    get peso(): number;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}