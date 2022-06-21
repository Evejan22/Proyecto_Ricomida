const botonCorreo = document.querySelector('#enviar')
botonCorreo.addEventListener('click',()=> {
    const correo = prompt ('ingrese correo')
    console.log(correo)
    alert('tu correo fue enviado con exito')
})
const botonFavorito = document.querySelector ('#correo')
botonFavorito.addEventListener('click',()=> {
    alert('agregado a tu lista favoritos')
})
$(document).ready(function(){

    $(".toshow").on('click', function() {
        $(".tohide").toggle(300);
        return false;
    });

    $("#ingred").on('dblclick', function() {
        document.getElementById('ingred').style.color='red'
        return false;
    });

    $("#prep").on('dblclick', function() {
        document.getElementById('prep').style.color='red'
        return false;
    });
});