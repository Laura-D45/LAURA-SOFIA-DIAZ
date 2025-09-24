// sistema de cajero automatico 


// Validaciones del registro 
// ingreso con nombre 
let nombreUser = prompt("Por favor ingrese su nombre completo:");
// bienvenida con el nombre de registro del usuario
function showWelcome(){
    let bienvenida = document.getElementById('welcome');
    // prueba para diferenciar por genero el nombre y personalizar el mensaje de bievenida
    const nombresFemeninos = ['Maria', 'Laura', 'Sofia', 'Ana', 'Paula', 'Carla', 'Josefa', 'Lucia', 'Valentina', 'Camila', 'Gabriela', 'Andrea', 'Isabel', 'Patricia', 'Sandra', 'Rosa', 'Carmen', 'Josefina'];
    const nombresMasculinos = ['Carlos', 'Juan', 'Jose', 'Luis', 'Pedro', 'Miguel', 'Jorge', 'Andres', 'David', 'Manuel', 'Francisco', 'Antonio', 'Alejandro', 'Fernando', 'Ricardo', 'Roberto', 'Eduardo', 'Raul', 'Mateo'];
    // Para que valide la personalizacion del mensaje de bienvenida por el primer nombre 
    let primerNombre = nombreUser.split(' ')[0].trim();
    // Valida si el primer nombre esta en la lista de nombres femeninos o masculinos 
    if (nombresFemeninos.includes(primerNombre)) {
        bienvenida.textContent = `Bienvenida ${nombreUser}`;
    } else if (nombresMasculinos.includes(primerNombre)) {
        bienvenida.textContent = `Bienvenido ${nombreUser}`;
    } 
    // en caso de que no coincida con algunos de los nombres lo mostrara de forma neutral
    else {
        bienvenida.textContent = `Bienvenid@ ${nombreUser} `;
    }
}
// llamar a la funcion de bienvenida
showWelcome();


// LOGICA DE NEGOCIO

// Variable de manejo de saldo
let  saldoUsuario = 0;

// funcion agregar dinero al saldo actual
function depositarDinero(){
    let valorDeposito = document.getElementById('depositar').value;
    // valor maximo a depositar 100 millones
    let totalMaximo = 100000000;

    // validacion de que el valor ingresado sea un numero y no sea ni menor o igual a 0
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        mostrarMensaje('Por favor ingrese un número válido para depositar.', 'danger');
        return;
    }
    // pasar el valor a tipo float, para manejo de decimales
    valorDeposito = parseFloat(valorDeposito);
    // validar que el saldo total con el deposito no supero el total maximo 
    if (saldoUsuario + valorDeposito > totalMaximo) {
        mostrarMensaje(`No puede tener más de $${totalMaximo} en la cuenta. Su saldo actual es $${saldoUsuario}.`, 'danger');
        return;
    }
    // sumar el saldo actual con el valor a depositar
    saldoUsuario += valorDeposito;
    // toFixed > convierte un numero a string y como se maneja decimales indicamos que solo muestre 2 
    // modifica el saldo inicial 
    document.getElementById('saldo').innerText = saldoUsuario.toFixed(2);
    // indica al usuario el mensaje de exito y de cuanto es su nuevo saldo
    mostrarMensaje(`Depósito exitoso. Su nuevo saldo es $${saldoUsuario.toFixed(2)}`, 'success');
    // limpiar el input del deposito 
    document.getElementById('depositar').value = '';
}

// funcion de retirar dinero del saldo actual
function retirar(){
    // se trae el valor de entrada a retirar
    let valorRetiro = document.getElementById('retirar').value;
    if (isNaN(valorRetiro) || valorRetiro <= 0) {
        mostrarMensaje('Por favor ingrese un número válido para retirar.', 'danger');
        return;
    }
    valorRetiro = parseFloat(valorRetiro);
    // validacion: si el saldo es menor a la cantidad que se va retirar = no permitir 
    if (valorRetiro > saldoUsuario) {
        mostrarMensaje('No cuenta con la cantidad de dinero, no puede hacer el retiro.', 'danger');
        return;
    }
    // descontar la cantidad del retiro al saldo actual 
    saldoUsuario -= valorRetiro;
    // imprimir el valor 
    document.getElementById('saldo').innerText = saldoUsuario.toFixed(2);
    mostrarMensaje(`Retiro exitoso. Su nuevo saldo es $${saldoUsuario.toFixed(2)}`, 'success');
    document.getElementById('retirar').value = '';
}

// funcion consultar saldo 
function consultarMonto(){
    // imprimir el saldo actual
    document.getElementById('saldo').innerText = saldoUsuario.toFixed(2);
    mostrarMensaje(`Su saldo actual es $${saldoUsuario.toFixed(2)}`, 'info');
}

// termina la ejecucion del programa, mostrar un mensaje de despedida
function salir(){
    alert(`Gracias por usar el sistema bancario. ¡Nos vemos pronto ${nombreUser}!`);
    saldoUsuario = 0;
    document.getElementById('saldo').innerText = '0.00';
}

// funcion mostrarMensajes se tomaran dos parametros (la descripcion del mensaje y el tipo de mensaje (error - exito)) 
function mostrarMensaje(mensaje, tipo) {
    // se toma el valor del elemento html donde se mostrara el mensaje 
    let notificacion = document.getElementById('mensaje');
    notificacion.textContent = mensaje;
    notificacion.className = tipo;
    notificacion.style.display = 'block';
    // Colores según tipo
    if (tipo === 'danger') {
        notificacion.style.background = '#ffcccc';
        notificacion.style.color = '#a00';
        // tiempo de muestra del mensaje
        setTimeout(() => {
            notificacion.style.display = 'none';
        }, 2000);

    } else if (tipo === 'success') {
        notificacion.style.background = '#ccffcc';
        notificacion.style.color = '#080';
    } else {
        notificacion.style.background = '#e0e0e0';
        notificacion.style.color = '#333';
    }
    // estilos del mensaje 
    notificacion.style.position = 'static';
    notificacion.style.top = '';
    notificacion.style.right = '';
    notificacion.style.padding = '12px 24px';
    notificacion.style.borderRadius = '8px';
    notificacion.style.zIndex = '1000';
}
