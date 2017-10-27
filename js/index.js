var productos = [
{nombreYMarca: 'Televisor Samsung', caracteristicas: '40 pulgadas', precio: '500 €', parrafoDescripcion: 'El televisor inteligente 40J5200 de Samsung se ajusta a tu estilo de vida. ¡Disfruta de todas las prestaciones más Smart!', url: 'images/Televisor01.jpg'},
{nombreYMarca: 'Televisor Sony', caracteristicas: '65 pulgadas', precio: '1499 €', parrafoDescripcion: '¡Disfruta de una experiencia visual a lo grande con la TV LED KD65XD7505BAEP de 65’’ de Sony.', url: 'images/Televisor02.jpg'},
{nombreYMarca: 'Televisor LG', caracteristicas: '43 pulgadas', precio: '890 €', parrafoDescripcion: '¿La calidad de las imágenes de tu televisor deja mucho que desear? Con el televisor 43LJ5150.AEU de 43 pulgadas Full HD disfrutarás de unas prestaciones únicas que te darán como resultado unos colores que saldrán de tu televisor. No querrás despegarte de ella.', url: 'images/Televisor03.jpg'},
{nombreYMarca: 'Home Cinema Pioner', caracteristicas: '600 W', precio: '316 €', parrafoDescripcion: 'Un sonido de calidad con una potencia de 600W, que integra decodificadores Dolby Digital, Dolby Pro Logic y DTS. Llena la habitación con un sonido espectacular que te transporta al centro de la acción, gracias a los efectos que te llegarán desde todos los rincones.', url: 'images/HomeCinema01.jpg'},
{nombreYMarca: 'Home Cinema Yamaha', caracteristicas: '500 W', precio: '599 €', parrafoDescripcion: 'Está compuesto por un receptor A/V y 5 altavoces con una potencia máxima por cubo de 100W. Además de sonido HiFi, es compatible con señales 4K Ultra HD, de manera que si eres fan de las películas en 4K y dispones de un reproductor y un televisor 4K, el sonido completará la experiencia con máxima calidad sonora y máxima sensación envolvente.', url: 'images/HomeCinema02.jpg'},
{nombreYMarca: 'Home Cinema JBL', caracteristicas: '60 W', precio: '258 €', parrafoDescripcion: 'JBL nos propone un completo sistema de audio compuesto de 5 altavoces satélite y un subwoofer que brindará un sonido envolvente y realista que nos pone los pelos de punta.', url: 'images/HomeCinema03.jpg'},
{nombreYMarca: 'Reproductor Blue Ray Philips', caracteristicas: 'CD, DVD, Blue Ray', precio: '88 €', parrafoDescripcion: 'Disfruta del mejor cine en casa con el reproductor Blu-ray y DVD  BDP2590B/12 de Philips. Cuenta con una entrada USB para que conectes tus dispositivos externos y puedas reproducir todo tu contenido digital.', url: 'images/Reproductor_Blue_Ray01.jpg'},
{nombreYMarca: 'Reproductor Blue Ray Panasonic', caracteristicas: 'CD, DVD, Blue Ray', precio: '264 €', parrafoDescripcion: 'Disfruta de sonido e imagen en 4K con el reproductor Blu-ray DMP-BDT180EG de Panasonic. Además podrás disfrutar y compartir contenidos entre tu tv y dispositivo portátil (Tablet, Smartphone) gracias a la red inteligente DLNA', url: 'images/Reproductor_Blue_Ray02.jpg'},
{nombreYMarca: 'Reproductor Blue Ray Nevir', caracteristicas: 'CD, DVD, Blue Ray', precio: '63 €', parrafoDescripcion: 'Dos en uno, tu nuevo DVD NVR-2355-DVD-T2HDU además de reproducir DVDs te ofrece TDT en alta definición.', url: 'images/Reproductor_Blue_Ray03.jpg'},
{nombreYMarca: 'Mando a Distancia Thomson', caracteristicas: 'Infrarrojos', precio: '18 €', parrafoDescripcion: 'Encuentra un mando a distancia específico para tu marca de TV, como los ROC1105 de Thomson. El ROC1105 p/Philips es un dispositivo funcional  con forma ergonómica y súper sencillo de manejar, lo que te dará una gran comodidad a la hora de controlar tu televisor.', url: 'images/MandoADistancia01.jpg'},
{nombreYMarca: 'Mando a Distancia Trust', caracteristicas: 'Infrarrojos', precio: '13 €', parrafoDescripcion: 'Mando a distancia con temporizador que permite controlar luces/dispositivos, tanto de forma manual como automática.', url: 'images/MandoADistancia02.jpg'},
{nombreYMarca: 'Mando a Distancia Thomson', caracteristicas: 'Infrarrojos', precio: '23 €', parrafoDescripcion: 'Tiene un alcance de hasta 10 metros de distancia mediante transmisión de infrarrojos para que su uso sea desde cualquier punto de tu salón. También incluye iluminación LED en los botones principales para un fácil manejo.', url: 'images/MandoADistancia03.jpg'},
]

var cerrarX= document.querySelector('.cerrar');
cerrarX.addEventListener("click", cerrarModal);

function cerrarModal() {
  console.log('Estoy dentro del cerrarModal');
  var modal = document.querySelector('.recuadro');
  modal.classList.add('invisible');
}

var idproducto;
var segundos;
var id;

var productos;

var precio;
var preciorebajado;
var descuento;

function abrirModal(event) {
  idproducto= event.currentTarget.id;
  idproducto=parseInt(idproducto)
  prod (idproducto);
  var modal = document.querySelector('.recuadro');
  modal.classList.remove('invisible');

  var precio=productos[idproducto].precio;
    precio=parseInt(precio);
    console.log(precio);
    var descuento = precio * 20 / 100;
    console.log(descuento);
    var preciorebajado=precio-descuento;
    console.log(preciorebajado);
    document.querySelector('.precio').innerHTML='Precio: ' + precio + ' € ' + 'Precio rebajado: ' + preciorebajado + ' €';
    document.querySelector('.precioBoton').innerHTML=preciorebajado + ' €';

    segundos=20;
    id = setInterval (mostrarSegundos,1000);
}

var imagenes= document.querySelectorAll('.contenido img');
for (var i = 0; i < imagenes.length; i++) {
  console.log('Estoy dentro del for del addEventListener del click para abrirModal. i vale: ' + i);
  imagenes[i].addEventListener("click", abrirModal);
  console.log('Estoy despues del addEventListener...esperando....')
}

function prod (i) {
  console.log('Estoy dentro de la funcion prod (i), i vale ' + i);
  document.querySelector('.posicion2').src=productos[i].url;
  document.querySelector('.parrafo').innerHTML=productos[i].parrafoDescripcion;
  document.querySelector('.nombreYMarca').innerHTML=productos[i].nombreYMarca;
  document.querySelector('.boton').innerHTML='<img src="images/commerce.png" alt="carrito de compras"> Compra por <span class="precioBoton"> 1250 € </span>  <p class="cuentaAtras">20</p>'
  document.querySelector('.precio').innerHTML=productos[i].precio;
  console.log('Aqui el problema...Estoy dentro de la funcion prod (i), i vale ' + i);
  // document.querySelector('.precioBoton').innerHTML='Compra por ' + productos[i].precio;  // ALGO PASA CON ESTO...........
  console.log('Deberia haberle puesto un precio al boton...');
}

var index = 0;
     function rotarImagenes()
     {
       //var index=Math.floor((Math.random()*productos.length));
       index ++;
       document.getElementById("imagen").src=productos[index % productos.length].url;
       document.getElementById("imagen").classList.add('trasition');
       setTimeout(function(){
         document.getElementById("imagen").classList.remove('trasition');
       }, 2000);
       document.getElementById("desc").innerHTML=productos[index  % productos.length ].nombreYMarca;
      }
      onload=function()
      {
          rotarImagenes();
          setInterval(rotarImagenes,3000);
     }

function mostrarSegundos() {
  console.log('Estoy dentro del mostrarSegundos');
  var grache=document.querySelector(".boton");
  grache.addEventListener("click",gracias);
  console.log(segundos);
  segundos--;
  document.querySelector('.cuentaAtras').innerHTML=segundos;
  if (segundos === 0) {
    clearInterval(id);
    document.querySelector('.precioBoton').innerHTML=  productos[idproducto].precio;
  }
}

function gracias() {
  console.log('Estoy dentro de la funcion gracias');
  document.querySelector('.boton').innerHTML=('GRACIAS!!!');
  clearInterval(id);
// document.query Selector('.precioBoton').innerHTML= ("Graciasssss!!!");
  console.log('Hemos dado las GRACIAS!!!');
  setTimeout(cerrarModal,2000);
}
