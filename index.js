let button = document.querySelector("button")
let div = document.querySelector("div.top")
let flyer = document.querySelector("section.flyer")
let input = document.querySelector("input")
let span = document.querySelector("span")
button.addEventListener("click",function () {
    div.classList.add("hide")
    flyer.classList.remove("flyer")
    flyer.classList.add("show")
    span.innerHTML=input.value
    function downloadImage() {
        let section = document.querySelector("section.show")
        html2canvas(section).then(canvas=>{
            let dataURL =  canvas.toDataURL('image/png')
            let link = document.createElement("a")
            link.href = dataURL
            link.download="Abdulbaasit's flyer"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
    }
    downloadImage()
})