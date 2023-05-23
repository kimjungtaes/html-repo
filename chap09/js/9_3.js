//1번째 방법
window.onload =()=>{}


document.addEventListener("DOMContentLoaded",()=>{
    document.oncontextmenu = ()=>{
        alert("우클릭 금지를 진행합니다");
        return false
    }
})

