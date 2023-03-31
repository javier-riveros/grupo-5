
const listarAnimales = () => {

    let animal = document.getElementById("idAnimal").value;    // ME TRAIGO EL NOMBRE DEL ANIMAL
    console.log(animal);
    let infoAnimal;

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/animals?name=' + animal,
        headers: { 'X-Api-Key': 'Kukygbvlj/Hfvv/HoF4ieQ==7bSQFvdCMcN8qvDz'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            
//            infoAnimal = JSON.parse(result);                    //  INTENTO DE PARSEAR EL JSON

        }, error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })



  
  document.getElementById("info").innerHTML = "hola che";          // ESCRIBO EL VALOR EN EL <p>
//  document.getElementById("info").innerHTML = infoAnimal.name;    // ESCRIBO EL VALOR EN EL <p>


};


