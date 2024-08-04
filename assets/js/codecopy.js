var copyText = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M288 448L64 448l0-224 64 0 0-64-64 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-64 0 0 64zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z\"/></svg>";
var copiedText = "Copied! <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z\"/></svg>";

function createCopyButton(codeblock) {
  const container = codeblock.parentNode.parentNode;

  const copybutton = document.createElement('button');
  copybutton.classList.add('copy-button');
  copybutton.innerHTML = copyText;

  function copyingDone() {
    copybutton.innerHTML = copiedText;
    setTimeout(() => {
      copybutton.innerHTML = copyText;
    }, 500);
  }

  copybutton.addEventListener('click', (cb) => {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(codeblock.textContent);
      copyingDone();
      return;
    }

    const range = document.createRange();
    range.selectNodeContents(codeblock);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      copyingDone();
    } catch (e) { };
    selection.removeRange(range);
  });

  if (container.classList.contains("highlight")) {
    container.appendChild(copybutton);
  } else if (container.parentNode.firstChild == container) {
    // td containing LineNos
  } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
    // table containing LineNos and code
    codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
  } else {
    // code blocks not having highlight as parent class
    codeblock.parentNode.appendChild(copybutton);
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre > code").forEach((codeblock) => createCopyButton(codeblock));
});
