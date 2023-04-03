
const animales= ["Fishing Cat", "Canadian Horse", "Canadian Eskimo Dog", "Brown Hyena", 
"Bowhead Whale", "Bornean Orang-utan", "Bearded Vulture","Aye Aye", "African Wild Dog", 
"cheetah", "Tiger Rattlesnake", "Bengal Tiger", "Sea Turtle", "Polar Bear", "Giant Panda Bear", "cheetah"]            // ARRAY CON ANIMALES PARA CONSULTAR A LA API


let animalAlAzar;

var delay=5000;                                                                     // DELAY DE CADA ITERACION   
var animalInfoID = setInterval(iterarAnimalInfo, delay);        

function iterarAnimalInfo(a) {

    animalAlAzar = Math.floor(Math.random() * animales.length+1);                  // GENERO UN NUMERO DE ANIMAL AL AZAR
    console.log("animal al azar " + animalAlAzar + " de " + animales.length);      // MUESTRO EN CONSOLA CUANTOS ANIMALES MOSTRE DE LA LISTA, PARA DEBUG DESPUES SE PUEDE SACAR
    
    showAnimalInfo(animalAlAzar);
  

}



const showAnimalInfo = (i) => {

    let animalLocations;
    let animalName;
    let animalCharacteristics;


    $.ajax({                                                                        // CONSULTO LA API
        method: 'GET',            
        url: 'https://api.api-ninjas.com/v1/animals?name=' + animales[i],
        headers: { 'X-Api-Key': 'Kukygbvlj/Hfvv/HoF4ieQ==7bSQFvdCMcN8qvDz'},
        contentType: 'application/json',
        success: function(result) {
           

            animalName = result[0].name;                                              // ME GUARDO EL NOMBRE
            animalLocations = result[0].locations;                                    // ME GUARDO LA ZONA DEL ANIMAL
            animalCharacteristics = result[0].characteristics;                        // ME GUARDO LAS CARACTERISTICAS


        }, error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })

setTimeout (() => {                                                                    // ESPERO 2 SEGUNDOS A TENER RESPUESTA DE LA API, SINO PUEDE TIRAR ERROR
 

    document.getElementById("infoAnimales").innerHTML = 
    "Solo quedan " + animalCharacteristics.estimated_population_size + " ejemplares de " + 
    animalName + " en " + animalLocations + " y su esperanza de vida es de " + 
    animalCharacteristics.lifespan + "<br><br>" + 
    "<h3> Salvémoslos!!!</h3>";                                                        // ESCRIBO LA INFO QUE QUEREMOS MOSTRAR EN  <p>            


}, 2000);
 

};


