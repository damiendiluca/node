const toggleBtn = document.getElementById("button-theme");

function updateIcon(isDark) {
    const icon = toggleBtn.querySelector("i");

    if (isDark) {
        icon.className = "bi bi-sun";
        toggleBtn.onmouseover = () => icon.className = "bi bi-sun-fill";
        toggleBtn.onmouseout = () => icon.className = "bi bi-sun";
    } else {
        icon.className = "bi bi-moon";
        toggleBtn.onmouseover = () => icon.className = "bi bi-moon-fill";
        toggleBtn.onmouseout = () => icon.className = "bi bi-moon";
    }
}

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
    updateIcon(isDark);
}



toggleBtn.addEventListener("click", () => {
    // On vérifie si le corps de la page contient la classe "dark-mode", cela permet de savoir si le thème sombre est actuellement activé
    const isCurrentlyDark = document.body.classList.contains("dark-mode");

    // On appelle setTheme avec l'inverse du thème actuel pour basculer (toggle) si le thème est sombre, on passe au clair, sinon on passe au sombre
    setTheme(!isCurrentlyDark);
});

// Quand la page HTML est complètement chargée (DOM)
window.addEventListener("DOMContentLoaded", () => {
    // On récupère la valeur enregistrée dans le localStorage sous la clé "theme"
    const savedTheme = localStorage.getItem("theme");

    // On crée un booléen isDark : il vaut true si le thème sauvegardé est "dark"
    const isDark = savedTheme === "dark";

    // On applique le thème correspondant (dark ou light) dès le chargement de la page
    setTheme(isDark);
});
