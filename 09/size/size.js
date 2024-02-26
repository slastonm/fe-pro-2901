window.onload = function(){
    let blockEl = document.querySelector('.block');
    let widht = blockEl.offsetWidth;
    let height = blockEl.offsetHeight;
    console.log(`Block info ${widht} and ${height}`);

    let widhtC = blockEl.clientWidth;
    let heightC = blockEl.clientHeight;

    console.log(`Block info ${widhtC} and ${heightC}`);

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    console.log(`User window ${windowWidth} and ${windowHeight}`);
}