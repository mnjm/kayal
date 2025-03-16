const copyText =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 448L64 448l0-224 64 0 0-64-64 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-64 0 0 64zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"/></svg>';
const copiedText =
  'Copied! <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';

document.querySelectorAll(".copy-button").forEach((item) =>
  item.addEventListener("click", () => {
    if ("clipboard" in navigator) {
      let code;
      const codeBlock = item.previousElementSibling;

      if (codeBlock.children[0].tagName === "PRE") {
        // Plain code block. 
        code = codeBlock.textContent;
      } else {
        // Code block with line number. 
        code = codeBlock.querySelector("td:last-child").textContent;
      }

      navigator.clipboard.writeText(code);

      item.innerHTML = copiedText;
      setTimeout(() => {
        item.innerHTML = copyText;
      }, 500);
    }
  })
);