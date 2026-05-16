const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const siteMenu = document.querySelector("#site-menu");
const ageGate = document.querySelector("#age-gate");
const ageConfirm = document.querySelector("#age-confirm");
const revealItems = document.querySelectorAll(".reveal");

if (navToggle && siteMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    body.classList.toggle("menu-open", !isOpen);
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      body.classList.remove("menu-open");
    }
  });
}

if (ageGate && ageConfirm) {
  const confirmed = localStorage.getItem("pompomhubAgeConfirmed") === "true";

  if (!confirmed) {
    ageGate.hidden = false;
    body.classList.add("gate-open");
    ageConfirm.focus({ preventScroll: true });
  }

  ageConfirm.addEventListener("click", () => {
    localStorage.setItem("pompomhubAgeConfirmed", "true");
    ageGate.hidden = true;
    body.classList.remove("gate-open");
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
