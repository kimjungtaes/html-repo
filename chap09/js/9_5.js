document.addEventListener("DOMContentLoaded",()=>{
    //객체참조 변수선언 및 카운터 변수선언
   const img = document.querySelector("img")
   let count = 0;
    //1.문자열 배열객체 생성
    let srcArray = ["media/Penguins.png", 
             "media/Lighthouse.png",
             "media/Chrysanthemum.png",
             "media/Desert.png",
             "media/Hydrangeas.png",
             "media/Jellyfish.png",
             "media/Koala.png",
             "media/Tulips.png"];
    //2.이미지 객체배열 저장
    let imgArray = newArray()
    for(let i = 0; i < srcArray.length; i++){
        imgArray[i] = new Image()
        imgArray[i].src = srcArray[i];
    }
    //3.img 이벤트 리스너 등록및 핸들러 처리
    img.addEventListener("click",()=>{
        count++
        count %= srcArray.length
       img.src = imgArray[count].src
       img.addEventListener("load", () => {
        let imgInfo = `width = ${img.width} height = ${img.height}`
       const div =  document.querySelector("div");
       div.innerHTML = imgInfo
             })
    })
   
})