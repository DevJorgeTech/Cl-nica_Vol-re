const consulta = document.getElementById("consulta")
const menu = document.getElementById("menu")
control = 0

consulta.addEventListener("click", function(){
    menu.style.display = "block"
    control++

    if (control == 2){
        menu.style.display = "none"
        control = 0
    } else {
        menu.style.display = "block"
    }
})