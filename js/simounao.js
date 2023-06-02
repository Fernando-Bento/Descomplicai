const soun = [
    "Não",
    "Definitivamente não",
    "Quem sabe",
    "Só se...",
    "Talvez",
    "Com toda a certeza do mundo, SIMMM!!",
    "Sim",
]

const decidir = document.querySelector("#decidir")

const texto = document.querySelector("#texto")

const bord = document.querySelector("#resultado")

function simounao(){

    let son = Math.floor(Math.random() * (soun.length - 0)) + 0

    texto.innerHTML = `Minha resposta é um ${soun[son]}`

    if(son === 0 || son === 1){
        bord.style.boxShadow = "inset 10px 10px 10px black, inset -1px -1px 5px red"
    }else if(son === 2 || son === 3 || son === 4){
        bord.style.boxShadow = "inset 10px 10px 10px black, inset -1px -1px 5px yellow"
    }else{
        bord.style.boxShadow = "inset 10px 10px 10px black, inset -1px -1px 5px green"
    }
    
}