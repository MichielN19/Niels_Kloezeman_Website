const sidebar = document.querySelector(".sidebar");

function OpenSidebar() {
    sidebar.style.display = "flex";
    sidebar.classList.remove("closed");
}

function CloseSidebar() {
    sidebar.classList.add("closed");

    setTimeout(() => {
    sidebar.style.display = "none"; // Verberg de sidebar na de animatie
    }, 700); // De tijdsduur moet overeenkomen met de animatieduur
}

