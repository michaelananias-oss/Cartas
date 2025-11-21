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

        const temFiltroDeCategoria = categoriaSelecionada !== ""
        const cartaNãoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase()

        if (temFiltroDeCategoria && cartaNãoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDeTipo = tipoSelecionada !== ""
        const cartaNaoBateComFiltroDeTipo = tipoSelecionada.toLowerCase() !== tipoCarta.toLowerCase()

        if(temFiltroDeTipo && cartaNaoBateComFiltroDeTipo){
            mostrarCarta = false;
        }

        const temFiltroDeExtra = extraSelecionada !== ""
        const cartaNaoBateComFiltroDeExtra = extraSelecionada.toLowerCase() !== extraCarta.toLowerCase() 

        if(temFiltroDeExtra && cartaNaoBateComFiltroDeExtra){
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionada !== ""
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionada) || parseFloat(precoCarta) < parseFloat(precoMaximoSelecionada)

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        const temFiltroDeAnimeOuNome = animeOuNomeCartaEscolhida !== ""
        const cartaNaoBateComFiltroDeAnimeOuNome = animeOuNomeCartaEscolhida.toLowerCase() !== animeCarta.toLowerCase() 
        && animeOuNomeCartaEscolhida.toLowerCase() !== nomeCarta.toLowerCase() 


        if(temFiltroDeAnimeOuNome && cartaNaoBateComFiltroDeAnimeOuNome) {
            mostrarCarta = false;
        }


        if (mostrarCarta) {
            carta.classList.add("mostrar");
            carta.classList.remove("esconder");

        } else {
            carta.classList.add("esconder");
            carta.classList.remove("mostrar")
        }
        



    });
});