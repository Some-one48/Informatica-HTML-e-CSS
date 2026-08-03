// ETAPA 1 — Localize o Canvas e obtenha o contexto 2D.
const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

// Dados que deverão ser representados no gráfico.
const valores = [120, 180, 90, 210];
const rotulos = ["Site", "API", "Banco", "Rede"];

// ETAPA 2 — Desenhe um fundo claro em toda a área.
// Dica: use fillStyle e fillRect.
ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, 600, 400);

// ETAPA 3 — Escreva o título "Desempenho dos serviços".
// Dica: use font, fillStyle e fillText.
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Desempenho dos serviços", 180, 30);

// ETAPA 4 — Desenhe os eixos horizontal e vertical.
// Dica: use beginPath, moveTo, lineTo e stroke.
const baixo = 355;

ctx.beginPath();
ctx.moveTo(30,baixo);
ctx.lineTo(570,baixo);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30,60);
ctx.lineTo(30,380);
ctx.stroke();

// ETAPA 5 — Crie um gradiente vertical para preencher as barras.
// Dica: use createLinearGradient e addColorStop.


// ETAPA 6 — Use um laço for para desenhar as quatro barras.
// Cada barra deve apresentar valor numérico e rótulo.
for(let i = 0; i < 4; i++){
    ctx.beginPath();
    ctx.fillRect(50+(60*i), baixo, 40, valores[i]*-1);
    ctx.fillStyle = "red";
    
    ctx.beginPath();
    let b = baixo;
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(rotulos[i], 53+(60*i), b+25);
}

// ETAPA 7 — Desenhe um círculo indicador no canto superior direito.
// Dica: use arc com ângulo final igual a 2 * Math.PI.

// ETAPA 8 — Escreva ao lado do círculo a legenda "Sistema ativo".
