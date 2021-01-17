import { Header } from "./Components/Header.js";
import { Posts } from "./Components/Posts.js";
import { Loader } from "./Components/Loader.js";
import { Router } from "./Components/Router.js";

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
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  Router();
  
}
