document.addEventListener("DOMContentLoaded", function () {
  const treatmentsSection = document.getElementById("treatments");
  const contactSection = document.getElementById("Contact");
  const homeSection = document.getElementById("home");
  const aboutUsLink = document.querySelector('a[href="#About Us"]');
  const homeLink = document.querySelector('a[href="#Home"]');
  const treatmentsLink = document.querySelector('a[href="#Treatments"]');
  const contactLink = document.querySelector('a[href="#Contact"]');

  // Fungsi untuk menyembunyikan treatment
  function hideTreatments() {
    treatmentsSection.style.display = "none";
  }

  // Fungsi untuk menampilkan treatment
  function showTreatments() {
    treatmentsSection.style.display = "block";
  }

  // Saat klik Home
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    hideTreatments();
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

  // Saat klik About Us
  aboutUsLink.addEventListener("click", function (e) {
    e.preventDefault();
    hideTreatments();
    // Scroll ke About Us
    const aboutUsSection = document.getElementById("About Us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Saat klik Contact
  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    hideTreatments();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  // Saat klik Treatments
  treatmentsLink.addEventListener("click", function (e) {
    e.preventDefault();
    showTreatments();
    treatmentsSection.scrollIntoView({ behavior: "smooth" });
  });
});
