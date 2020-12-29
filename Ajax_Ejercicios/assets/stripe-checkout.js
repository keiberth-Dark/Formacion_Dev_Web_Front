


/* ********** Curso JavaScript: 129. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (1/4) - #jonmircha ********** */
import STRIPE_KEYS from "./stripe-keys.js";

//console.log(STRIPE_KEYS);

const d = document,
    $tacos = d.getElementById("tacos"),
    $template = d.getElementById("taco-template").content,
    $fragment = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products",{
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
}).then((res) => {
  //console.log(res);
  return res.json()
})
.then(json => {
  //console.log(json);
});


fetch("https://api.stripe.com/v1/prices",{
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
}).then((res) => {
  console.log(res);
  return res.json()
})
.then(json => {
  console.log(json);
});
/* Invocar 2 llamadas fetch no es obtimo por eso usamos promesas old 
que nos permite llamar a 2 y cuando esten listas mostrar una sola */


/* ********** Curso JavaScript: 130. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (2/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 131. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (3/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 132. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (4/4) - #jonmircha ********** */
