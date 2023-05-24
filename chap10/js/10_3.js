//전역변수 객체변수 선언
let setIntervalID = null
let span = null
document.addEventListener("DOMContentLoaded", ()=>{
    //객체변수값저장
    span = document.querySelector("span")
    //기능처리
  setIntervalID = setInterval("spanRotate()",200) 
  //이벤트 리스너 등록및 핸들러 처리
  span.addEventListener("click", ()=>{
    clearInterval(setIntervalID)
  })
})

//함수선언
function spanRotate(){
   let str = span.innerHTML
   let firstChar = str.substr(0,1)
   let remainChars = str.substr(1, str.length - 1)
   str = remainChars + firstChar
   span.innerHTML =str
}