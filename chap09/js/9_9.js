    document.addEventListener("DOMContentLoaded",()=>{
    const sel = document.querySelector("#fruits");
    const img = document.querySelector("#fruitimage");

    sel.addEventListener("change",()=>{
    let index =  sel.selectedIndex
    img.src = sel.options[index].value
  })
})
