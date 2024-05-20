export class Calendario {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    inicio: string;  // You might want to use string to handle time in HH:mm:ss format
    fin: string;     // You might want to use string to handle time in HH:mm:ss format

    constructor(id: number, titulo: string, descripcion: string, fecha: Date, inicio: string, fin: string) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.inicio = inicio;
        this.fin = fin;
    }
}
