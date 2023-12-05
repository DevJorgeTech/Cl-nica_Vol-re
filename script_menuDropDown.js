const consulta = document.getElementById("consulta")
const menu = document.getElementById("menu")
control = 0

consulta.addEventListener("click", function(){
    menu.style.display = "block"
    rodarIcone()
    control++
    
    if (control == 2){
        menu.style.display = "none"
        control = 0
    } else {
        menu.style.display = "block"
    }
})

function rodarIcone(){
    const icone1 = document.getElementById("icone1")
    icone1.classList.toggle("rodando"); // Realiza alterações de classe (Incluir e excluir) 
    // se a classe existir no elemento ele exclui se não existir ele inclui
}