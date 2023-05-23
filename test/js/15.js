function init() {
    const input = document.querySelector("#input")
    const total = document.querySelector("#total")
    const btn = document.querySelector("#btn")
  
    btn.addEventListener("click", (e) => {
      total.value = eval(input.value)
    })
  }