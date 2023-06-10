// 7
export default class Router {
    #routes = [];
    #currentUrl;
    #targetEl;
    // 10
    constructor(targetEl) {
        this.#targetEl = targetEl;
    }
    init() {
        this.#loadView();
        this.#handleAnchors();
    }
    // 8
    addRoute(title, pathname, view, callback) { // 10 callback
        const route = {
            title: title,
            pathname: pathname,
            view: view,
            callback: callback,
        }
        this.#routes.push(route);
    }
    #navigateTo(pathname) {
        history.pushState({}, "", pathname);
        this.#loadView();
    }
    #loadView() {
        this.#currentUrl = new URL(window.location);
        const pathname = this.#currentUrl.pathname;
        //console.log(pathname);
        const currentRoute = this.#matchRoute(pathname);
        // 10
        this.#targetEl.innerHTML = "";
        //console.log(currentRoute);
        currentRoute.callback();
    }
    #matchRoute(pathname) {
        const matchedRoute = this.#routes.find(
            (route) => route.pathname === pathname
        );
        return matchedRoute;
    }
    #handleAnchors() {
        const body = document.querySelector("body");
        const hostname = this.#currentUrl.hostname;
        body.addEventListener("click", (event) => {
            // S'assure que la cible du clique est un élément d'ancre, et que le
            // lien est local (c'est-à-dire que le domaine du lien soit le même
            // que le domaine du présent site.)
            //event.preventDefault();
            console.log(event);
            let aEl = event.target;
            while (aEl.tagName !== undefined && aEl.tagName.toLowerCase() !== "a") {
                aEl = aEl.parentNode;
                //console.log(aEl);
            }
            if (aEl.tagName !== undefined) {
                const hrefEl = aEl.getAttribute('href');
                //console.log(hrefEl);
                //console.log(aEl.hostname);
            }
            //console.log(hostname);
            if (aEl.tagName !== undefined && aEl.hostname === hostname) {
                event.preventDefault();
                console.log("bon lien");
                //const aEl = event.target;
                this.#navigateTo(aEl.href);
            };
        });

    }
}