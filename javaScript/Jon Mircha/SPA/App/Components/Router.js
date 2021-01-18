import { ajax } from "../Helpers/ajax.js";
import api from "../Helpers/wp_api.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Posts.js";
import { SearchCard } from "./SearchCard.js";


export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = location;

  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        //console.log(posts);
        let html = "";
        posts.forEach((posts) => (html += PostCard(posts)));
        $main.innerHTML = html;
      },
    });
    //console.log(api.POST);
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
          <p class="error">
          No Existen resultados de busquedad para el termino
          <mark>${query}</mark>
          </p>
          `;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }
        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/Contacto") {
    $main.innerHTML = "<h2>Seccion de Contanto</h2>";
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostid")}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }

  d.querySelector(".loader").style.display = "none";
}
