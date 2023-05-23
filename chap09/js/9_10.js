document.addEventListener("DOMContentLoaded",()=>{
    let str = "";
    const div =  document.querySelector("#div");
    const text = document.querySelector("#text");
    text.addEventListener("keydown",(e)=>{
        div.innerHTML = "";
        str += "e.key = " + e.key+ "<br>";
        str += "e.code = " + e.code+ "<br>";
        div.innerHTML = str;
    })
})


