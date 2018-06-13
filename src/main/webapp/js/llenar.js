ingresarDatos();
function ingresarDatos(){
    var tbody = document.querySelector('#tabla tbody');
    tbody.innerHTML = '';    
    var arrayFechaHora = JSON.parse(localStorage.getItem('fecha')),
        arrayEvento = JSON.parse(localStorage.getItem('evento'));
       
    
    var registros = arrayEvento.length;
    
    for(var i=0; i<registros; i++){
        
        var fila = document.createElement ('tr');
        
        var celfecha = document.createElement('td'),
            celevento = document.createElement('td');
            
            
        var nTextoFecha = document.createTextNode(arrayFechaHora[i]),
            nTextoEvento = document.createTextNode(arrayEvento[i]);
        
        
        celfecha.appendChild(nTextoFecha);
        celevento.appendChild(nTextoEvento);
    
        
        fila.appendChild(celfecha);
        fila.appendChild(celevento);
      
        
        tbody.appendChild(fila);     
     
    }   
    
}