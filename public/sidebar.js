// const sidebar = document.querySelector(".sidebar");
//
// function OpenSidebar() {
//     sidebar.style.display = "flex";
//     sidebar.classList.remove("closed");
// }
//
// function CloseSidebar() {
//     sidebar.classList.add("closed");
//
//     setTimeout(() => {
//     sidebar.style.display = "none"; // Verberg de sidebar na de animatie
//     }, 700); // De tijdsduur moet overeenkomen met de animatieduur
// }


const sidebar = document.querySelector('.sidebar');

function OpenSidebar() {
    const sidebarWidth = sidebar.offsetWidth; // Haal de huidige breedte van de sidebar op
    sidebar.style.right = `-${sidebarWidth}px`; // Stel de beginpositie in voor sluiting
    sidebar.style.display = 'flex'; // Sidebar zichtbaar maken
    setTimeout(() => {
        sidebar.classList.add('open'); // Voeg de open-animatie class toe
        sidebar.classList.remove('closed'); // Verwijder de closed class
    }, 10); // Kleine vertraging om de animatie te laten starten
}

function CloseSidebar() {
    const sidebarWidth = sidebar.offsetWidth; // Haal de huidige breedte van de sidebar op
    sidebar.classList.remove('open'); // Verwijder de open class om het sluiten te starten
    sidebar.classList.add('closed'); // Voeg de sluitclass toe
    setTimeout(() => {
        sidebar.style.display = 'none'; // Sidebar verbergen na animatie
    }, 700); // 700ms gelijk aan de animatieduur
}
