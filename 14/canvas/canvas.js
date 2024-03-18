window.onload = function(){
    let canvasEl = document.querySelector('canvas');
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvasEl.width, canvasEl.height);
    function drawText(text, fontSize='30px', fontFace='Arial'){
        ctx.font = `${fontSize} ${fontFace}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const xBox = canvasEl.width/2;
        const yBox = canvasEl.height/2;
        ctx.fillStyle = 'white';
        ctx.fillText(text, xBox, yBox);
    }  
    drawText('hello canvas');

    function createDot(x,y){
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(x,y, 5,0, Math.PI*2, true);
        ctx.fill();
    }
    canvasEl.addEventListener('click', function(e){
        let canvasRect = canvasEl.getBoundingClientRect();
        let x = e.clientX - canvasRect.left;
        let y = e.clientY - canvasRect.top;

        createDot(x,y);
    })
}