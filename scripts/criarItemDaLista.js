import gerarDiaDaSemana from "../gerarDiaDaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");

    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "✕";
    botaoRemover.classList.add("item-lista-button");

    botaoRemover.addEventListener("click", function () {
        itemDaLista.remove();
        verificarListaVazia(listaDeCompras);
    });

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }

        const checkboxes = listaDeCompras.querySelectorAll(
            'input[type="checkbox"]'
        );

        const todosMarcados = [...checkboxes].every(
            (checkbox) => checkbox.checked
        );

        if (todosMarcados) {
            listaDeCompras.innerHTML = "";
            verificarListaVazia(listaDeCompras);
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoRemover);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);

    return itemDaLista;
}