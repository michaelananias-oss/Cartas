// ================================
// FILTRO DE CARTAS (ORIGINAL)
// ================================
const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", function () {
    const categoriaSelecionada = document.querySelector("#categoria").value;
    const tipoSelecionada = document.querySelector("#tipo").value;
    const extraSelecionada = document.querySelector("#extra").value;
    const precoMaximoSelecionada = document.querySelector("#preco").value;
    const animeOuNomeCartaEscolhida = document.querySelector("#anime").value;
    const cartas = document.querySelectorAll(".carta");

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const extraCarta = carta.dataset.extra;
        const precoCarta = carta.dataset.preco;
        const animeCarta = carta.dataset.anime;
        const nomeCarta = carta.dataset.personagem;
        const tipoCarta = carta.dataset.tipo;

        let mostrarCarta = true;

        // Categoria
        if (categoriaSelecionada &&
            categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase()) {
            mostrarCarta = false;
        }

        // Tipo
        if (tipoSelecionada &&
            tipoSelecionada.toLowerCase() !== tipoCarta.toLowerCase()) {
            mostrarCarta = false;
        }

        // Extra (lista separada por vírgula)
        if (extraSelecionada) {
            const extrasDaCarta = extraCarta
                ? extraCarta.split(",").map(e => e.trim().toLowerCase())
                : [];

            if (!extrasDaCarta.includes(extraSelecionada.toLowerCase())) {
                mostrarCarta = false;
            }
        }

        // Preço
        if (precoMaximoSelecionada) {
            if (parseFloat(precoCarta) !== parseFloat(precoMaximoSelecionada)) {
                mostrarCarta = false;
            }
        }

        // Anime ou Nome
        if (animeOuNomeCartaEscolhida) {
            const busca = animeOuNomeCartaEscolhida.toLowerCase();
            if (
                busca !== animeCarta.toLowerCase() &&
                busca !== nomeCarta.toLowerCase()
            ) {
                mostrarCarta = false;
            }
        }

        // Mostrar / esconder
        carta.classList.toggle("mostrar", mostrarCarta);
        carta.classList.toggle("esconder", !mostrarCarta);
    });
});

// ================================
// POP-UP (COMPARTILHADO)
// ================================
const popup = document.getElementById("popup-pertence");
const container = document.getElementById("popup-imagens");
const botaoFechar = document.querySelector(".popup-fechar");

function abrirPopupComImagens(listaImagens) {
    container.innerHTML = "";

    listaImagens.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        container.appendChild(img);
    });

    popup.style.display = "flex";
}

// ================================
// BOTÕES (ORIGINAIS)
// ================================
document.querySelectorAll(".abrir-popup").forEach(botao => {
    botao.addEventListener("click", () => {
        const lista = botao.dataset.imagem.split(",");
        abrirPopupComImagens(lista);
    });
});

document.querySelectorAll(".abrir-popup-desenvolvedor").forEach(botao => {
    botao.addEventListener("click", () => {
        const lista = botao.dataset.imagem.split(",");
        abrirPopupComImagens(lista);
    });
});

// ================================
// 3 CLIQUES NA IMAGEM DO CARD (NOVO)
// ================================
document.querySelectorAll(".card-imagem").forEach(imgCard => {
    let cliques = 0;
    let timer;

    imgCard.addEventListener("click", () => {
        cliques++;

        clearTimeout(timer);
        timer = setTimeout(() => {
            cliques = 0;
        }, 600);

        if (cliques === 3) {
            const lista = imgCard.dataset.imagens.split(",");
            abrirPopupComImagens(lista);
            cliques = 0;
        }
    });
});

// ================================
// FECHAR POP-UP
// ================================
botaoFechar.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", function (e) {
    if (e.target === this) {
        popup.style.display = "none";
    }
});
