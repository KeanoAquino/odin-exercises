const form = document.querySelector("form");
const textbox = document.querySelector("#item");
const list = document.querySelector("#shopping-list");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = document.createElement("li");
    item.textContent = textbox.value;
    list.appendChild(item);

    const delbutton = document.createElement("button");
    delbutton.textContent = "Delete";
    delbutton.classList.add("delete");
    item.appendChild(delbutton);

    textbox.value = "";
    textbox.focus();
})

list.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})