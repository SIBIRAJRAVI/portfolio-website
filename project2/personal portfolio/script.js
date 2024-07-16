document.addEventListener("DOMContentLoaded", () => {
    const themeColorPicker = document.getElementById("themeColorPicker");

    themeColorPicker.addEventListener("input", (event) => {
        const newColor = event.target.value;
        document.documentElement.style.setProperty('--primary-theme-color', newColor);
    });
});