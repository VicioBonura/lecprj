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
function renderPage(callback) {

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
    let loadedParts = 0;

    //loading the parts via fetch
    for(const [part, path] of Object.entries(parts)){
        fetch(path)
            .then(response => response.text())
            .then(data => {
                container.innerHTML += data;
                loadedParts++;
                if(loadedParts === Object.keys(parts).length){
                    loader.after(container);
                    loader.classList.add("hidden");
                    callback();
                }
            });
    }
}