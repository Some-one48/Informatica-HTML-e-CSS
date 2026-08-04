// ETAPA 1 — Localize o círculo SVG com id="simbolo".
const simbolo = document.getElementById("simbolo");

// ETAPA 2 — Localize o parágrafo com id="estado".
const estado = document.getElementById("estado");

// ETAPA 3 — Crie uma variável booleana para controlar a cor atual.
let bool = false;

function ativar(){
    bool = !bool;

    if (bool == true){
        simbolo.setAttribute("fill", "darkorange");
        estado.textContent = "O símbolo está laranja";
    }else{
        simbolo.setAttribute("fill", "blue");
        estado.textContent = "O símbolo está azul";
    }
}

// ETAPA 4 — Adicione um evento de clique ao círculo.
// No clique, alterne o atributo fill entre azul e laranja.
// Atualize também a mensagem exibida no elemento estado.
simbolo.addEventListener("click", ativar);
