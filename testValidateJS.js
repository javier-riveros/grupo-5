//https://rickharrison.github.io/validate.js/


window.addEventListener('load', () => {
    let validadorFormulario = new FormValidator('form1', [{             // EL form1 ES EL NAME DEL FORM
        name: 'nombre',                                                 // NAME DEL INPUT
        display: 'Nombre',                                              // COMO VA A MOSTRAR EL NOMBRE DEL CAMPO ERRONEO
        rules: 'required|min_length[5]'                                 // REGLAS DE VALIDACION: REQUERIDO Y 5 CARACTERES MINIMOS
    }, {
        name: 'correo',
        display: 'Correo',
        rules: 'required|valid_email'
    }, {
        name: 'url',
        display: 'Sitio Web',
        rules: 'min_length[5]'
    }, {
        name: 'Tarjeta',
        display: 'min length',
        rules: 'required|valid_credit_card'
    }], function(errores, evento) {                                                 //
        if (errores.length> 0) {                                                    //
            let mensaje = '';                                                       //
                                                                                    // NO SE TOCA
            errores.forEach(function(campo, indice, arreglo) {                      //
                mensaje += `${campo.message} <br/>`;                                //
            });                                                                     //

            document.querySelector('#resultadoValidacion').innerHTML = mensaje;     // DONDE VA A ESCRIBIR LOS MENSAJES DE ERROR           }
    })
    
});