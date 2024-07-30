  var texto = "Desde pequeño siempre he sido un apasionado por la tecnologia, gracias a que se me hacia facil de entender es que pude estudiar bastante de manera autodidacta. En el año 2019 comence a estudiar TNS en Computacion e Informatica en el CFT de la Pontificia Universidad Catolica de Valparaiso, fue ahi donde me di cuenta que me encantaba el Desarollo Web. Actualmente me encuentro realizando un BootCamp de Desarollo FullStack JavaScript."

  var velocidad = 20;

  var textoAnimado = document.getElementById("texto-animado");

  function escribirTexto(texto, elemento) {
    var i = 0;
    var intervalo = setInterval(function() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
      }
    }, velocidad);
  }
 
function ocultarDiv(){
    document.getElementById('cmd').style.display = "none";
}

function mostrarDiv(){
    document.getElementById('texto-animado').style.display = "block";
}

function activarBoton(){
  var input1 = document.getElementById('validationServer01').value;
  var input2 = document.getElementById('validationServer01').value;
  var input3 = document.getElementById('validationServer01').value;
  var input4 = document.getElementById('validationServer01').value;

  if (input1 && input2 && input3 && input4) {
    document.getElementById('enviar').disabled = false;
} else {
    document.getElementById('enviar').disabled = true;
}
}

var elementos = document.getElementsByTagName('input');

enviar.onclick = (e)=> { 
  e.preventDefault();
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].value='';          
  }
}


const toastTrigger = document.getElementById('enviar')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}