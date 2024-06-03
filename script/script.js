document.querySelector('#calculateButton').addEventListener('click', () =>{
    let arrayInput = document.querySelector('#arrayInput'.value)
    let numbers = parseFloat(arrayInput)
    let number = arrayInput.split(",").map(Number)
    
    let sum = number.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    if(isNaN(number))textContent = 
    document.querySelector('#result').textContent = sum + "sum"
})

let array1 = [0,1,2,3,,4,5,6,7,8,9]
let array2 = array1.reduce((a,b) => a + b)
console.log(array2);