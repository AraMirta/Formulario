const formulario= document.querySelector('#form');

formulario.addEventListener("input", function(event){

    let target = event.target;
    
    if(target.id === "nombre") {
        var nombrePattern = /^[a-zA-Z]+$/;
        if(!nombrePattern.test(target.value)){
            target.setCustomValidity("El nombre debe contener sólo letras.");
        } else{
            target.setCustomValidity("");
        }
    } else if(target.id ==="apellido"){
        var apellidoPattern=  /^[a-zA-Z]+$/;
        if(!apellidoPattern.test(target.value)){
            target.setCustomValidity("El apellido debe contener sólo letras.");
        }else{
            target.setCustomValidity("");
        }
    }else if(target.id==="dni"){
        var dniPattern = /^[0-9]{8}$/;t 
        if (!dniPattern.test(target.value)){
            target.setCustomValidity("El DNI debe tener 8 dígitos numéricos.")
        } else{
            target.setCustomValidity("");
        }
    }else if(target.id ==="telefono"){
        var telefonoPattern= /^[0-9]{9,10}$/;
        if(!telefonoPattern.test(target.value)){
            target.setCustomValidity("El teléfono debe contener 9 o 10 dígitos númericos")
        }else{
            target.setCustomValidity("");
        }
    }
});