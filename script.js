
window.onload = function () {
  console.log("Website UMKM Selengek Crispy Uni JN berhasil dimuat.");
};
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      alert("Terima kasih atas masukan, kritik, dan saran nya.");
      form.reset(); // Reset isi form
    });
  }
});
