const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result')
    if(height === '' || height < 0 || isNaN(height)){ 
        result.innerHTML = "Please enter a valid height."
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){ 
        result.innerHTML = "Please enter a valid weight."
    }
    else{
        const bmi = ((weight/(height*height))*10000).toFixed(2);
        result.innerHTML = `<span> BMI is ${bmi}</span>`
        if(bmi < 18.6){
            result.innerHTML += `<br> You are UnderWeight!!! </br>`
        }
        else if(bmi > 24.5){
            result.innerHTML += `<br> You are OverWeight!!! </br>`
        }
        else{
            result.innerHTML += `<br> Hurray! You have perfectly normal weight </br>`
        }
    }
})