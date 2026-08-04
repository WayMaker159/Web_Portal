let sidebarOpen = false;

function toggleMenu(event){

    let sidebar = document.getElementById("sidebar");

    if(sidebarOpen == false){

        sidebar.style.left = "0px";
        sidebarOpen = true;

    }
    else{

        sidebar.style.left = "-250px";
        sidebarOpen = false;

    }

}


/* CLOSE SIDEBAR WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(event){

    let sidebar = document.getElementById("sidebar");

    let menuBtn = document.querySelector(".menu-btn");

    if(
        sidebarOpen &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ){

        sidebar.style.left = "-250px";
        sidebarOpen = false;

    }

});

function toggleBranches(){

    let branches = document.getElementById("moreBranches");

    let button = document.querySelector(".view-more-btn");


    if(branches.style.display === "grid"){

        branches.style.display = "none";

        button.innerHTML = "View More ▼";
    }

    else{

        branches.style.display = "grid";

        button.innerHTML = "View Less ▲";
    }
}

const path = window.location.pathname;

let componentPrefix = "";

if (path.includes("/Pages/notes/")) {
    componentPrefix = "../../";
}
else if (path.includes("/Pages/")) {
    componentPrefix = "../";
}

fetch(componentPrefix + "components/sidebar.html")
.then(response => response.text())
.then(data => {

    document.getElementById("sidebar-container").innerHTML = data;

    // Base path for GitHub Pages
    const BASE =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost"
            ? ""
            : "/Web_Portal";

    function setLink(id, path) {
        const element = document.getElementById(id);
        if (element) {
            element.href = BASE + path;
        }
    }

    setLink("homeLink", "/index.html");
    setLink("pyqLink", "/Pages/pyq.html");
    setLink("firstYearLink", "/Pages/notes/firstyear.html");

});

fetch(componentPrefix + "components/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer-container").innerHTML = data;
});