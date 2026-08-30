const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector(".newsletter form").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.currentTarget.querySelector("input").value;
  alert(`Thanks! ${email} has been added to the ZayneTutor newsletter.`);
  e.currentTarget.reset();
});
