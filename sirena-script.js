function openIframePopup(iframeSrc) {
  document.getElementById("iframeContent").src = iframeSrc;
  document.querySelector(".overlay").style.display = "block";
}

function closeIframePopup() {
  document.querySelector(".overlay").style.display = "none";
}
