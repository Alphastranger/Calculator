const buttonOne = document.querySelector('#buttOne')
const buttonTwo = document.querySelector('#buttTwo')
const buttonThree = document.querySelector('#buttThree')
const buttonPlus = document.querySelector('#buttPlus')
const buttonFour = document.querySelector('#buttFour')
const buttonFive = document.querySelector('#buttFive')
const buttonSix = document.querySelector('#buttSix')
const buttonMinus = document.querySelector('#buttMinus')
const buttonSeven = document.querySelector('#buttSeven')
const buttonEight = document.querySelector('#buttEight')
const buttonNine = document.querySelector('#buttNine')
const buttonStar = document.querySelector('#buttStar')
const buttonDot = document.querySelector('#buttDot')
const buttonZero = document.querySelector('#buttZero')
const buttonSlash = document.querySelector('#buttSlash')
const buttonSub = document.querySelector('#buttSub')
const outputBar = document.querySelector('#output')
let inputArr = ""
console.log(buttonOne)
console.log(inputArr)

function addNumb(num){
    inputArr += num
    console.log(inputArr)
    outputBar.value = inputArr
}
function submitCommand(input){
    let equation = eval(input)
    console.log(equation)
    outputBar.value=equation
}
buttonOne.addEventListener("click", function(){addNumb(1)})
buttonTwo.addEventListener('click', function(){addNumb(2)})
buttonThree.addEventListener('click', function(){addNumb(3)})
buttonFour.addEventListener('click', function(){addNumb(4)})
buttonFive.addEventListener('click', function(){addNumb(5)})
buttonSix.addEventListener('click', function(){addNumb(6)})
buttonSeven.addEventListener('click', function(){addNumb(7)})
buttonEight.addEventListener('click', function(){addNumb(8)})
buttonNine.addEventListener('click', function(){addNumb(9)})
buttonZero.addEventListener('click', function(){addNumb(0)})
buttonPlus.addEventListener('click', function(){addNumb("+")})
buttonMinus.addEventListener('click', function(){addNumb("-")})
buttonStar.addEventListener('click', function(){addNumb("*")})
buttonSlash.addEventListener('click', function(){addNumb("/")})
buttonDot.addEventListener('click', function(){addNumb(".")})
buttonSub.addEventListener('click', function(){submitCommand(inputArr)})