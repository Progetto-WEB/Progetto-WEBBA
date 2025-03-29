document.addEventListener("DOMContentLoaded", function() {
    // Aggiungi il listener di clic all'icona hamburger
    document.querySelector(".hamburger").addEventListener("click", function() {
        console.log("Hamburger cliccato!");  // Aggiungi un log per verificare se il click viene registrato
        document.querySelector(".menu").classList.toggle("active");
    });
});
