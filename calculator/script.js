class calculator {
    constructor (previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOPerandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand =''
        this.previousOperand =''
        this.operation = undefined
    }
    delete (){
        this.currentOperand=this.currentOperand.toStrings.slice(0, -1)
    }
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.'))return        
        this.currentOperand=this.currentOperand.toStrings() + number.toStrings()
    }
    chooseOperation(operation){
        if (this.currentOperand === '')return
        if(this.previousOperand !=='') {this.compute()
        }
        this.operation = operation
        this.previousOperand= this.currentOperand
        this.currentOperand =''
    }

    compute(){
        let computation
        const Prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(Prev)|| isNaN(current))return

        switch(this.operation){
            case '+':
                computation = Prev + current
                break
            case '-':
                computation = Prev - current
                break
            case '*':
                 computation = Prev * current
                 break
             case '/':
                computation = Prev / current
                break
            
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand =''
    }
    getDisplayNumber(number){
        const stringNumber = number.toStrings
        const integerDigits = parseFloat(stringNumber.split('.') [0])
        const decimalDigits = stringNumber.split('.') [1]
        let integerDisplay
        if (isNan(integerDigits)) {
            integerDisplay =''
        } else {
            integerDisplay = integerDigits.integerDigits.toLocaleString('en',{maximumFractionDigits: 0} )
        }
        if (decimalDigits != null) {
            return '${integerDisplay}.${decimalDigit}'
        } else {
           return integerDisplay 
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand)
        if(this.operation !=null){
            this.previousOperandTextElement.innerText='${this.getDisplayNumber(this.previousOperand)} ${this.operand}'
        } else{
            this.previousOperandTextElement.innerText =''    
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deletesButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new calculator(previousOperandTextElement, currentOPerandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButtons.addEventListener('click', button => {
    calculator.compute ()
    calculator.updateDisplay()
})
allClearButtons.addEventListener('click', button => {
    calculator.clear ()
    calculator.updateDisplay()
})
deleteButtons.addEventListener('click', button => {
    calculator.delete ()
    calculator.updateDisplay()
})