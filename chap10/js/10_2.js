let windowID = null
document.addEventListener("DOMContentLoaded",()=>{
//객체참조변수 선언
const img =  document.querySelector("img")
const button = document.querySelector("button")
let timerID = null
//이벤트 리스너 등록및 핸들러 처리
img.addEventListener("click", ()=>{
 timerID = setTimeout("windowLoad('http://www.naver.com')", 5000)
})
button.addEventListener("click", ()=>{
    if(timerID != null){
        clearTimeout(timerID)
    }
    if(windowID != null || windowID.closed){
    }
        windowID.close()
    })
})
//3.함수
function windowLoad(url){
  windowID = window.open(url, "kim", "top =100, left =100, whdth=300, height=300")
}