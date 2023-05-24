document.addEventListener("DOMContentLoaded",()=>{
    //1.객체 변수 선언
    const slideshow = document.querySelector(".slideshow")
    const slideshow_slides = document.querySelector(".slideshow_slides")
    const slideArray = document.querySelectorAll(".slideshow_slides a")
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")
    const indicatorArray = document.querySelectorAll("indicator")
    let currentIndex = 0

    //2.기능 슬라이드 사진을 일렬로 배치
    for(i = 0; i<slideArray,length; i++){
        slideArray[i].style.left = `${i*100}%`
    }

    //3.이벤트 리스너 등록및 핸들러처리
    //3-1 prev,next  기능설정
    prev.addEventListener("click", ()=>{
        if(currentIndex == 0){
            currentIndex = 3
        }else{
            currentIndex = currentIndex -1
        }
     slideshow_slides.style.left =`${currentIndex*-100}%`
    })
    next.addEventListener("click", ()=>{
        if(currentIndex == 3){
            currentIndex = 0
        }else{
            currentIndex = currentIndex + 1
        }
          slideshow_slides.style.left =`${currentIndex*-100}%`
    })
})