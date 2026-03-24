function showTab(tabId, event) {
  const tabs = document.querySelectorAll(".tab");
  const links = document.querySelectorAll(".tab-link");

  tabs.forEach(tab => tab.classList.remove("active"));
  links.forEach(link => link.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}
