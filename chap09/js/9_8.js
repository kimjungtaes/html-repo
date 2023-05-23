document.addEventListener("DOMContentLoaded",()=>{
    //객체참조변수 선언
    const chkHap = document.querySelector("input[name=hap]")
    const chkshose = document.querySelector("input[name=shose]")
    const chkbag = document.querySelector("input[name=bag]")
    //======================================
    const chkArray = document.querySelectorAll("input[type=checkbox]")
    const sumtext = document.querySelector("#sumtext")
    let sum = 0
    //이벤트 리스너 등록 및 핸들러처리
    // chkHap.addEventListener("click",()=>{
    //     if(chkHap.checked === true){
    //         sum +=Number (chkHap.value)
    //     }else{
    //         sum -=Number (chkHap.value)
    //     }
    //     sumtext.value = sum;
    // })
    // chkshose.addEventListener("click",()=>{
    //     if(chkshose.checked === true){
    //         sum +=Number (chkshose.value)
    //     }else{
    //         sum -=Number (chkshose.value)
    //     }
    //     sumtext.value = sum;
    // })
    //  chkbag.addEventListener("click",()=>{
    //     if(chkbag.checked === true){
    //             sum +=Number (chkbag.value)
    //      }else{
    //             sum -=Number (chkbag.value)
    //      }
    //         sumtext.value = sum;
    // })
    //   for (const chk of chkArray) {
    //     chk.addEventListener("click",()=>{
    //         if(chk.checked === true){
    //             sum +=Number (chk.value)
    //         }else{
    //             sum -=Number (chk.value)
    //         }
    //         sumtext.value = sum;
    //     })
    //   }
    //*****for Each******
    chkArray.forEach((chk)=>{
        chk.addEventListener("click",()=>{
    if(chk.checked === true){
            sum +=Number (chk.value)
        }else{
            sum -=Number (chk.value)
        }
        sumtext.value = sum;
    })
    })


  })



