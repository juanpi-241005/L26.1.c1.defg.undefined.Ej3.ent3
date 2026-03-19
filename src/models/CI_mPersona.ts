export default class CI_mPersona {
    private _edad: number = 0;
    private _nombre: string = "";  
    private _peso: number = 0; // ← NUEVO

    constructor(edad: number, nombre: string = "", peso: number = 0) {  // ← AHORA RECIBE PESO
        this.edad = edad;
        this._nombre = nombre;
        this._peso = peso;
    }

    set edad(e: number) { this._edad = +e; }
    get edad(): number { return this._edad; }
    
    set nombre(n: string) { this._nombre = n; }  
    get nombre(): string { return this._nombre; } 
    
    set peso(p:number) { this._peso = +p; }
    get peso(): number { return this._peso; }
}