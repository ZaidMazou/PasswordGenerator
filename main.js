const alpha = "azertyuiopqsdfghjklmwxcvbn"
const Alpha = alpha.toUpperCase()
const alphanul = "&é(§è!çà)-$=:;,<>£*#@?«¡Çø“ë{}Çç€Ùµâîê"
const number = "0123456789"

const range = document.getElementById("range")
const rangeLabel = document.getElementById("range-label")

const chkNumber = document.getElementById("number")
const chkalpha = document.getElementById("alpha")
const chkAlpha = document.getElementById("Alpha")
const chkcs = document.getElementById("carateralphanum")

const progessbar = document.querySelector('.progressbar')
const btn = document.querySelector(".btn")
const affiche = document.getElementById("affiche")
const reset = document.getElementById("reset")
const copy = document.getElementById("copy")

let data = ""
let counter = 0
let password = ""

function progress(counter) {
    counter < 0 ? counter = 0 : 
    counter >4 ? counter = 4 :
    progessbar.style.width = `${counter * 25}%`
    counter < 2 ? progessbar.style.background = "#f45858" : progessbar.style.background = "#4de757"
}

function checking(param , param2) {
    param.addEventListener("input",()=>{
        if (param.checked) {
            counter ++
            data += param2
            progress(counter)
        }else{
            counter --
            progress(counter)
        }
    })
}

checking(chkcs , alphanul)
checking(chkNumber , number)
checking(chkAlpha , Alpha)
checking(chkalpha , alpha)


function generator() {
    if (data.length > 0) {
        for (let index = 0; index < range.value; index++) {
            password += data[Math.floor(Math.random()*data.length)]
        }
    }else{
        alert("Vous devez choisir des caractères")
    }
    affiche.value = password
     
}

btn.addEventListener('click',generator)
reset.addEventListener("click" ,()=>{
    location.reload()
})
copy.addEventListener("click",()=>{
    if (password.length == 0) {
        alert("pas de mot de passe généré")
    }else{
       affiche.select()
       document.execCommand("copy")
       alert('Mot de passe copié !')
    }
})
