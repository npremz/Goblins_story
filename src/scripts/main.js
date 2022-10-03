"use strict"

window.addEventListener('load', (e) => {
    const canvas = document.querySelector("#canvas");
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        let prevX = null
        let prevY = null

        let width = document.querySelector('#width')
        width.value = 5
        width.addEventListener('change', (e) => {
            ctx.lineWidth = width.value
        });


        ctx.lineWidth = 5
        ctx.lineCap = 'round';

        let draw = false
        window.addEventListener("mousedown", (e) => draw = true);
        window.addEventListener("mouseup", (e) => draw = false);



        let color = document.querySelector(".color");
        color.addEventListener("change", () => {
            ctx.strokeStyle = color.value
        })

        let clearBtn = document.querySelector(".clear")
        clearBtn.addEventListener("click", () => {
            // Clearning the entire canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        });

        let saveBtn = document.querySelector(".save")
        saveBtn.addEventListener("click", () => {
            let data = canvas.toDataURL("imag/png")
            let a = document.createElement("a")
            a.href = data
            a.download = "sketch.png"
            a.click()
        })

        window.addEventListener("mousemove", (e) => {
           
            if(prevX == null || prevY == null || !draw){
                prevX = e.clientX
                prevY = e.clientY
                return
            } 

            let currentX = e.clientX
            let currentY = e.clientY

            ctx.beginPath()
            ctx.moveTo(prevX, prevY)
            ctx.lineTo(currentX, currentY)
            ctx.stroke()

            prevX = currentX
            prevY = currentY

        })
    }
})


