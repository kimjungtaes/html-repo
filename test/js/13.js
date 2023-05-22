function init(){
    const check = document.querySelector("#kk");
    check.addEventListener("click", function(e){
       e.preventDefault();
    });
    //이벤트 핸들러 처리한다음 리턴값을 받지 않는다
   
    // a.onclick = function(){
    //     let result = confirm("naver 갈까요?")
    //     return result;
    // }
    }
function asd(){
   let value =  confirm("네이버로 이동하시겠습니까?");
    return value;
}
