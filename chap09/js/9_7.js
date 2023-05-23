document.addEventListener("DOMContentLoaded",()=>{
    let kcity = document.querySelectorAll("input[name=city]");
    const btn = document.querySelector("input[type=button]");
    let found = null;
    btn.addEventListener("click",()=>{
        for(let i = 0; i<kcity.length; i++){
            if(kcity[i].checked === true){
                found = kcity[i];
            }
        }         
        if(found != null){
            alert(found.value + "이 선택되었음");
        }else{
            alert("선택된것이 없음");
        }
    })
    
})
       
