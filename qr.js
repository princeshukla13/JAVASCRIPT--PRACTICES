let img = document.getElementById("img");
let qrimg = document.getElementById("imgqr");

function getqr() {
    let input = document.getElementById("input").value;
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + input;
}

