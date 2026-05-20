const changeColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    document.querySelector('body').style.backgroundColor = color;
}
    
let stopme;

document.getElementById('Start').addEventListener('click', function () {
    if(!stopme) stopme = setInterval(changeColor, 1000);
});

document.getElementById('Stop').addEventListener('click', function () {
    clearTimeout(stopme);
    console.log("STOPPED!");
    stopme = '';
})