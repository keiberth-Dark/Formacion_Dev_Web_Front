import { ajax } from "../Helpers/ajax.js";
import api from "../Helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export async function Router(){

  const d = document,
        w = window,
        $main = d.getElementById("main");


  let {hash} = location;

  console.log(hash);

  $main.innerHTML = null;

  if(!hash || hash === "#/"){
    await ajax({
      url: api.POSTS,
      cbSuccess:(posts) =>{
        //console.log(posts);
        let html = "";
        posts.forEach(posts => html += PostCard(posts));
        $main.innerHTML = html;
      },
    }); 
  }else if(hash.includes("#/search")){
    $main.innerHTML = "<h2>Seccion del Buscador</h2>";

  }else if(hash === "#/Contacto"){
    $main.innerHTML = "<h2>Seccion de Contanto</h2>";

  }else{
    $main.innerHTML = 
    "<h2>Aqui cargara el contenido del post Previamente selecionado</h2>";

  }

  d.querySelector(".loader").style.display = "none";
  
}