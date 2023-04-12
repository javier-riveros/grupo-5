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
      img: "https://i.imgur.com/SZsMby6.png",
      id: 8,
    },
    {
      name: "Bearded Vulture",
      continent: "Europe",
      img: "https://i.imgur.com/NmjHnpG.png",
      id: 9,
    },
    {
      name: "Aye Aye",
      continent: "Africa",
      img: "https://i.imgur.com/NiK57y6.png",
      id: 10,
    },
    {
      name: "African Wild Dog",
      continent: "Africa",
      img: "https://i.imgur.com/5h8XiUi.png",
      id: 11,
    },
    {
      name: "Cheetah",
      continent: "Africa",
      img: "https://i.imgur.com/ZxJMnCY.png",
      id: 12,
    },
    {
      name: "Tiger Rattlesnake",
      continent: "North-America",
      img: "https://i.imgur.com/zWVPD6X.png",
      id: 13,
    },
    {
      name: "Bengal Tiger",
      continent: "Asia",
      img: "https://i.imgur.com/ne4t4CE.png",
      id: 14,
    },
    {
      name: "Sea Turtle",
      continent: "Central-America",
      img: "https://i.imgur.com/29Orz6h.png",
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
      img: "https://i.imgur.com/Del2xg1.png",
      id: 17,
    },
    {
      name: "Barn Owl",
      continent: "Oceania",
      img: "https://i.imgur.com/CwD7FdS.png",
      id: 18,
    },
    {
      name: "Bushmaster Snake",
      continent: "South-America",
      img: "https://i.imgur.com/0QnX80V.png",
      id: 19,
    },
    
    {
      name: "Jaguar",
      continent: "North-America",
      img: "https://i.imgur.com/yrHqSHq.jpg",
      id: 20,
    },
  
    {
      name: "Bison",
      continent: "North-America",
      img: "https://i.imgur.com/sFwRHZY.jpg",
      id: 21,
    },
  
    {
      name: "Lynx",
      continent: "Europe",
      img: "https://i.imgur.com/otoZJjq.png",
      id: 22,
    },
    
    {
      name: "Yak",
      continent: "Asia",
      img: "https://i.imgur.com/Y85qa3k.jpg",
      id: 23,
    },
  
    {
      name: "Ibis",
      continent: "Asia",
      img: "https://i.imgur.com/aA5JW7e.jpg",
      id: 24,
    },
    
    {
      name: "Amazon River Dolphin (Pink Dolphin)",
      continent: "South-America",
      img: "https://i.imgur.com/8A8oAE4.jpg",
      id: 25,
    },
  
    {
      name: "Spider Monkey",
      continent: "South-America",
      img: "https://i.imgur.com/74ZesWu.jpg",
      id: 26,
    },
  
    {
      name: "Florida Panther",
      continent: "North-America",
      img: "https://i.imgur.com/Mv77kaL.jpg",
      id: 27,
    },
    
    {
      name: "Cape Lion",
      continent: "Africa",
      img: "https://i.imgur.com/3FqcQ0n.jpg",
      id: 28,
    },
  
    {
      name: "Hippopotamus",
      continent: "Africa",
      img: "https://i.imgur.com/fRJgd8o.jpg",
      id: 29,
    },
  
    {
      name: "African Bush Elephant",
      continent: "Africa",
      img: "https://i.imgur.com/HCZCvPx.jpg",
      id: 30,
    },
  ];
  
  
//let animalLocations;                                                        // NO SE USA MAS, DEJAR POR LAS DUDAS, SACAR MAS ADELANTE
//let animalName;                                                             // NO SE USA MAS, DEJAR POR LAS DUDAS, SACAR MAS ADELANTE
//let animalCharacteristicsPopulation;                                        // NO SE USA MAS, DEJAR POR LAS DUDAS, SACAR MAS ADELANTE
//let animalCharacteristicsLife;                                              // NO SE USA MAS, DEJAR POR LAS DUDAS, SACAR MAS ADELANTE

function continentSelected() {

    let continente = document.getElementById("continentSelectedId").value;    // ME TRAIGO EL CONTINENTE SELECCIONADO

    const animalesEnContinente = arrayDeAnimales.filter(animal =>             //
                                                                              //
        animal.continent == continente                                        // ME QUEDO CON LOS ANIMALES DE DETERMINADO CONTINENTE
    );                                                                        //



        
    //for (let i = 5; i >= animalesEnContinente.length; i--) {                                  // 
    //    document.getElementById(`cuadroInformativoId${i+1}`).style.display = 'none';          // OCULTO CUADROS NO NECESARIOS (V)
    //}                                                                                         //
    
    for (let i = 5; i >= animalesEnContinente.length; i--) {                                  // 
        $(`#cuadroInformativoId${i+1}`).hide();                                               // OCULTO CUADROS NO NECESARIOS CON JQUERY
    }                                                                                         //

   

    

    console.log(animalesEnContinente.length);                                                 // PARA DEBUG, DESPUES SE PUEDE SACAR


    for (let i = 0; i < animalesEnContinente.length; i++) {

        
        if (i ==  6)                            // SI i LLEGA A 6, INTERRUMPO EL BUCLE PORQUE NO HAY MAS CUADROS PARA PONER IMAGENES
          break;                                //

        showAnimalInfo(animalesEnContinente[i].name, animalesEnContinente[i].id);       // LLAMO A LA FUNCION QUE CONSULTA A LA API, LE PASO NOMBRE DEL ANIMAL Y ID PARA GUARDAR LOS DATOS EN LA POSICION CORRECTA DEL ARRAY

        //document.getElementById(`cuadroInformativoId${i+1}`).style.display = 'inline';  //MUESTRO CUADROS NECESARIOS
        $(`#cuadroInformativoId${i+1}`).show();                                           //MUESTRO CUADROS NECESARIOS CON JQUERY


        

        setTimeout(() => {                                                       // ESPERO 2 SEGUNDOS A TENER RESPUESTA DE LA API DE ANIMALES, SINO LOS CAMPOS ME QUEDAN "UNDEFINED"

       
            translate(arrayDeAnimales[animalesEnContinente[i].id].name).then((value) => { arrayDeAnimales[animalesEnContinente[i].id].nameEs = value; });                 // LLAMO A LA FUNCION CON INVOCA LA API DE TRADUCCION. TRADUZCO AL ESP EL NOMBRE
            translate(arrayDeAnimales[animalesEnContinente[i].id].continent).then((value) => { arrayDeAnimales[animalesEnContinente[i].id].continentEs = value; });       // LLAMO A LA FUNCION CON INVOCA LA API DE TRADUCCION. TRADUZCO AL ESP EL CONTINENTE
            translate(arrayDeAnimales[animalesEnContinente[i].id].population).then((value) => { arrayDeAnimales[animalesEnContinente[i].id].populationEs = value; });     // LLAMO A LA FUNCION CON INVOCA LA API DE TRADUCCION. TRADUZCO AL ESP LA POBLACION
            translate(arrayDeAnimales[animalesEnContinente[i].id].life).then((value) => { arrayDeAnimales[animalesEnContinente[i].id].lifeEs = value; });                 // LLAMO A LA FUNCION CON INVOCA LA API DE TRADUCCION. TRADUZCO AL ESP LA ESPERANZA DE VIDA
            translate(arrayDeAnimales[animalesEnContinente[i].id].gestacion).then((value) => { arrayDeAnimales[animalesEnContinente[i].id].gestacionEs = value; });       // LLAMO A LA FUNCION CON INVOCA LA API DE TRADUCCION. TRADUZCO AL ESP EL PERIODO DE GESTACION


                setTimeout(() => {                                                              // ESPERO 500ms SEGUNDOS A TENER RESPUESTA DE LA API TRANSLATE, SINO LOS CAMPOS ME QUEDAN "UNDEFINED"

                    //console.log(arrayDeAnimales[animalesEnContinente[i].id].nameEs);            // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR
                    //console.log(arrayDeAnimales[animalesEnContinente[i].id].continentEs);       // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR
                    //console.log(arrayDeAnimales[animalesEnContinente[i].id].populationEs);      // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR
                    //console.log(arrayDeAnimales[animalesEnContinente[i].id].lifeEs);            // VERIFICO QUE ESTE BIEN LA TRADUCCION, DESPUES SE PEUDE SACAR


                    document.getElementById(`fotoAnimal${i+1}`).src = arrayDeAnimales[animalesEnContinente[i].id].img;                                              // CARGO LA IMAGEN DEL ANIMAL EN EL CUADRO CORRESPONDIENTE
                    $(`#fotoAnimal${i+1}`).html(arrayDeAnimales[animalesEnContinente[i].id].img);

                    //document.getElementById(`nombreAnimal${i+1}`).innerHTML = arrayDeAnimales[animalesEnContinente[i].id].nameEs;                                   // PONGO EL NOMBRE DEL ANIMAL EN EL CUADRO CORRESPONDIENTE
                    $(`#nombreAnimal${i+1}`).html(arrayDeAnimales[animalesEnContinente[i].id].nameEs);                                                                // PONGO EL NOMBRE DEL ANIMAL EN EL CUADRO CORRESPONDIENTE CON JQUERY

                    document.getElementById(`infoAnimal${i+1}`).innerHTML = "Continente " + arrayDeAnimales[animalesEnContinente[i].id].continentEs + "<br>" +      //
                    "Poblacion estimada " + arrayDeAnimales[animalesEnContinente[i].id].populationEs + "<br>" +                                                     // ESCRIBO LA INFORMACION RELEVANTE DEL ANIMAL
                    "Esperanza de vida " + arrayDeAnimales[animalesEnContinente[i].id].lifeEs + "<br>" +                                                            //
                    "Periodo de Gestación " + arrayDeAnimales[animalesEnContinente[i].id].gestacionEs;                                                              //


                    


                }, 500);


        }, 2200);

    }

}


//////////// FUNCION PARA CONSULTAR INFORMACION DE ANIMALES CON API  ///////////////


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


            arrayDeAnimales[id].population = json[0].characteristics.estimated_population_size;           // ME GUARDO LA POBLACION EN INGLES
            arrayDeAnimales[id].life = json[0].characteristics.lifespan;                                  // ME GUARDO LA ESPERANZA DE VIDA EN INGLES
            arrayDeAnimales[id].gestacion = json[0].characteristics.gestation_period;                     // ME GUARDO EL PERIODO DE GESTACION


        })

}


//////////// FUNCION PARA TRADUCIR PALABRAS AL ESPAÑOL CON LA API DE GOOGLE ///////////////

async function translate(palabra) {

    let traduccion;

    const respuestaTranslate = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${palabra}&target=es&format=text&source=en&model=base&key=AIzaSyBDgFQLYvh072-BFnLMmBn4AZ1fhLC384I`, {
        method: "POST",
     

    })
        .then(response => response.json())
        .then(json => {

            traduccion = json.data.translations[0].translatedText;    // GUARDO EN TRADUCCION EL STRING EN ESP

        })

    return traduccion;  // DEVUELVO LA TRADUCCION

}
