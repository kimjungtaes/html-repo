function init(){
    //button을 6번방식으로 처리 
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", function(e){
        alert(`이벤트 타입:${e.type}`);
    });
    //4번방식
    const p =document.querySelector("p");
    p.onmouseover = function(e){
        alert(`이벤트 타입:${e.type}`);
    }
}