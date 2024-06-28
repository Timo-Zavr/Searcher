const input = document.querySelector(".search_input");
const button = document.querySelector(".search_button");
const select = document.querySelector(".search_select");

button.addEventListener("click", submitRequest);

function submitRequest(event){
    event.preventDefault();

    const value = input.value;
    const Engine = select.value;
    
    let params;

    if (value){
        if (Engine === "Yandex"){
            params = "search?text=";
        } else if (Engine === "Google" || Engine === "Bing"){
            params = "search?q=";
        } else if (Engine === "DuckDuckGo"){
            params = "?q=";
        }
    
        window.location.href = `https://www.${Engine}.com/${params}` + value;
    }
}