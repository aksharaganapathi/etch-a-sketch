function createGrid(num){
    for(let i = 0; i < num; i++){
        let div = document.createElement("div");
        div.classList.add("test");
        div.classList.add("identity");
        div.addEventListener("mouseover", function(){
                div.classList.remove("test");
                div.classList.add("hover");
            });

        document.getElementById("container").style.gridTemplateRows = "repeat(" + Math.sqrt(num) + "," + (500 / Math.sqrt(num) + "px)");
        document.getElementById("container").style.gridTemplateColumns = "repeat(" + Math.sqrt(num) + "," + (500 / Math.sqrt(num) + "px)");
        document.getElementById("container").appendChild(div);
    }
}

document.getElementById("btn").addEventListener("click", function(){
    let val = prompt("How many rows/colums? (1 to 100)");

    if(val > 100 || val <= 0 || isNaN(val)){
        alert("Invalid value");
        return;
    }

    let arr = document.getElementsByClassName("identity");

    while(arr.length > 0){
        arr[0].remove();
    }

    createGrid(val * val);
});

createGrid(256);
