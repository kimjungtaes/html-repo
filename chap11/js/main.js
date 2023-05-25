document.addEventListener("DOMContentLoaded",()=>{
    //1.객체 변수 선언
    const slideshow = document.querySelector(".slideshow")
    const slideshow_slides = document.querySelector(".slideshow_slides")
    const slideArray = document.querySelectorAll(".slideshow_slides a")
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")
    const indicatorArray = document.querySelectorAll(".indicator a")
    let currentIndex = 0
    let intervalID = null
    const SLIDE_COUNT = slideArray.length

    //2.기능 슬라이드 사진을 일렬로 배치
    for(i = 0; i<slideArray,length; i++){
        slideArray[i].style.left = `${i*100}%`
    }
    //2-2.맨처음 슬라이드
    gotoslide(0)
    //2-3.자동 슬라이드로 전환 타이머설정(3초마다)
    startInterval()

    //3.이벤트 리스너 등록및 핸들러처리
    //3-1 prev,next  기능설정
    prev.addEventListener("click", (e)=>{
        e.preventDefault()
        if(currentIndex == 0){
            currentIndex = 3
        }else{
            currentIndex = currentIndex -1
        }
    gotoslide(currentIndex)
    })
    next.addEventListener("click", (e)=>{
        e.preventDefault()
        if(currentIndex == 3){
            currentIndex = 0
        }else{
            currentIndex = currentIndex + 1
        }
       gotoslide(currentIndex)
    })
    //3-2 indicator 이벤트 리스너 등록및 핸들러 처리
    indicatorArray.forEach((indicator, index)=>{
        indicator.addEventListener("click",(e)=>{
            e.preventDefault();
          gotoslide(index)
        })
    })
    //3-3. 슬라이드영역에 마우스가 enter 이벤트 리스너 및 핸들러
    slideshow.addEventListener("mouseenter",()=>{
        clearInterval(intervalID)
    }) 
    slideshow.addEventListener("mouseleave",()=>{
       startSetInterval()
    }) 

    //4-1함수처리(슬라이드 변환)
function gotoslide(index){
    currentIndex = index
  slideshow_slides.style.left =`${currentIndex*-100}%`
 indicatorArray.forEach((indicator)=>{
    indicator.classList.remove('active')
 })
 indicatorArray[currentIndex].classList.add('active')
}
    //4-2 자동타이머 설정(setInterval)
    function startInterval(){
     intervalID = setInterval(() => {
        let index = (currentIndex + 1) % SLIDE_COUNT
        gotoslide(index)   
        }, 3000);
    }

})