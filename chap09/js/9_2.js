document.addEventListener("DOMContentLoaded", (e)=>{
    //객체참조변수
  const body = document.querySelector("body");
   const button = document.querySelector("#btn");
   const div = document.querySelector("div");
   //이벤트 리스너 등록
   body.addEventListener("click", (e)=>{
    const obj = e.currentTarget
    let tagName = obj.tagName
    let eventType = e.type
    div.innerHTML = `캡쳐단계: ${tagName} tag ${eventType} event <br>`;
   }, true);
   body.addEventListener("click", bubbleEvent,false); 
   button.addEventListener("click",bubbleEvent, false); 
})
//이벤트 핸들러(버블처리방식)
function bubbleEvent(e){
    const obj = e.currentTarget
    let tagName = obj.tagName
    let eventType = e.type
    div.innerHTML += `버블단계: ${tagName} tag ${eventType} event <br>`;
}