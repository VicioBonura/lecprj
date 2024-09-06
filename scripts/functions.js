/**
 * @file functions.js
 * @author Vincenzo Bonura
 * @date 2024-08-02
 *
 * 
 */

/**
 * This function renders dinamically the page
 * @param {function} callback function to call when the page is rendered
 */
async function renderPage(callback) {

    /**
     * This function fetches a part of the page from the server
     * @param {string} url The URL of the part to fetch
     * @returns {Promise<string>} The HTML of the part
     */
    async function fetchPart(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error loading ${url}: ${response.statusText}`);
        }
        return await response.text();
    }

    //Using URL API to get the page parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const page = params.has("page") ? params.get("page") : "home";
    
    //create the container for the parts of the page
    const container = document.createElement("div");
    container.id = "appContainer";

    //get the element after which append the content
    const loader = document.getElementById("mainLoader");

    //Parts of the page to load
    const parts = {
        "header": "./parts/header.html",
        "page": `./pages/${page}.html`,
        "footer": "./parts/footer.html"
    };

    //inject the css file
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `./styles/${page}.css`);
    document.head.appendChild(link);

    //loads the parts of the page and appends them to the container    
    try {
        for (const [part, path] of Object.entries(parts)) {
            const data = await fetchPart(path);
            container.innerHTML += data;
        }

        //update page title
        const pageTitle = document.querySelector("title");
        pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1).replace("-", " ") + ` | ${pageTitle.textContent}`;

        //when all the parts are loaded, append the container to the loader and hide the loader
        loader.after(container);
        loader.classList.add("hidden");

        //call the callback function
        callback();

    } catch (error) {
        console.error("Error loading part: ", error);
        setTimeout(() => {
            window.location = "/?page=404";
        }, 1000);
    }
}