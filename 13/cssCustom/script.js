window.onload =()=> {
    let changeBtn = document.querySelector('button');
    let root = document.documentElement;
    let moveDiv = document.querySelector('.move');
    changeBtn.onclick = function(){

        // console.log(root.style.getPropertyValue('--text-color'));
        if(root.style.getPropertyValue('--text-color') === 'black' && root.style.getPropertyValue('--bg-color') === 'yellow'){
            root.style.setProperty('--bg-color', 'black');
            root.style.setProperty('--text-color', 'yellow');
            moveDiv.style.setProperty('--bg-color','green');
        }
        else{
            root.style.setProperty('--bg-color', 'yellow');
            root.style.setProperty('--text-color', 'black');
        }
    }
}