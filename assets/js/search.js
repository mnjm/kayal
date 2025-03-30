var seachOpnBtn = null;
var closeBtn = null;
var searchCntr = null;
var resultCntr = null;
var searchBtn = null;
var searchTxt = null;
var isSearchOpen = false;
var isJsonIndexed = false;
var isResEmpty = true;
var fuse;

function fetchJSON(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
}

function buildIndex() {
  var baseURL = searchCntr.getAttribute("data-url");
  baseURL = baseURL.replace(/\/?$/, "/");
  fetchJSON(baseURL + "index.json", function (data) {
    var options = {
      shouldSort: true,
      ignoreLocation: true,
      threshold: 0.0,
      includeMatches: true,
      keys: [
        { name: "title", weight: 0.8 },
        { name: "section", weight: 0.2 },
        { name: "summary", weight: 0.6 },
        { name: "content", weight: 0.4 },
      ],
    };
    fuse = new Fuse(data, options);
    isJsonIndexed = true;
  });
}

function openSearch() {
  if (!isJsonIndexed) {
    buildIndex();
  }
  if (!isSearchOpen) {
    searchCntr.style.display = "flex";
    document.body.style.overflow = "hidden";
    resultCntr.innerHTML = "";
    isSearchOpen = true;
    searchTxt.focus();
  }
}

function closeSearch() {
  if (isSearchOpen) {
    searchCntr.style.display = "none";
    document.body.style.overflow = "";
    searchTxt.value = "";
    isSearchOpen = false;
  }
}

function executeQuery(query) {
  let results = fuse.search(query);
  let resultsHtml = "";
  if (results.length >= 1) {
    results.forEach(function (value, key) {
      var meta = value.item.section + " | ";
      meta = meta + value.item.date ? value.item.date + " | ": "";
      meta = meta + `<span class="srch-link">${value.item.permalink}</span>`

      // Highlight search results
      const markedTitle = value.item.title.replace(RegExp(`(${query})`, 'gi'), "<mark>$1</mark>");
      const markedSummary = value.item.summary.replace(RegExp(`(${query})`, 'gi'), "<mark>$1</mark>");

      resultsHtml =
        resultsHtml +
        `<li><a href="${value.item.permalink}">
          <p class="srch-title">${markedTitle}</p>
          <p class="srch-meta">${meta}</p>
          <p class="srch-smry">${markedSummary}</p>
        </a></li>`;
    });
    isResEmpty = false;
  } else {
    if(query === ""){
      resultsHtml = "";
    }
    else{
      resultsHtml = `<p style="padding-left:0.5em;">No results for <em>${query}</em></p>`;
    }
    isResEmpty = true;
  }

  resultCntr.innerHTML = resultsHtml;
}

window.addEventListener("DOMContentLoaded", (event) => {
  seachOpnBtn = document.getElementById("search-open");
  searchBtn = document.getElementById("search-btn");
  closeBtn = document.getElementById("search-close");
  searchCntr = document.getElementById("search-container");
  resultCntr = document.getElementById("search-results");
  searchTxt = document.getElementById("search-query");

  seachOpnBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeSearch();
  });

  searchTxt.onkeyup = function (event) {
    executeQuery(this.value);
  };

  searchTxt.onkeydown = function (event) {
    if (event.key == "Enter" && !isResEmpty) {
      // Enter to focus on the first search result
      resultCntr.firstChild.firstElementChild.focus();
      event.preventDefault();
    }
  };
});

document.addEventListener("keydown", function (event) {
  if (event.key == "/"  && !isSearchOpen) {
    event.preventDefault();
    openSearch();
  }

  if (isSearchOpen) {
    if (event.key == "Escape") {
      event.preventDefault();
      closeSearch();
    } else if (event.key == "ArrowDown" && !isResEmpty) {
      if (document.activeElement == searchTxt) {
        resultCntr.firstChild.firstElementChild.focus();
      } else if (
        document.activeElement == resultCntr.lastChild.firstElementChild
      ) {
        searchTxt.focus();
      } else {
        document.activeElement.parentElement.nextSibling.firstElementChild.focus();
      }
      event.preventDefault();
    } else if (event.key == "ArrowUp" && !isResEmpty) {
      if (document.activeElement == searchTxt) {
        resultCntr.lastChild.firstElementChild.focus();
      } else if (
        document.activeElement == resultCntr.firstChild.firstElementChild
      ) {
        searchTxt.focus();
      } else {
        document.activeElement.parentElement.previousSibling.firstElementChild.focus();
      }
      event.preventDefault();
    }
  }
});

// Clicking outside the search area will close the search.
document.getElementById("search-overlay").addEventListener("click", () => {
  closeSearch();
});
