var arrayFechaHora = [],
    arrayEvento = [];
    
if(localStorage.getItem('evento')!=null) {
    arrayFechaHora = JSON.parse(localStorage.getItem('fecha'));
    arrayEvento = JSON.parse(localStorage.getItem('evento'));
}

var guardar = document.querySelector('#guardar');

guardar.addEventListener('click', evento);

function evento(){
    var dateFecha2 = document.querySelector('#fecha').value;
    var dateFecha = dateFecha2.replace("T"," ").toString();
        
        
        stringEvento = document.querySelector('#evento').value;     
        
    arrayFechaHora.push(dateFecha);
    arrayEvento.push(stringEvento);
    
    localStorage.setItem('fecha', JSON.stringify(arrayFechaHora));
    localStorage.setItem('evento', JSON.stringify(arrayEvento));
  
    ingresarDatos();
}
/* navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
            if (navigator.vibrate) {
                navigator.vibrate([500000]);
            } 
            else {alert('Su navegador no soporta la funcion de vibrar.')} */