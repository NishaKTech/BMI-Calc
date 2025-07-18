const form=document.querySelector('form')
// const height=parseInt(document.querySelector('#height').value)
// this usecase will giv eyou empty value
form.addEventListener('submit',function(event){
event.preventDefault()
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter valid height ${height}`;
}else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter valid weight ${weight}`;
}else{
    const bmi=(weight / ((height * height) / 10000)).toFixed(2);
    

    let category = '';
    if(bmi < 18.6){
        category = 'Underweight';
    }
     else if (bmi <= 24.9) {
        category = 'Normal weight';
    } else {
        category = 'Overweight';
    }

    results.innerHTML = `Your BMI is ${bmi}.<br>You are <strong>${category}</strong>.`;
}
});