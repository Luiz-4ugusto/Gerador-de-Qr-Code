const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeBtn2 = document.querySelector("#qr-form1 button");
const qrCodeImg = container.querySelector("#qr-code img");
function generateQRcode() {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;


    qrCodeBtn.innerText = "Gerando QR Code....";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${qrCodeInputValue} `;
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Qr Code gerado";
    })

}


qrCodeBtn.addEventListener("click", () =>{
    generateQRcode();
});
qrCodeBtn2.addEventListener("click", () => {
    
    container.classList.remove("active")
    qrCodeImg.src ="";
    qrCodeInput.value ="";
})


qrCodeInput.addEventListener("keydown", (e) =>{
    if (e.code ==="Enter"){
        generateQRcode();
    }
});