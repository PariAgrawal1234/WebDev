const print = function (str) {
    console.log(str, Date.now());
}
    
let stopme;

document.getElementById('Start').addEventListener('click', function () {
    if(!stopme) stopme = setInterval(print, 1000, "hi");
});

document.getElementById('Stop').addEventListener('click', function () {
    clearTimeout(stopme);
    console.log("STOPPED!");
})