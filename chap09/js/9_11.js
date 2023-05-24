document.addEventListener("DOMContentLoaded",()=>{
    //1.객체참조변수선언
    let position = 0
        const tdArray =  document.querySelectorAll("td")
   tdArray[position].style.backgroundColor = "orchid"
   
   //이벤트 리스너 등록및 핸들러처리
   window.addEventListener("keydown",(e)=>{
    앞위치 = position
   switch (e.key) {
    case "ArrowDown":
        if(position/3 >= 2) { return }
        position += 3
      break;
    case "ArrowUp":
        if(position/3 <= 0) { return }
        position -= 3
    break;
    case "ArrowLeft":
        if(position % 3 === 0) { return }
        position --
    break;
    case "ArrowRight":
        if(position % 3 === 2) { return }
        position ++
        break;
      }//end of switch
      tdArray[position].style.backgroundColor = "orchid"
      tdArray[앞위치].style.backgroundColor = "white"
      앞위치 = 0

   })
})
//핸들러 함수