import Catalogue from "../../lib/Catalogue.js";
export default function (data, bodyEl) {
    console.log('Home');

    const catalogue = new Catalogue(data, bodyEl);
    catalogue.displayMovies();
}