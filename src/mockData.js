import {v4 as uuidv4} from "uuid"; 
const mockData = [
    {
        id: uuidv4(),
        title: "🙌 Por Hacer",
        tasks: [
            {
                id: uuidv4(),
                title: "Leer una Hora",
            },
            {
                id: uuidv4(),
                title: "Pasear al Perro",
            },
            {
                id: uuidv4(),
                title: "Regar las Plantas",
            },
            {
                id: uuidv4(),
                title: "Jugar al Ajedrez",
            },
            {
                id: uuidv4(),
                title: "Estudiar una Nueva Tecnología",
            }
        ]
    },
    {
        id: uuidv4(),
        title: "📑 En Progreso",
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar React",
            }
        ]
    },
    {
        id: uuidv4(),
        title: "👌 Completado",
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar Js",
            },
            {
                id: uuidv4(),
                title: "Crear videos con IA",
            },
            {
                id: uuidv4(),
                title: "Nadar",
            }
        ]
    },
]

export default mockData;