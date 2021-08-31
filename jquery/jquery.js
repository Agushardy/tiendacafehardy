/* ESTE ES EL FORMULARIO QUE VA
                    <form id="template-form">
                    <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Numeric Password</label>
                    <input type="numbers" class="form-control" id="274012">
                    </div>
                    <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Enviar notificaciones</label>
                    </div>
                    <button type="submit" class="btn btn-dark">Iniciar cuenta</button>
                    </form>
*/

//Formulario - Crear cuenta
$('form').prepend(` <form id="template-form">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <input type="numbers" class="form-control" id="274012">
                    <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Enviar notificaciones</label>
                    </div>
                    <button id="btn1" type="submit" class="btn btn-dark">Iniciar cuenta</button>
                    </form>
                `);

$("#template-form").submit(function (e) {
    e.preventDefault();
    let datos = $ (e.target).children()
    //email
    console.log(datos[0].value);
    //password
    console.log(datos[1].value);
});


//Efecto con jQuery
$('h6').prepend('<h6 class="avisoCompra">Aguardá unos segundos..</h6>');

$('.avisoCompra').css('color', 'rgb(121, 117, 113)')
.slideUp(2000)
.delay(2000)
