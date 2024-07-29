var copyText = "Copy";
var copiedText = "Copied";

function createCopyButton(codeblock) {
  const container = codeblock.parentNode.parentNode;

  const copybutton = document.createElement('button');
  copybutton.classList.add('copy-button');
  copybutton.innerHTML = copyText;

  function copyingDone() {
    copybutton.innerHTML = copiedText;
    setTimeout(() => {
      copybutton.innerHTML = copyText;
    }, 2000);
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
