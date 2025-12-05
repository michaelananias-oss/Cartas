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
        const temFiltroDeCategoria = categoriaSelecionada !== "";
        const cartaNaoBateComFiltroDeCategoria =
            categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        // Tipo
        const temFiltroDeTipo = tipoSelecionada !== "";
        const cartaNaoBateComFiltroDeTipo =
            tipoSelecionada.toLowerCase() !== tipoCarta.toLowerCase();

        if (temFiltroDeTipo && cartaNaoBateComFiltroDeTipo) {
            mostrarCarta = false;
        }

        // EXTRA (AGORA ACEITA LISTA SEPARADA POR VÍRGULA)
        const temFiltroDeExtra = extraSelecionada !== "";

        let extrasDaCarta = [];
        if (extraCarta) {
            extrasDaCarta = extraCarta
                .split(",")           // separa por vírgula
                .map(e => e.trim().toLowerCase()); // remove espaços e deixa minúsculo
        }

        const cartaNaoBateComFiltroDeExtra =
            !extrasDaCarta.includes(extraSelecionada.toLowerCase());

        if (temFiltroDeExtra && cartaNaoBateComFiltroDeExtra) {
            mostrarCarta = false;
        }

        // Preço
        const temFiltroDePreco = precoMaximoSelecionada !== "";
        const cartaNaoBateComFiltroDePrecoMaximo =
            parseFloat(precoCarta) > parseFloat(precoMaximoSelecionada) ||
            parseFloat(precoCarta) < parseFloat(precoMaximoSelecionada);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        // Anime ou Nome
        const temFiltroDeAnimeOuNome = animeOuNomeCartaEscolhida !== "";
        const cartaNaoBateComFiltroDeAnimeOuNome =
            animeOuNomeCartaEscolhida.toLowerCase() !== animeCarta.toLowerCase() &&
            animeOuNomeCartaEscolhida.toLowerCase() !== nomeCarta.toLowerCase();

        if (temFiltroDeAnimeOuNome && cartaNaoBateComFiltroDeAnimeOuNome) {
            mostrarCarta = false;
        }

        // Mostrar ou Esconder
        if (mostrarCarta) {
            carta.classList.add("mostrar");
            carta.classList.remove("esconder");

        } else {
            carta.classList.add("esconder");
            carta.classList.remove("mostrar");
        }
    });
});

/*
document.querySelectorAll(".abrir-popup").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const imagem = this.getAttribute("data-imagem");
        document.getElementById("popup-imagem").src = imagem;

        document.getElementById("popup-pertence").style.display = "flex";
    });
});

document.querySelector(".popup-fechar").addEventListener("click", function () {
    document.getElementById("popup-pertence").style.display = "none";
});

// Fechar clicando no fundo
document.getElementById("popup-pertence").addEventListener("click", function (e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});
*/

const popup = document.getElementById("popup-pertence");
const container = document.getElementById("popup-imagens");
const botaoFechar = document.querySelector(".popup-fechar");

document.querySelectorAll(".abrir-popup").forEach(botao => {
    botao.addEventListener("click", () => {
        
        container.innerHTML = ""; // limpa antes de abrir

        const lista = botao.dataset.imagem.split(",");  
        // ex: data-imagem="img1.jpg,img2.jpg,img3.jpg"

        lista.forEach(src => {
            const img = document.createElement("img");
            img.src = src.trim();
            container.appendChild(img);
        });

        popup.style.display = "flex";
    });
});

botaoFechar.addEventListener("click", () => {
    popup.style.display = "none";
});

document.getElementById("popup-pertence").addEventListener("click", function (e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});
