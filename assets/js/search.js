var seachOpnBtn = null;
var closeBtn = null;
var searchCntr = null;
var resultCntr = null;
var searchBtn = null;
var searchTxt = null;
var isSearchOpen = false;

function openSearch() {
  if (isSearchOpen) {
    return;
  }
  searchCntr.style.display = "flex";
  document.body.style.overflow = "hidden";
  isSearchOpen = true;
  searchTxt.focus();
}

function closeSearch() {
  if (isSearchOpen) {
    searchCntr.style.display = "none";
    document.body.style.overflow = "";
    isSearchOpen = false;
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  seachOpnBtn = document.getElementById("search-open");
  searchBtn = document.getElementById("search-btn");
  closeBtn = document.getElementById("search-close");
  searchCntr = document.getElementById("search-container");
  resultCntr = document.getElementById("search-results");
  searchTxt = document.getElementById("search-query");

  seachOpnBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);
});

document.addEventListener("keydown", function (event) {
  // Forward slash to open search
  if (event.key == "/") {
    event.preventDefault();
    openSearch();
  }
  // Esc to close search
  if (event.key == "Escape") {
    event.preventDefault();
    closeSearch();
  }
});
