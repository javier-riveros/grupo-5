
const animales= ["cheetah", "Bengal Tiger", "Sea Turtle", "Polar Bear", "Giant Panda Bear", "cheetah"]            // LISTDO DE ANIMALES A MOSTRAR


var animalInfoID = setInterval(iterarAnimalInfo, 5000);
let x=0;

function iterarAnimalInfo(a) {


    console.log("animal " + x + " de " + animales.length);      // MUESTRO EN CONSOLA CUANTOS ANIMALES MOSTRE DE LA LISTA

    if (x < animales.length){
     
        showAnimalInfo(x);
        x++;


    }else{

        clearInterval (animalInfoID);
    }
    
}



const showAnimalInfo = (i) => {

    let animalLocations;
    let animalName;
    let animalCharacteristics;


    $.ajax({                                                              // CONSULTO LA API
        method: 'GET',            
        url: 'https://api.api-ninjas.com/v1/animals?name=' + animales[i],
        headers: { 'X-Api-Key': 'Kukygbvlj/Hfvv/HoF4ieQ==7bSQFvdCMcN8qvDz'},
        contentType: 'application/json',
        success: function(result) {
           

            animalName=result[0].name;
            animalLocations=result[0].locations;
            animalCharacteristics=result[0].characteristics;


        }, error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })

setTimeout (() => {                         // espero 2 segundos a tener la respuesta de la API
 
 //   console.log (animalName + animalLocations + animalCharacteristics.age_of_weaning);

document.getElementById("info").innerHTML = 
"Animal: " + animalName + "<br>" + 
"Locacion: " + animalLocations + "<br>" + 
"Presa: " + animalCharacteristics.prey + "<br>" +
"Comportamiento de grupo: " + animalCharacteristics.group_behavior + "<br>" +
"Ejemplares estimados: " + animalCharacteristics.estimated_population_size + "<br>" +
"Periodo de gestacion: " + animalCharacteristics.gestation_period + "<br>" +    // ESCRIBO EL VALOR EN EL <p>
"Esperanza de vida: " + animalCharacteristics.lifespan + "<br>";

}, 2000);
 

};


