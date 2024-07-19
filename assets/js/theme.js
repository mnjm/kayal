function toggleIcon(elId1, elId2) {
    let el1 = document.getElementById(elId1);
    let el2 = document.getElementById(elId2);
    if (el1) {
        el1.style.display = 'none';
    }
    if (el2) {
        el2.style.display = 'inline';
    }
}

function setTheme(theme) {
    if (theme === "dark") {
        toggleIcon("dark-toggler", "light-toggler");
        if (document.body) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
        console.log(document.body.classList);
    } else if (theme === "light") {
        toggleIcon("light-toggler", "dark-toggler");
        if (document.body) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }
    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme") === "dark") {
        setTheme("light");
    }
}

const siteTheme = document.documentElement.getAttribute("data-default-theme");
let savedTheme = localStorage.getItem("theme") || siteTheme;
// adapt based on user os preference
if (savedTheme == "auto") {
    savedTheme = "light";
    if ( window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
        savedTheme = "dark";
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    setTheme(savedTheme);

    const switcher = document.getElementById("theme-switcher");
    if (switcher) {
        switcher.addEventListener("click", () => {
            toggleTheme();
        });
    }
    // listner to check for user's os preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        if (event.matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    });
});
