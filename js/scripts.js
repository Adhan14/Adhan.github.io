function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    let style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: white;
        }
    `;
    document.head.appendChild(style);
});
