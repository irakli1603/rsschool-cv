const outputField = document.querySelector('#displayOutput'),
    inputField = document.querySelector('#displayInput'),
    numberButtons = document.querySelectorAll('[data-number]'),
    operationButtons = document.querySelectorAll('[data-operation]'),
    equalButton = document.querySelector('#equals'),
    allClearButton = document.querySelector('#allClear'),
    DelButton = document.querySelector('#Delete');


     
function validateNum(number) {
    if(!isFinite(number) || Number.isNaN(number)){
        return 'Error'
    }
    let digits = 10;
    if (number < 0){ 
        digits = digits + 1;
    }
    if (!Number.isInteger(number)){
        digits = digits + 1  
    } 
    if (number.toString().length < digits){
        return parseFloat(number);
    } 
    if (typeof number == 'number' && !isNaN(number)){
        return parseFloat(number.toString().substring(0, digits));
    }
    else  return "Error";
}
     


const calculator = {
    calcState: {
        initial: 0,
        operation: '',
        operand: ''
    },
    setState: function(state){
        this.calcState = {...this.calcState, ...state}
    },
    getState: function(){
        return this.calcState
    },
    updateUI: function(){
        outputField.innerHTML = this.getState().initial
        inputField.innerHTML = `${this.getState().operand} ${this.getState().operation}`
    },
    updateState: function(operation, initialState = 0){
        this.calcState = {initial: initialState, operand: this.getState().initial, operation: operation}
    },
    calculate: function(){
        const operation = this.getState().operation,
              firstOperand = this.getState().initial,
              secondOperand = this.getState().operand;

        switch(operation){
            case '+':
                this.setState({ initial: validateNum(parseFloat(firstOperand) + parseFloat(secondOperand)), operation: '', operand: '' })
                this.updateUI()
                console.log(this.calcState)
                break;
            case '-':
                this.setState({ initial: validateNum(parseFloat(secondOperand) - parseFloat(firstOperand)), operation: '', operand: '' })
                this.updateUI()
                console.log(this.calcState)
                break;
            case '*':
                this.setState({ initial: validateNum(parseFloat(firstOperand) * parseFloat(secondOperand)), operation: '', operand: '' })
                this.updateUI()
                console.log(this.calcState)
                break;
            case '/':
                this.setState({ initial: validateNum(parseFloat(secondOperand) / parseFloat(firstOperand)), operation: '', operand: '' })
                this.updateUI()
                console.log(this.calcState)
                break;
            case 'sqrt':
                this.setState({ initial: validateNum(Math.sqrt(parseFloat(secondOperand))), operation: '', operand: ''})
                this.updateUI();
                break;
            case '^':
                this.setState({ initial: validateNum(parseFloat(secondOperand)**parseInt(firstOperand)), operation: '', operand: '' })
                this.updateUI();
                break;
        }
    }
}

numberButtons.forEach(item => item.addEventListener('click', e => {
   if(Number.isInteger(+e.target.dataset.number)){
    console.log('lool')
    calculator.setState({initial: parseFloat(calculator.getState().initial + e.target.dataset.number) });
   } else {
    calculator.setState({initial: calculator.getState().initial + e.target.dataset.number });
   }
   calculator.updateUI();
   console.log(calculator.calcState)
}))

operationButtons.forEach(item => item.addEventListener('click', e => {
    let operation = e.target.getAttribute('data-operation')
    if(calculator.getState().initial !== 0 && calculator.getState().operand !== 0) calculator.calculate()
    calculator.calculate()
    calculator.updateState(operation)
    calculator.updateUI();
    console.log(calculator.calcState)
}))


equalButton.addEventListener('click', e => {
    calculator.calculate()
})

allClearButton.addEventListener('click', e => {
    calculator.setState({ initial: 0, operation: '', operand: '' })
    calculator.updateUI();
})

DelButton.addEventListener('click', e => {
    calculator.setState({ initial: calculator.getState().initial.toString().slice(0, -1) })
    calculator.updateUI();
    console.log(calculator.calcState)
})

