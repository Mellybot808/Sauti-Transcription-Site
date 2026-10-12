const dialog = document.querySelector(".activation-dialog");
const activationForm = document.querySelector("#activation-form");
const formMessage = document.querySelector(".form-message");
const nav = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

document.querySelector("#year").textContent = new Date().getFullYear();

const waveform = document.querySelector(".waveform");
for (let index = 0; index < 64; index += 1) {
  const bar = document.createElement("span");
  const height = 14 + Math.abs(Math.sin(index * 0.43) + Math.cos(index * 0.17)) * 27;
  bar.style.height = `${height}px`;
  waveform.append(bar);
}

document.querySelectorAll(".js-activate").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!dialog.open) {
      dialog.showModal();
      formMessage.classList.remove("visible");
      formMessage.textContent = "";
    }
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

activationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activationForm.reportValidity()) return;
  formMessage.textContent = "Registration and payment verification aren't connected in this demo. Activation follows payment confirmation.";
  formMessage.classList.add("visible");
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});
