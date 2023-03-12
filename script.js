const wrapper = document.getElementById("wrapper"),
  generateBtn = document.getElementById("btn"),
  qrInput = document.getElementById("text"),
  tester = document.getElementById("tester"),
  qrImg = document.getElementById("qrImg"),
  qrBox = document.querySelector(".qrcode");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const qrValue = qrInput.value;
  if (!qrValue || qrValue.trim() == "") {
    qrInput.style.borderColor = "red";
    return;
  } else {
    qrInput.style.border = "none";
  }

  generateBtn.innerText = "Generate QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
