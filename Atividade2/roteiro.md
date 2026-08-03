# Roteiro prático — Canvas e SVG

## Tempo estimado

De 2 a 3 horas.

## Objetivo

Construir um painel gráfico que permita comparar, na prática, duas tecnologias nativas da Web:

- **Canvas:** desenho baseado em pixels realizado por JavaScript;
- **SVG:** desenho vetorial formado por elementos independentes no DOM.

Trabalhe na pasta `atividade`. A pasta `solucao` deverá ser aberta somente depois de todas as tentativas.

---

## Etapa 1 — Conhecer os arquivos

Abra `atividade/index.html` e identifique:

- a tag `<canvas>`;
- a tag `<svg>`;
- os arquivos JavaScript carregados no final da página;
- os elementos marcados com comentários `TODO`.

Execute a página antes de alterar o código. Observe que as áreas estão vazias ou incompletas.

---

## Etapa 2 — Preparar o Canvas

No arquivo `atividade/js/canvas.js`:

1. localize o elemento com `document.getElementById("tela")`;
2. obtenha o contexto com `getContext("2d")`;
3. confirme no console que as variáveis foram criadas.

Responda:

1. Qual é a função do elemento `<canvas>`?
2. Por que precisamos do contexto `2d`?
3. Onde está a coordenada `(0, 0)`?

---

## Etapa 3 — Desenhar o fundo e o título

Use:

```javascript
ctx.fillStyle = "cor";
ctx.fillRect(x, y, largura, altura);
```

Crie um fundo claro ocupando toda a tela.

Depois, escreva o título usando:

```javascript
ctx.font = "28px Arial";
ctx.fillStyle = "cor";
ctx.fillText("Desempenho dos serviços", x, y);
```

Teste diferentes valores de `x` e `y`.

---

## Etapa 4 — Criar eixos e linhas

Desenhe os eixos do gráfico utilizando:

```javascript
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
```

Requisitos:

- eixo vertical;
- eixo horizontal;
- cor escura;
- espessura mínima de 2 pixels.

---

## Etapa 5 — Criar um gráfico de barras

Use os valores:

```javascript
const valores = [120, 180, 90, 210];
const rotulos = ["Site", "API", "Banco", "Rede"];
```

Crie quatro barras com um laço `for`.

Cada barra deverá apresentar:

- altura proporcional ao valor;
- espaçamento uniforme;
- valor numérico acima da barra;
- rótulo abaixo da barra.

---

## Etapa 6 — Adicionar círculo e gradiente

Desenhe um círculo indicador:

```javascript
ctx.beginPath();
ctx.arc(x, y, raio, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
```

Depois, crie um gradiente linear e aplique-o às barras:

```javascript
const gradiente = ctx.createLinearGradient(0, 0, 0, 250);
gradiente.addColorStop(0, "#60a5fa");
gradiente.addColorStop(1, "#1d4ed8");
```

---

## Etapa 7 — Criar o SVG

No arquivo `atividade/index.html`, complete o SVG usando:

- `<rect>` para o cartão;
- `<circle>` para o símbolo principal;
- `<line>` para conexões;
- `<polygon>` para um detalhe;
- `<text>` para o nome do sistema.

Aplique `fill`, `stroke` e `stroke-width`.

---

## Etapa 8 — Manipular o SVG pelo DOM

No arquivo `atividade/js/svg.js`:

1. localize o círculo pelo ID;
2. adicione um evento de clique;
3. alterne a cor entre azul e laranja;
4. altere o texto de estado.

Explique por que é possível localizar diretamente o círculo SVG, mas não uma barra já desenhada no Canvas.

---

## Etapa 9 — Testar redimensionamento

Aumente o zoom do navegador para 200% ou 400%.

Observe:

- o comportamento visual do Canvas;
- a nitidez das formas SVG;
- a diferença entre pixels e vetores.

---

## Etapa 10 — Conferência

Antes de abrir `solucao/index.html`, verifique:

- [ ] o Canvas possui fundo, título, eixos e quatro barras;
- [ ] as barras usam gradiente;
- [ ] há um círculo desenhado no Canvas;
- [ ] o SVG possui retângulo, círculo, linhas, polígono e texto;
- [ ] o círculo SVG muda de cor ao ser clicado;
- [ ] não há erros no console;
- [ ] os arquivos estão organizados e indentados.

Depois, compare sua implementação com a solução. Uma solução diferente também pode estar correta, desde que cumpra os requisitos.

---

## Questões finais

1. Qual tecnologia mantém cada forma como um objeto no DOM?
2. Qual tecnologia exige que a cena seja redesenhada para mover um elemento?
3. Em qual tecnologia você criaria um logotipo responsivo?
4. Em qual tecnologia você criaria uma animação com centenas de partículas?
5. Qual foi a maior dificuldade encontrada?
