export class Serie {
    id: number;
    nombre: string;
    plataforma: string;
    temporadas: number;
    descripcion: string;
    pagina: string;
    imagen: string;
  
    constructor(id: number, nombre: string, plataforma: string, temporadas: number, descripcion: string, pagina: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma  = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.pagina = pagina;
        this.imagen = imagen;
    }
  }
