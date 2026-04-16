// TAB SWITCHING (unchanged)
function showTab(tabId, event) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  const links = document.querySelectorAll(".tab-link");
  links.forEach(link => link.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}


// UNIFIED VIDEO SYSTEM
document.querySelectorAll('.video-container').forEach(container => {
  const iframe = container.querySelector('.video-embed');
  const src = iframe.dataset.src;

  let loaded = false;

  container.addEventListener('mouseenter', () => {
    if (!loaded) {
      iframe.src = src;
      loaded = true;
    }

    // resume play on hover re-entry (Vimeo/YouTube both OK)
    else {
      iframe.contentWindow?.postMessage?.('{"method":"play"}', '*');
    }
  });

  container.addEventListener('mouseleave', () => {
    // pause without destroying iframe
    iframe.contentWindow?.postMessage?.('{"method":"pause"}', '*');
  });
});