
document.addEventListener("DOMContentLoaded", ()=>{
    let sel = document.querySelector("#sel");
    let img = document.querySelector("#myImg");
    let mySpan = document.querySelector("#mySpan");
    
    sel.addEventListener("change",()=>{
        let index = sel.selectedIndex;
        img.src = sel.options[index].value;
    })
    img.onload = () =>{
        mySpan.innerHTML = img.width + "*" + img.height;
    }
})
   




// document.addEventListener("DOMContentLoaded", () => {
//     let sel = document.querySelector("#sel")
//     let img = document.querySelector("#myImg")
//     let mySpan = document.querySelector("#mySpan")
  
//     sel.addEventListener("change", () => {
//       let index = sel.selectedIndex;
//       img.src = sel.options[index].value;
//     })
//     img.onload = () => {
//       mySpan.innerHTML = img.width+" x "+img.height
//     }
//   })