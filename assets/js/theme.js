function toggleTheme() {
    if (document.documentElement.className.includes('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const switcher = document.getElementById("theme-switcher");
    if (switcher) {
        switcher.addEventListener("click", () => { toggleTheme(); });
    }
    // listner to check for user's os preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        if (event.matches && localStorage.getItem('theme') === 'light') {
            toggleTheme();
        }
    });
});
