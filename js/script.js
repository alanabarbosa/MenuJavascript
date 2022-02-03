const selectValue = document.querySelector("#SelectOption");
const produtoDisplay = document.querySelector(".product");
const boxProduto = document.querySelector(".Pedido");
const innerProductBox = boxProduto.getElementsByTagName("div");

selectValue.addEventListener("change", () => {
    valueSelect = selectValue.options[selectValue.selectedIndex].value;
    removeBox()
    showBox(selectValue.selectedIndex);
    produtoDisplay.innerText = valueSelect;
});

function removeBox() {
    for (let div of innerProductBox) {
        div.style.display = "none";
    }
}

function showBox(index) {
    const currentBox = boxProduto.children[index - 1];
    currentBox.style.display = "block";
}