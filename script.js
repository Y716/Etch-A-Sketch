const container = document.querySelector(".container");
rect = container.getBoundingClientRect()
console.log("Width: " + container.clientWidth + "px");
console.log("Height: " + container.clientHeight+ "px");
// container.textContent = "Container"
gridSize = 16;
generateGrid();

function generateGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    for (let index = 0; index < gridSize*gridSize; index++) {
        const div = document.createElement("div");
        div.style.width = container.clientWidth/gridSize + "px";
        div.style.height = container.clientHeight/gridSize + "px";
        div.onmouseover = function(){
            div.style.backgroundColor = "white";
        }
        // console.log("Width: " + div.style.width + "px");
        console.log("Height: " + div.style.height+ "px");
        container.appendChild(div)
    }
}


const button = document.querySelector("button");

button.addEventListener("click", () => {
    newGridSize = prompt("Enter your size", gridSize);
    if(newGridSize > 100){
        alert("The Size is too big!")
    }else{
        gridSize = newGridSize;
        generateGrid();
    }
    
})

