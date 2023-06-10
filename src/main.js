// 11
// // 3
import Catalogue from "./lib/Catalogue.js";
// 9
import Router from "./lib/Router.js";
const mainEl = document.querySelector("main");
const bodyEl = document.querySelector("body");
const detailEl = document.querySelector('.detail');

// 11
import homeCallback from "./routes/home/index.js";
import detailsCallback from "./routes/details/index.js";

// 1
(async () => {
    const res = await fetch('https://raw.githubusercontent.com/582-31F-MA/jeux-de-donnees/main/ghibli.json');
    const data = await res.json();
    //console.log(data);

    // 11 mettre dans index.js de Home
    // // 4
    const catalogue = new Catalogue(data, mainEl);
    catalogue.displayMovies();

    // 10
    // function homeCallback() {
    //     console.log("Home");
    // }
    //console.log(homeCallback);
    // 9
    const router = new Router(mainEl); // 10
    router.addRoute("Home", "/", "/routes/home/index.html", homeCallback.bind(null, data, mainEl));
    router.addRoute("Home", "/src/index.html", "/routes/home/index.html", homeCallback.bind(null, data, mainEl));

    for (const movie of data) {
        const pathname = "/" + encodeURI(movie.title);
        // function detailsCallback() {
        //     console.log(movie.title);
        // }
        router.addRoute(
            movie.title,
            pathname,
            "/routes/details/index.html",
            detailsCallback.bind(null, movie, bodyEl) // 11 bind
        );
    }
    //console.log(router);
    router.init();

    ///////////////////////////////////////////////////////////////////////////
    // VUES
    //
    // Configure la vue par défaut, et attache écouteur d'évènements qui appelle le
    // mutateur `setView` lorsque la valeur de l'un des contrôles change.

    const defaultView = document.querySelector("#display input:checked").value;
    catalogue.setView(defaultView);

    const viewInputEls = document.querySelectorAll("#display input");
    viewInputEls.forEach((viewInputEl) => {
        viewInputEl.addEventListener("change", () => {
            catalogue.setView(viewInputEl.value);
        });
    });
})();



