//https://rickharrison.github.io/validate.js/


window.addEventListener('load', () => {
    let validadorFormulario = new FormValidator('form1', [{             // EL form1 ES EL NAME DEL FORM
        name: 'nombre',                                                 // NAME DEL INPUT
        display: 'Nombre',                                              // COMO VA A MOSTRAR EL NOMBRE DEL CAMPO ERRONEO
        rules: 'required|min_length[3]|alpha'                                 // REGLAS DE VALIDACION: REQUERIDO Y 5 CARACTERES MINIMOS
    }, {
        name: 'apellido',
        display: 'apellido',
        rules: 'required|min_length[3]|alpha'
        }, {
        name: 'correo',
        display: 'Correo',
        rules: 'required|valid_email'
    }, {
        name: 'cuit',
        display: 'CUIT',
        rules: 'required|exact_length[13]|alpha_dash'
    }], function(errores, evento) {                                                 //
        if (errores.length> 0) {                                                    //
            let mensaje = '';                                                       //
            errores.forEach(function(campo, indice, arreglo) {                      // NO SE TOCA
                mensaje += `${campo.message} <br/>`;                                //
            });                                                                     //

            document.querySelector('#resultadoValidacion').innerHTML = mensaje;     // DONDE VA A ESCRIBIR LOS MENSAJES DE ERROR           }
        }
    })
    
});





window.addEventListener('load', () => {
    let validadorFormulario = new FormValidator('form3', [{             
        name: 'cardNumber',                                             
        display: 'Numero de Tarjeta',                                  
        rules: 'required|valid_credit_card|'                           
    }, {
        name: 'cardName',
        display: 'Nombre del titular',
        rules: 'required|valid_base64|min_length[3]'
    }, {
        name: 'vencimiento',
        display: 'Vencimiento',
        rules: 'required|exact_length[5]|valid_base64'
    }, {
        name: 'ccv',
        display: 'CCV',
        rules: 'required|exact_length[3]|is_natural_no_zero'
    }], function(errores, evento) {                                                 //
        if (errores.length> 0) {                                                    //
            let mensaje = '';                                                       //
            errores.forEach(function(campo, indice, arreglo) {                      // NO SE TOCA
                mensaje += `${campo.message} <br/>`;                                //
            });                                                                     //

            document.querySelector('#resultadoValidacion').innerHTML = mensaje;     // DONDE VA A ESCRIBIR LOS MENSAJES DE ERROR           }
        }
    })
    
});

