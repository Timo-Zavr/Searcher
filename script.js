const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener("click", submitRequest);

function submitRequest(event){
    event.preventDefault();

    const value = input.value;
    const Engine = select.value;
    let params;

    if (value){
        if (Engine === "yandex"){
            params = "search?text=";
        } else if (Engine === "google" || Engine === "bing"){
            params = "search?q=";
        } else if (Engine === "duckduckgo"){
            params = "?q=";
        }

        window.location.href = `https://www.${Engine}.com/${params}` + value;
    }
}