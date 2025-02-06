let listaAmigos = [];

function agregarAmigo(){
    let nombreLista = document.getElementById('amigo');  
    if (nombreLista.value) {
        listaAmigos.push(nombreLista.value);  
        mostrarAmigos();  
        limpiarBarra();  
        console.log(listaAmigos);
    } else {
        alert('Por favor ingrese un nombre');
    }
}

function mostrarAmigos(){
    let listaHTML = '';  
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML += `<li>${listaAmigos[i]}</li>`;  
    }
    document.querySelector('#listaAmigos').innerHTML = listaHTML; 
}

function limpiarBarra(){
    document.getElementById('amigo').value = '';  
}

function sortearAmigo(){
    if (listaAmigos.length > 0) {
        let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        alert(`¡El amigo secreto es: ${ganador}!`);
        document.querySelector('#resultado').innerHTML = `¡El amigo secreto es: ${ganador}!`;
    } else {
        alert('No hay amigos en la lista para el sorteo.');
    }
}
