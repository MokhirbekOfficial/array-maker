// Make arrays
let numInput = document.querySelector("#num")
let submit = document.querySelector("#btn")
let span = document.querySelector("#span")
let summa = document.querySelector('h2')
let sum = 0
let newArray = []
let makeArray = (amount) => {
    for (let i = 1; i <= amount; i++){
        newArray.push(i)
        sum+=i
    }
    return newArray
    return sum
}

submit.addEventListener('click', function(even){
    console.log(makeArray(numInput.value))
    span.textContent = 'Unfortunately you can only see the result from the console! But here you can see the sum of the numbers in your array'
    summa.textContent = sum
    sum = 0
    numInput.value = ""
})

// Sum arrays number
