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
});

fetch(componentPrefix + "components/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer-container").innerHTML = data;
});