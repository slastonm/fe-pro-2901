window.onload = function(){
    let containerEl = document.querySelector('.container');
    function drawSvgRect(width, height, color){
        const svgNS = "http://www.w3.org/2000/svg";
        let svgEl = document.createElementNS(svgNS,'svg');
        svgEl.setAttribute('width', width);
        svgEl.setAttribute('height', height);
        let rectEl = document.createElementNS(svgNS, 'rect');
        rectEl.setAttribute('width', width);
        rectEl.setAttribute('height', height);
        rectEl.setAttribute('fill', color);
        svgEl.appendChild(rectEl);
        containerEl.appendChild(svgEl);
    }
    drawSvgRect('250px', '100px', 'black');
}