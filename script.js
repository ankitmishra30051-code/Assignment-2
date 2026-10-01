// ===============================
// DOWNLOAD BUTTON MESSAGE
// ===============================

const downloadButton = document.querySelector(".download-btn");

downloadButton.addEventListener("click", function () {

    alert("Your resume download is starting...");

});

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    "© " + currentYear + " Ankit Kumar | Student Resume";