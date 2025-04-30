const container = document.querySelector(".container");
rect = container.getBoundingClientRect()
console.log("Width: " + container.clientWidth + "px");
console.log("Height: " + container.clientHeight+ "px");
// container.textContent = "Container"
for (let index = 0; index < 16*16; index++) {
    const div = document.createElement("div");
    div.style.width = container.clientWidth/16 + "px";
    div.style.height = container.clientHeight/16 + "px";
    // console.log("Width: " + div.style.width + "px");
    console.log("Height: " + div.style.height+ "px");
    container.appendChild(div)
}