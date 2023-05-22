function divCreate(){
    let newDiv = document.createElement("div");
    newDiv.style.color = "blue";
    newDiv.style.backgroundColor = "yellow";
    newDiv.innerHTML = "<strong>새로생성된</strong>DIV입니다";
    newDiv.setAttribute("class", "newdivClass");
    newDiv.style.border = "1px dotted black";
    newDiv.style.width = "200px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.onclick = divdelete;
    let body = document.querySelector("body");
    body.appendChild(newDiv);

}
function divdelete(){
   const newdiv = document.querySelector(".newdivClass");
   const parent = newdiv.parentElement;
   parent.removeChild(newdiv);
}