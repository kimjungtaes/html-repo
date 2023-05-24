
document.addEventListener("DOMContentLoaded", ()=>{
    //객체변수선언
    const h2 = document.querySelector("h2")
        //기능
    setInterval("autoScroll()", 1000)
    //이벤트 등록 및 핸들러처리
    h2.addEventListener("click", ()=>{
        window.print()
    })
    //회사로고를 보여주는 기능구현
    window.addEventListener("beforeprint",()=>{
        const div = document.querySelector("#printlogo") 
        printlogo.style.display = "block"
    })
    //회사로고를 안보여주는 기능구현
    window.addEventListener("afterprint",()=>{
        const div = document.querySelector("#printlogo") 
        printlogo.style.display = "none"
    })
})
function autoScroll(){
    window.scrollBy(0, 10)
}