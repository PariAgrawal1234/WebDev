const clock = document.querySelector('.Time_block');

setInterval(function () {
    let date = new Date();
     clock.innerHTML = date.toLocaleTimeString();
},1000)
