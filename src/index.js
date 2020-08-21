import apiRickandMorty from './Rickandmorty'
import $ from 'jquery'

$(document).ready(function(){}); 

//invocacion de la function consumidora de la api y IIFE importada
apiRickandMorty.then((datos)=>{
   setPrint(datos);
   

}).catch(()=>{console.log("todo esta perdido")});



//function de iteracion de la data y uso del template
function setPrint (datos){

    console.log(datos);

   datos.forEach(character => {
       let id = character.id;
       let name = character.name;
       let status = character.status;
       let species = character.species;
       let type = character.type;
       let image = character.image;
       let gender = character.gender;


//=========pruebas=================
      //  console.log(id);
    //    console.log(name);
      //  console.log(status);
      //  console.log(species);
      //  console.log(type);
      //  console.log(image);
      //  console.log(gender);

       //funciona

       let printDom = document.getElementById("contenido");
       printDom.innerHTML += ` 
       <div class="card ${id}">
        <img class= "photo ${id}" src="${image}" alt="imagen">
        <h1 class= "title_personaje">${name}</h1>
        <ul class="listado">
            <li><span class="item">Estado: </span>${status}</li>
            <li><span class="item">Especie: </span>${species}</li>
            <li><span class="item">Genero: </span>${gender}</li>
            <li>${type}</li>

        </ul>
    </div>   
` //final de template


//=============prueba2=============
// console.log(id);
// console.log(species);


$(".card").hover(function(){
    // cambia forma de la card
    const color4 = "#e0ece4"
    $(this).css("background-color", color4)
    $(".card").css("border-radius", "30px")

});//final de jquery

//click en photo

$('.photo').click(function(e){

    //cambio de body
const color1= "#ffd571";
  $("body").css('background', color1)

  //cambio de color de card
    const color2 = "#68b0ab";
    $(".card").css('background', color2)

  //desplegar info
$(".listado").css('display', 'block')
  
});//fin del jquery


});//fin del for each



}//final de la function

