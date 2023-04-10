/*const animales = ["Fishing Cat", "Canadian Horse", "Canadian Eskimo Dog", "Brown Hyena",
    "Bowhead Whale", "Bornean Orang-utan", "Bearded Vulture", "Aye Aye", "African Wild Dog",
    "cheetah", "Tiger Rattlesnake", "Bengal Tiger", "Sea Turtle", "Polar Bear", "Giant Panda Bear", "cheetah"]            // ARRAY CON ANIMALES PARA CONSULTAR A LA API

*/


// SIN IMAGEN https://i.imgur.com/yXer6md.png

const arrayDeAnimales = [
    {
        name: "Fishing Cat",
        continent: "Asia",
        img: "https://i.imgur.com/HoaIuoo.png",
        id: 0,
    },
    {
        name: "Canadian Horse",
        continent: "North-America",
        img: "https://i.imgur.com/Am9Z8j2.png",
        id: 1,

    },
    {
        name: "Canadian Eskimo Dog",
        continent: "Asia",
        img: "https://i.imgur.com/M60YPq5.png",
        id: 2,

    },
    {
        name: "Brown Hyena",
        continent: "Africa",
        img: "https://i.imgur.com/qVPaYPF.png",
        id: 3,

    },
    {
        name: "Albatross",
        continent: "South-America",
        img: "https://i.imgur.com/FDSSqWe.png",
        id: 4,

    },
    {
        name: "Angora Goat",
        continent: "Oceania",
        img: "https://i.imgur.com/rG93WYa.png",
        id: 5,

    },
    {
        name: "Appenzeller Dog",
        continent: "Europe",
        img: "https://i.imgur.com/5kXIN0V.png",
        id: 6,

    },
    {
        name: "Mulga Snake",
        continent: "Oceania",
        img: "https://i.imgur.com/C4ippB7.png",
        id: 7,

    },
    {
        name: "Bornean Orang-utan",
        continent: "Asia",
        img: "https://i.imgur.com/rG93WYa.png",
        id: 8,

    },
    {
        name: "Bearded Vulture",
        continent: "Europe",
        img: "https://i.imgur.com/yXer6md.png",
        id: 9,

    },
    {
        name: "Aye Aye",
        continent: "Africa",
        img: "https://i.imgur.com/yXer6md.png",
        id: 10,

    },
    {
        name: "African Wild Dog",
        continent: "Africa",
        img: "https://i.imgur.com/oymH4Vm.png",
        id: 11,

    },
    {
        name: "Cheetah",
        continent: "Africa",
        img: "https://i.imgur.com/yXer6md.png",
        id: 12,

    },
    {
        name: "Tiger Rattlesnake",
        continent: "North-America",
        img: "https://i.imgur.com/yXer6md.png",
        id: 13,

    },
    {
        name: "Bengal Tiger",
        continent: "Asia",
        img: "https://i.imgur.com/rG93WYa.png",
        id: 14,

    },
    {
        name: "Sea Turtle",
        continent: "Central-America",
        img: "https://i.imgur.com/yXer6md.png",
        id: 15,

    },
    {
        name: "Polar Bear",
        continent: "Ocean",
        img: "https://i.imgur.com/yXer6md.png",
        id: 16,

    },
    {
        name: "Giant Panda Bear",
        continent: "Asia",
        img: "https://i.imgur.com/rG93WYa.png",
        id: 17,

    },
    {
        name: "Barn Owl",
        continent: "Oceania",
        img: "https://i.imgur.com/yXer6md.png",
        id: 18,

    },
    {
        name: "Bushmaster Snake",
        continent: "South-America",
        img: "https://i.imgur.com/yXer6md.png",
        id: 19,

    },



];

let animalLocations;
let animalName ;
let animalCharacteristicsPopulation;
let animalCharacteristicsLife;

function continentSelected() {

    let continente = document.getElementById("continentSelectedId").value;    // ME TRAIGO EL CONTINENTE SELECCIONADO

    const animalesEnContinente = arrayDeAnimales.filter(animal =>       // ME QUEDO CON LOS ANIMALES DE DETERMINADO CONTINENTE

        animal.continent == continente
    );



        
    for (let i = 5; i >= animalesEnContinente.length; i--) {            // OCULTO CUADROS NO NECESARIOS
        document.getElementById(`cuadroInformativoId${i+1}`).style.display = 'none'; 
    }

    // ME QUEDO CON LOS NOMBRES DE LOS ANIMALES DE ESE CONTINENTE

    for (let i = 0; i < animalesEnContinente.length; i++) {

        console.log(animalesEnContinente[i].name);

        showAnimalInfo(animalesEnContinente[i].name, animalesEnContinente[i].id);

        document.getElementById(`cuadroInformativoId${i+1}`).style.display = 'inline';  //MUESTRO CUADROS NECESARIOS

        

        setTimeout(() => {                                                       // ESPERO 2 SEGUNDOS A TENER RESPUESTA DE LA API, SINO PUEDE TIRAR ERROR

            console.log(animalCharacteristicsPopulation);
            
            
            document.getElementById(`fotoAnimal${i+1}`).src = arrayDeAnimales[animalesEnContinente[i].id].img;


            document.getElementById(`nombreAnimal${i+1}`).innerHTML = arrayDeAnimales[animalesEnContinente[i].id].name;
            
            document.getElementById(`infoAnimal${i+1}`).innerHTML = "Continente " + arrayDeAnimales[animalesEnContinente[i].id].continent + "<br>" + 
            "Poblacion estimada " + arrayDeAnimales[animalesEnContinente[i].id].poblacion + "<br>" + 
            "Esperanza de vida " + arrayDeAnimales[animalesEnContinente[i].id].vida;

        }, 2000);

    }

}




async function showAnimalInfo(name, id) {

    const respuestaShowAnimalInfo = await fetch(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Api-Key": "Kukygbvlj/Hfvv/HoF4ieQ==7bSQFvdCMcN8qvDz"
        }

    })
        .then(response => response.json())
        .then(json => {


            //animalName = json[0].name;                                                                  // ME GUARDO EL NOMBRE EN INGLES
            //animalLocations = json[0].locations;                                                        // ME GUARDO LA ZONA DEL ANIMAL EN INGLES
            arrayDeAnimales[id].poblacion = json[0].characteristics.estimated_population_size;        // ME GUARDO LA POBLACION EN INGLES
            arrayDeAnimales[id].vida = json[0].characteristics.lifespan;                               // ME GUARDO LA ESPERANZA DE VIDA EN INGLES


        })

}