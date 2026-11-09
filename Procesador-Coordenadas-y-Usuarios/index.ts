// 1. Tipo de unión
type Identificador = string | number;

// 2. Interfaz Usuario
interface Usuario {
    id: Identificador;
    nombre: string;
    edad: number;
    fechaNacimiento?: string;
}

// 3. Función que devuelve una tupla
function obtenerUbicacion(): [number, number] {
    return [14.0723, -87.1921];
}

// 4. Crear objeto usuario
const usuario: Usuario = {
    id: 1,
    nombre: "Samuel",
    edad: 21,
    fechaNacimiento: "2005-05-01"
};

// Mostrar datos del usuario
console.log("Datos del usuario:");
console.log(usuario);

// 5. Desestructuración de la tupla
const [latitud, longitud] = obtenerUbicacion();

// Mostrar coordenadas
console.log("Ubicación:");
console.log("Latitud:", latitud);
console.log("Longitud:", longitud);