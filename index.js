// Fonction pour gérer le déroulement d'une des sections
function displaySection(button, content) {
    button.addEventListener("click", function() {
        content.classList.toggle("d-none");
        const isHidden = content.classList.contains("d-none");
        button.innerHTML = `<i class="bi bi-arrow-${isHidden ? 'down' : 'up'}-circle"></i>`;
    });
}

// Liste des différentes sections
const sections = [
    { button: ".deroulePP", content: ".PP" },
    { button: ".derouleCS", content: ".cS" },
    { button: ".derouleEP", content: ".eP" },
    { button: ".derouleE", content: ".education" },
    { button: ".derouleIL", content: ".iL" }
];

// Application de la fonction à chacune des sections
sections.forEach(section => {
    const button = document.querySelector(section.button);
    const content = document.querySelector(section.content);
    displaySection(button, content);
});
