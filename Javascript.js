const numbers=document.querySelectorAll(".number")

const calculatorScreen = document.querySelector('.calculator-screen')

const updatescreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    currentNumber = number
}
    if (currentNumber === '0') {
        currentNumber = number
    }   else {
        currentNumber += number
    }

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
    prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
const equalSign = document.querySelector('.equal-sign')


const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return

    }
    currentNumber = result
    calculationOperator = ''
}
equalSign.addEventListener('click', () => {
    calculate ()
    updatescreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    update(currentNumber)
    
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updatescreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}