const animales = ["Fishing Cat", "Canadian Horse", "Canadian Eskimo Dog", "Brown Hyena",
    "Bowhead Whale", "Bornean Orang-utan", "Bearded Vulture", "Aye Aye", "African Wild Dog",
    "cheetah", "Tiger Rattlesnake", "Bengal Tiger", "Sea Turtle", "Polar Bear", "Giant Panda Bear", "cheetah"]            // ARRAY CON ANIMALES PARA CONSULTAR A LA API


let animalNameEs;
let animalLocationsEs;
let animalCharacteristicsPopulationES;
let animalCharacteristicsLifeEs;

let animalAlAzar;

///////// GENERO UN INTERVALO QUE INVOCA A LA FUNCION QUE GENERA LOS ANIMALES AL AZAR    /////////////
var delay = 7000;                                                                     // DELAY DE CADA ITERACION
var animalInfoID = setInterval(iterarAnimalInfo, delay);



//////////// FUNCION QUE GENERA UN ANIMAL AL AZAR EN BASE A LA CANTIDAD DE ANIMALES QUE HAY EN EL ARRAY ANIMALES ///////////////

function iterarAnimalInfo(a) {

    animalAlAzar = Math.floor(Math.random() * animales.length + 1);                 // GENERO UN NUMERO DE ANIMAL AL AZAR
    console.log("animal al azar " + animalAlAzar + " de " + animales.length);       // MUESTRO EN CONSOLA CUANTOS ANIMALES MOSTRE DE LA LISTA, PARA DEBUG DESPUES SE PUEDE SACAR

    showAnimalInfo(animalAlAzar);                                                   // INVOCO A LA FUNCION ShowAnimalInfo


}




//////////// FUNCION QUE EN BASE A LA POSICION DEL ARRAY CONSULTA UN AMINAL EN LA API Y MUESTRA LA INFO EN EL HTML ///////////////


async function showAnimalInfo(i) {

    let animalLocations;
    let animalName;
    let animalCharacteristicsPopulation;
    let animalCharacteristicsLife;


    const respuestaShowAnimalInfo = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animales[i]}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Api-Key": "Kukygbvlj/Hfvv/HoF4ieQ==7bSQFvdCMcN8qvDz"
        }

    })
        .then(response => response.json())
        .then(json => {


            animalName = json[0].name;                                                                  // ME GUARDO EL NOMBRE EN INGLES
            animalLocations = json[0].locations;                                                        // ME GUARDO LA ZONA DEL ANIMAL EN INGLES
            animalCharacteristicsPopulation = json[0].characteristics.estimated_population_size;        // ME GUARDO LA POBLACION EN INGLES
            animalCharacteristicsLife = json[0].characteristics.lifespan;                               // ME GUARDO LA ESPERANZA DE VIDA EN INGLES


        })


    setTimeout(() => {                                                       // ESPERO 2 SEGUNDOS A TENER RESPUESTA DE LA API, SINO PUEDE TIRAR ERROR


        translate(animalName).then((value) => { animalNameEs = value; });                                               // TRADUZCO AL ESP EL NOMBRE
        translate(animalLocations).then((value) => { animalLocationsEs = value; });                                     // TRADUZCO AL ESP LA LOCACION 
        translate(animalCharacteristicsPopulation).then((value) => { animalCharacteristicsPopulationES = value; });     // TRADUZCO AL ESP LA POBLACION
        translate(animalCharacteristicsLife).then((value) => { animalCharacteristicsLifeEs = value; });                 // TRADUZCO AL ESP LA ESPERANZA DE VIDA


        console.log(animalNameEs);                           // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR
        console.log(animalLocationsEs);                      // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR
        console.log(animalCharacteristicsPopulationES);      // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR
        console.log(animalCharacteristicsLifeEs);            // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR




        document.getElementById("infoAnimales").innerHTML =
            "Solo quedan " + animalCharacteristicsPopulationES + " ejemplares de " +
            animalNameEs + " en " + animalLocationsEs + " y su esperanza de vida es de " +
            animalCharacteristicsLifeEs + "<br><br>" +
            "<h3> Salvémoslos!!!</h3>";                                                        // ESCRIBO LA INFO QUE QUEREMOS MOSTRAR EN <p> EN ESP 


    }, 2000);

}

//////////// FUNCION PARA TRADUCIR PALABRAS AL ESPAÑOL CON LA API DE GOOGLE ///////////////

async function translate(palabra) {

    let traduccion;

    const respuestaTranslate = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${palabra}&target=es&format=text&source=en&model=base&key=AIzaSyBDgFQLYvh072-BFnLMmBn4AZ1fhLC384I`, {
        method: "POST",
        /*headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Api-Key": "AIzaSyBDgFQLYvh072-BFnLMmBn4AZ1fhLC384I"
        }*/

    })
        .then(response => response.json())
        .then(json => {

            traduccion = json.data.translations[0].translatedText;    // GUARDO EN TRADUCCION EL STRING EN ESP


        })

    return traduccion;  // DEVUELVO LA TRADUCCION

}
