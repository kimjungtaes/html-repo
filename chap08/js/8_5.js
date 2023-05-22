function divCreate(){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<strong>div</strong> 태그가 만들어졌어요"
    newDiv.style.color = "red";
    newDiv.style.backgroundColor = "yellow";
    newDiv.setAttribute("class" , "newdivClass");
    newDiv.style.border = "1px dotted red";
    newDiv.style.width = "300px";
    newDiv.style.height = "200px";
    newDiv.style.margin = "10px";

    let p = document.querySelector("#ptag");
    p.appendChild(newDiv);
}

function divDelete(){
    const div = document.querySelector(".newdivClass");
    const pTag = div.parentElement;
    div.remove();
    pTag.removeChilld(newDiv);
}