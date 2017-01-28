class Calculator {
  constructor () {
    this.displayValue = ''
    this.displayDiv = document.querySelector('.display')
    this.operatorsDivs = [...document.querySelectorAll('.operator')]
    this.numbersDivs = [...document.querySelectorAll('.number')]
    this.cleanButton = document.querySelector('button[value="C"]')
    this.equalButton = document.querySelector('button[value="="]')
    this.addOperator()
    this.addNumber()
    this.cleanDisplay()
    this.calculate()
  }
  addValue (value) {
    this.displayValue += value
    this.displayDiv.textContent = this.displayValue
  }
  addOperator () {
    this.operatorsDivs.filter(operatorDiv => operatorDiv.addEventListener('click', () => this.addValue(operatorDiv.value)))
  }
  addNumber () {
    this.numbersDivs.filter(numberDiv => numberDiv.addEventListener('click', () => this.addValue(numberDiv.value)))
  }
  clean () {
    this.displayValue = ''
    this.displayDiv.textContent = '0'
  }
  cleanDisplay () {
    this.cleanButton.addEventListener('click', () => this.clean())
  }
  calculate () {
    this.equalButton.addEventListener('click', () => {
      this.displayValue = eval(this.displayValue)
      this.displayDiv.textContent = this.displayValue
    })
  }
}

const calculator = new Calculator()
// calculator.addOperator()

// $(function () {
//   var displayValue = '0'
//   var $display = $('.display')
//   $('.operator,.number').click(function () {
//     displayValue += $(this).prop('value')
//     $display.text(displayValue)
//   })
//   $("button[value='Clean']").click(function () {
//     displayValue = ''
//     $display.text(displayValue)
//   })
//   $("button[value='=']").click(function () {
//     displayValue = eval(displayValue)
//     $display.text(displayValue)
//   })
//   $("button[value='Negate']").click(function () {
//     if (displayValue !== '') {
//       if (displayValue > 0) {
//         displayValue = -Math.abs(displayValue)
//         $display.text(displayValue)
//       } else  {
//         displayValue = Math.abs(displayValue)
//         $display.text(displayValue)
//       }
//     }
//   })
//   $("button[value='Percentage']").click(function () {
//     displayValue /= 100
//     $display.text(displayValue)
//   })
// })
