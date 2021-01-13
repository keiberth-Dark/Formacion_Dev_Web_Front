import api from "./Helpers/wp_api.js";
import { ajax } from "./Helpers/ajax.js";
import { Header } from "./Components/Header.js";
import { Loader } from "./Components/Loader.js";

export function App() {
  /* document.getElementById("root").innerHTML = `<h1>Bienvenidos a SPA con Vanilla-Js</h1>`

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
  }); */
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Loader());
}
