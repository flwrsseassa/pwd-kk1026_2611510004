const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("nav-open");

  navToggle.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    navToggle.setAttribute("aria-label", "Tutup navigasi");
  } else {
    navToggle.setAttribute("aria-label", "Buka navigasi");
  }
});

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");

const nama = namaInput.value;
const email = emailInput.value;
const semester = semesterInput.value;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Proses validasi formulir.
});

const jenisPesan = document.querySelector(
  'input[name="jenis_pesan"]:checked',
);


const topikDipilih = document.querySelectorAll('input[name="minat"]:checked');
if (topikDipilih.length === 0) {
  // Proses validasi ketika belum ada topik yang dipilih.
}

contactForm.addEventListener("reset", () => {
  formFeedback.textContent = "";
});

contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});