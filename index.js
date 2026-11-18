const container = document.querySelector(".container")

for (let i = 1; i < 273; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("childdiv")
}