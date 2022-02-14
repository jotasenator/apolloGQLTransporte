const GuaguasList = [
    {
        id:1,
        number:125,
        brand:"Girón",
        model:"II",
        capacity:100,
        drivers:[
            "José G Martínez",
            "Irán Suárez"
        ],
        terminal:"10 de octubre"        
    },
    {
        id:2,
        number:1028,
        brand:"Mercedez Benz",
        model:"Hammer",
        capacity:300,
        drivers:[
            "Armando P Calderón",
            "Eloy Duarte"
        ],
        terminal:"San Agustín" 
    },
    {
        id:3,
        number:1215,
        brand:"Girón",
        model:"III",
        capacity:100,
        drivers:[
            "Eriberto Medina",
            "Josefa Hernádez"        
        ],
        terminal:"Alamar"         
    },
    {
        id:4,
        number:4225,
        brand:"Ikarus",
        model:"Celestial",
        capacity:210,
        drivers:[
            "José G Wenseslao",
            "Antonio Inmaculado"
        ],
        terminal:"Plaza de la Revolución"   
        
    },
    {
        id:5,
        number:25,
        brand:"Girón",
        model:"IV",
        capacity:100,
        drivers:[
            "José G Martínez",
            "Irán Suárez"
        ],
        terminal:"10 de octubre"   
        
    }     
];

const ChoferList = [
    {
        id:1,
        name:"José G Martínez",
        experience_time:5,
        shift:"diurno",        
    },
    {
        id:2,
        name:"Irán Suárez",
        experience_time:15,
        shift:"nocturno",        
    },
    {
        id:3,
        name:"Armando P Calderón",
        experience_time:7,
        shift:"diurno",        
    },
    {
        id:4,
        name:"Eloy Duarte",
        experience_time:25,
        shift:"nocturno",        
    },
    {
        id:5,
        name:"Eriberto Medina",
        experience_time:10,
        shift:"diurno",        
    },
    {
        id:6,
        name:"Josefa Hernádez",
        experience_time:5,
        shift:"nocturno",        
    },
    {
        id:7,
        name:"José G Wenseslao",
        experience_time:15,
        shift:"diurno",        
    },
    {
        id:8,
        name:"Antonio Inmaculado",
        experience_time:15,
        shift:"nocturno",        
    },
]



module.exports = {GuaguasList, ChoferList};