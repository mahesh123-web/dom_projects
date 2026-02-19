const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = 'Please Give Valid Height'
    } else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = 'Please Give Valid Weight'
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`

        let category = ''
        if(bmi<18.6){
            category = "You are under weight"
        }else if(bmi>=18.6 && bmi<=24.9){
            category = "You have Normal weight"
        }else{
            category = "You are Over Weight"
        }

        results.innerHTML = `<span>Your BMI count is: ${bmi}</span><br><span>${category}</span>`
    }
})