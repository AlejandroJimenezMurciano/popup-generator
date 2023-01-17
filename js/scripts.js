//Notas:
//A efectos prácticos innerHTML vacio es lo mismo que poner textContent vacío (todo lo que tenga dentro lo borra)

//1.Creo las constantes para poder utilizarlas
const buttonElement = document.getElementById('button');
const popupElement = document.getElementById('popup');
const rootStyles = document.documentElement.style;

//2.Creo la funcion del popup con el mensaje y el timer
const appearPopup = (message, timer) => {
    //3.vaciar el contenido de popupElement
    popupElement.innerHTML = '';
    //4.Creo a partir de javascript el mensaje del popup (es lo mismo que crear una 'p' en html)
    const popupMessage = document.createElement('p');
    popupMessage.textContent = message;
    //5.le añado la clase ya creada en css para q aparezca
    popupElement.classList.add('popup--show');
    //6.meto el popup message desde javascript como hijo del div popup de html
    popupElement.append(popupMessage);
    //7.Dar el tiempo al timer como una variable para poder cambiarlo
    let counterTime = 100;
    //10.Para que aparezca la barra alineada con el tiempo y vaya disminuyendo
    const intervalId = setInterval(() => {
        counterTime--;
        if(counterTime <=0){
            clearInterval(intervalId);
        }
        rootStyles.setProperty('--popup-bar-width', counterTime + '%');
    }, timer / 100);

    //8.Quitar el popup y limpiarlo para q no se ralle la pagina
    const timeoutId = setTimeout(() => {
        popupElement.classList.remove('popup--show');
        clearTimeout(timeoutId);
    }, timer);
}

//9.Hago la accion de que aparezca el popup cuando haga click en el botón
buttonElement.addEventListener('click', () => {
    const message = 'Mensaje de prueba';
    if(popupElement.classList.contains('popup--show')) return; appearPopup(message, 4000)
});


