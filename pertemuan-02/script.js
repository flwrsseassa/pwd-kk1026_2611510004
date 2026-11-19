const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
console.log("Tombol navigasi diklik.");
});
const isOpen = navMenu.classList.toggle("nav-open");


const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");

const nama = namaInput.value;
const email = emailInput.value;
const semester = semesterInput.value;

const jenisPesan = document.querySelector(
  'input[name="jenis_pesan"]:checked',
);
const topikDipilih = document.querySelectorAll('input[name="minat"]:checked');
if (topikDipilih.length === 0) {
// Proses validasi ketika belum ada topik yang dipilih.
}
