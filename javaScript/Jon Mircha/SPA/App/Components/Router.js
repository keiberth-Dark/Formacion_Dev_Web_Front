import { ajax } from "../Helpers/ajax.js";
import api from "../Helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export function Router(){

  const d = document,
        w = window,
        $post = d.getElementById("posts");


  let {hash} = location;

  console.log(hash);

  $post.innerHTML = null;

  if(!hash || hash === "#/"){
    ajax({
      url: api.POSTS,
      cbSuccess:(posts) =>{
        //console.log(posts);
        let html = "";
        posts.forEach(posts => html += PostCard(posts));
        d.querySelector(".loader").style.display = "none";
        $post.innerHTML = html;
      },
    }); 
  }else if(hash.includes("#/search")){
    $post.innerHTML = "<h2>Seccion del Buscador</h2>";
  }else if(hash === "#/Contacto"){
    $post.innerHTML = "<h2>Seccion de Contanto</h2>";
  }else{
    $post.innerHTML = 
    "<h2>Aqui cargara el contenido del post Previamente selecionado</h2>";
  }

  
}