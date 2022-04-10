let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont  = document.querySelector(".address-row-cont");
let cellscont = document.querySelector(".cells-cont");

for(let i=0; i<rows; i++){
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class","address-col");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}

for(let i=0; i<cols; i++){
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class","address-row");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressRow);
}


for(let i=0; i<rows; i++){
    let rowcont = document.createElement("div");
    rowcont.setAttribute("class","row-cont");
    for(let j=0; j<cols; j++){
       let cell = document.createElement("div");
       cell.setAttribute("class","cell");
       cell.setAttribute("contenteditable","true");
       rowcont.appendChild(cell);
    }
    cellscont.appendChild(rowcont);
}




