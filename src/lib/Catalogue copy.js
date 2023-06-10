// 2
export default class Catalogue {
    #data;
    #displayTarget;

    constructor(data, displayTarget) {
        this.#data = data;
        this.#displayTarget = displayTarget;
    }

    displayMovies(movies = this.#data) {
        const ul = document.createElement("ul");

        // 5 modifier
        for (const movie of movies) {
            const aEl = document.createElement("a");
            const href = "/" + encodeURI(movie.title); //on peut aussi faire un remplacement de " " par "_"

            aEl.href =

                aEl.innerHTML = `
                <article>
                    <img src="${movie.image}" alt="Poster image for ${movie.title}" />
                    <ul>
                        <li><h2>${movie.title}</h2></li>
                        <li><span>Year released:</span> ${movie.release_date}</li>
                        <li><span>Director:</span> ${movie.director}</li>
                        <li><span>Producer(s):</span> ${movie.producer}</li>
                    </ul>
                </article>
            `;


            const liEl = document.createElement("li");
            liEl.appendChild(aEl);

            ul.appendChild(liEl);
        }

        // Il est préférable de tout ajouter les `<article>` d'un coup plutôt
        // que un à un pour éviter de repeindre la page en boucle.
        this.#displayTarget.replaceChildren(ul);
    }
}