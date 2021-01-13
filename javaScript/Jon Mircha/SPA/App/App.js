import api from "./Helpers/wp_api.js"
import {ajax} from "./Helpers/ajax.js"

export function App(){
  document.getElementById("root").innerHTML = `<h1>Bienvenidos a SPA con Vanilla-Js</h1>`

  ajax({
    url: api.POSTS,
    cbSuccess: (post)=>{
      console.log("Posts",post);
    }
  });

  console.log(api)

  ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories)=>{
      console.log("Categorias",categories);
    }
  });
  
}