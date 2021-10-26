(function () {
    AOS.init();
}());

window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const tel = document.getElementById('tel')
    const mensaje = document.getElementById('mensaje')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const telValor = tel.value.trim()
        const mensajeValor = mensaje.value.trim();
     
        if(!nombreValor){
           validaFalla(nombre, 'Campo vacío')
        }else{
            validaOk(nombre)
        }

        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
        if(!telValor) {
             validaFalla(tel, 'Campo vacío')
         } else if (!validaTel(telValor)) {             
             validaFalla(tel, 'Debe tener formato xx-xxxx-xxxx')
         } else {
             validaOk(tel)
         }

         if(!mensajeValor){
             validaFalla(mensaje, 'Campo vacío')
         } else if(mensajeValor.length < 50) {
             validaFalla(mensaje, 'Debe tener más de 50 caracteres')
         } else {
             validaOk(mensaje)
         }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
    const validaTel = (tel) => {
        return /^(\()?\d{2}(\))?(-|\s)?\d{4}(-|\s)\d{4}$/.test(tel);        
    }
})