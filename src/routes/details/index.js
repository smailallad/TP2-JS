// 11
export default function (movie, detailEl) {
    //console.log(movie);
    //console.log(detailEl);

    let contenu = `
                <div class="detail">
                <ul>
                <img src="${movie.image}" alt="Poster image for ${movie.title}" />
                </ul>
                <ul>
                <li><h2>${movie.title}</h2></li>`;
    //console.log(contenu);
    Object.keys(movie).forEach(key => {
        //console.log(key, typeof movie[key]);
        if (typeof movie[key] === 'object') {
            contenu = contenu + `<li><span>${key}:</span>
            </li>
            <ul>`;
            Object.keys(movie[key]).forEach(i => {
                contenu = contenu + `
                <li>${movie[key][i]}</li>`;
                //console.log(contenu);
            });
            contenu = contenu + `</ul>`;
        } else {
            contenu = contenu + `
            <li><span>${key}:</span> ${movie[key]}</li>`;
            //console.log(contenu);
        }
    });
    contenu = contenu + ` </ul>
               </div>
               `;
    //console.log(contenu);
    detailEl.innerHTML = contenu;
    const aEl = document.createElement('a');
    aEl.href = '/src/index.html';
    aEl.innerHTML = 'Retour';
    detailEl.appendChild(aEl);

}