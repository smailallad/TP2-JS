// 2
export default class Catalogue {
    #data;
    #displayTarget;
    #currentView;

    constructor(data, displayTarget) {
        this.#data = data;
        this.#displayTarget = displayTarget;
    }

    displayMovies(movies = this.#data) {
        const ulEl = document.createElement("ul");

        for (const movie of movies) {
            const aEl = document.createElement("a");
            const articleEl = document.createElement("article");
            aEl.href = "/" + encodeURI(movie.title); //on peut aussi faire un remplacement de " " par "_"
            const contenu = `
                <img src="${movie.image}" alt="Poster image for ${movie.title}" />
                <ul>
                <li><h2>${movie.title}</h2></li>
                <li><span>Year released:</span> ${movie.year}</li>
                <li><span>Director:</span> ${movie.director}</li>
                <li><span>Producer(s):</span> ${movie.producer}</li>
                </ul>
                `;
            articleEl.innerHTML = contenu;
            aEl.appendChild(articleEl);
            ulEl.appendChild(aEl);
        }

        // Il est préférable de tout ajouter les `<article>` d'un coup plutôt
        // que un à un pour éviter de repeindre la page en boucle.
        this.#displayTarget.replaceChildren(ulEl);
        console.log('fin display');
    }

    setView(newView) {
        this.#displayTarget.classList.remove(this.#currentView);
        this.#displayTarget.classList.add(newView);
        this.#currentView = newView;
    }


}