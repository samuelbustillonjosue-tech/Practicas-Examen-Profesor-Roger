// 1. Enum EstadoTarea
enum EstadoTarea {
    PENDIENTE = "PENDIENTE",
    EN_PROGRESO = "EN_PROGRESO",
    COMPLETADA = "COMPLETADA"
}

// 2. Interface Tarea
interface Tarea {
    id: number;
    descripcion: string;
    estado: EstadoTarea;
    fechaLimite?: string;
}

// 3. Arreglo de tareas (mínimo 5)
const tareas: Tarea[] = [
    {
        id: 1,
        descripcion: "Estudiar TypeScript",
        estado: EstadoTarea.PENDIENTE,
        fechaLimite: "2026-11-10"
    },
    {
        id: 2,
        descripcion: "Practicar interfaces",
        estado: EstadoTarea.EN_PROGRESO,
        fechaLimite: "2026-11-11"
    },
    {
        id: 3,
        descripcion: "Terminar ejercicio de coordenadas",
        estado: EstadoTarea.COMPLETADA
    },
    {
        id: 4,
        descripcion: "Repasar enums",
        estado: EstadoTarea.PENDIENTE
    },
    {
        id: 5,
        descripcion: "Subir práctica a GitHub",
        estado: EstadoTarea.COMPLETADA,
        fechaLimite: "2026-11-12"
    }
];

// 4. Función para filtrar tareas por estado
function filtrarTareas(tareas: Tarea[], estado: EstadoTarea): Tarea[] {
    return tareas.filter(tarea => tarea.estado === estado);
}

// 5. Mostrar cantidad de tareas por estado
const tareasPendientes = filtrarTareas(tareas, EstadoTarea.PENDIENTE);
const tareasEnProgreso = filtrarTareas(tareas, EstadoTarea.EN_PROGRESO);
const tareasCompletadas = filtrarTareas(tareas, EstadoTarea.COMPLETADA);

console.log("Número de tareas pendientes:", tareasPendientes.length);
console.log("Número de tareas en progreso:", tareasEnProgreso.length);
console.log("Número de tareas completadas:", tareasCompletadas.length);