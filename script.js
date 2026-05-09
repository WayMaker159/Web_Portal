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