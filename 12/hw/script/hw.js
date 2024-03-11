window.onload = function(){
    const images = ['img/1.png','img/2.png','img/3.png','img/4.png'];
    let curentIndex = 0;
    function changeImg(){
        curentIndex+=1;
        // if(curentIndex >= images.length){
        //     curentIndex = 0;
        // }
        curentIndex = (curentIndex+1) % images.length;
        
        document.querySelector('img').src = images[curentIndex];
    }
    let slideInterval = setInterval(changeImg, 3000);

    let sliderImg = document.querySelector('img');
    sliderImg.addEventListener('mouseenter', function(){
        clearInterval(slideInterval);
    });
    sliderImg.addEventListener('mouseleave', function(){
        slideInterval = setInterval(changeImg, 3000);
    });
}