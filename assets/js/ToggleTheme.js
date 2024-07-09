// toggle-theme.js
function toggleTheme() {
    var themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'assets/css/main.css') {
        themeStyle.setAttribute('href', 'assets/css/maindark.css');
    } else {
        themeStyle.setAttribute('href', 'assets/css/main.css');
    }
}