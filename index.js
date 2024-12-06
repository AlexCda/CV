const deroulePP = document.querySelector(".deroulePP")
const pP = document.querySelector(".PP")
deroulePP.addEventListener("click", function() {
    pP.classList.toggle("d-none");
    if (pP.classList.contains("d-none")) {
        deroulePP.innerHTML = '<i class="bi bi-arrow-down-circle"></i>';
    } else {
        deroulePP.innerHTML = '<i class="bi bi-arrow-up-circle"></i>';
    }
})

const derouleCS = document.querySelector(".derouleCS")
const cS = document.querySelector(".cS")
derouleCS.addEventListener("click", function() {
    cS.classList.toggle("d-none");
    if (cS.classList.contains("d-none")) {
        derouleCS.innerHTML = '<i class="bi bi-arrow-down-circle"></i>';
    } else {
        derouleCS.innerHTML = '<i class="bi bi-arrow-up-circle"></i>';
    }
})

const derouleEP = document.querySelector(".derouleEP")
const eP = document.querySelector(".eP")
derouleEP.addEventListener("click", function() {
    eP.classList.toggle("d-none");
    if (eP.classList.contains("d-none")) {
        derouleEP.innerHTML = '<i class="bi bi-arrow-down-circle"></i>';
    } else {
        derouleEP.innerHTML = '<i class="bi bi-arrow-up-circle"></i>';
    }
})

const derouleE = document.querySelector(".derouleE")
const e = document.querySelector(".education")
derouleE.addEventListener("click", function() {
    e.classList.toggle("d-none");
    if (e.classList.contains("d-none")) {
        derouleE.innerHTML = '<i class="bi bi-arrow-down-circle"></i>';
    } else {
        derouleE.innerHTML = '<i class="bi bi-arrow-up-circle"></i>';
    }
})

const derouleIL = document.querySelector(".derouleIL")
const iL = document.querySelector(".iL")
derouleIL.addEventListener("click", function() {
    iL.classList.toggle("d-none");
    if (iL.classList.contains("d-none")) {
        derouleIL.innerHTML = '<i class="bi bi-arrow-down-circle"></i>';
    } else {
        derouleIL.innerHTML = '<i class="bi bi-arrow-up-circle"></i>';
    }
})