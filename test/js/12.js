function init(){
   const button = document.querySelector("button");
   button.addEventListener("click", function(e){
    let text = `type:${e.type} +<br>
    target: + ${e.target} + <br>
    currentTarget: + ${e.currentTarget} + <br>
    defaultPrevented:  + ${e.defaultPrevented}`;
     const p = document.querySelector("p");
     p.innerHTML = text;
   });
}
