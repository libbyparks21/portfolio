// script.js

function showTab(tabId, event) {
  // Hide all tab sections
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Remove active class from all tab links
  const links = document.querySelectorAll(".tab-link");
  links.forEach(link => link.classList.remove("active"));

  // Show the clicked tab
  document.getElementById(tabId).classList.add("active");

  // Make the clicked tab link active
  event.currentTarget.classList.add("active");
}