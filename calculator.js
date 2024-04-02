// JavaScript Calculator Code with Extended Functionality

// Calculator state object
const calculatorState = {
    displayValue: '0',
    memoryValue: null,
    operator: null,
  };
  
  // Function to update the display
  function updateDisplay() {
    document.getElementById('display').value = calculatorState.displayValue;
  }
  
  // Function to clear the calculator state
  function clearCalculator() {
    calculatorState.displayValue = '0';
    calculatorState.memoryValue = null;
    calculatorState.operator = null;
    updateDisplay();
  }
  
  // Function to append values to the display
  function appendToDisplay(value) {
    if (calculatorState.displayValue === '0' || calculatorState.displayValue === 'Error') {
      calculatorState.displayValue = value;
    } else {
      calculatorState.displayValue += value;
    }
    updateDisplay();
  }
  
  // Function to handle decimal point
  function handleDecimal() {
    if (!calculatorState.displayValue.includes('.')) {
      calculatorState.displayValue += '.';
      updateDisplay();
    }
  }
  
  // Function to handle memory operations
  function handleMemoryOperation(operation) {
    const currentDisplay = parseFloat(calculatorState.displayValue);
  
    switch (operation) {
      case 'MC':
        calculatorState.memoryValue = null;
        break;
      case 'MR':
        if (calculatorState.memoryValue !== null) {
          calculatorState.displayValue = calculatorState.memoryValue.toString();
        }
        break;
      case 'M+':
        calculatorState.memoryValue = (calculatorState.memoryValue || 0) + currentDisplay;
        break;
      case 'M-':
        calculatorState.memoryValue = (calculatorState.memoryValue || 0) - currentDisplay;
        break;
      default:
        break;
    }
  
    updateDisplay();
  }
  
  // Function to perform percentage calculation
  function calculatePercentage() {
    const currentDisplay = parseFloat(calculatorState.displayValue);
    calculatorState.displayValue = (calculatorState.memoryValue || 0) + (currentDisplay / 100);
    updateDisplay();
  }
  
  // Function to perform square root calculation
  function calculateSquareRoot() {
    const currentDisplay = parseFloat(calculatorState.displayValue);
    calculatorState.displayValue = Math.sqrt(currentDisplay).toString();
    updateDisplay();
  }
  
  // Function to perform basic arithmetic operations
  function performOperation(nextOperator) {
    const inputValue = parseFloat(calculatorState.displayValue);
  
    if (calculatorState.operator && calculatorState.memoryValue !== null) {
      switch (calculatorState.operator) {
        case '+':
          calculatorState.memoryValue += inputValue;
          break;
        case '-':
          calculatorState.memoryValue -= inputValue;
          break;
        case '*':
          calculatorState.memoryValue *= inputValue;
          break;
        case '/':
          if (inputValue !== 0) {
            calculatorState.memoryValue /= inputValue;
          } else {
            calculatorState.displayValue = 'Error';
            updateDisplay();
            return;
          }
          break;
        default:
          break;
      }
    } else {
      calculatorState.memoryValue = inputValue;
    }
  
    calculatorState.displayValue = calculatorState.memoryValue.toString();
    calculatorState.operator = nextOperator;
    updateDisplay();
  }
  
  // Example usage:
  // clearCalculator(); // Clear the calculator
  // appendToDisplay('5'); // Append '5' to the display
  // handleDecimal(); // Add decimal point
  // handleMemoryOperation('M+'); // Add to memory
  // calculatePercentage(); // Calculate percentage
  // calculateSquareRoot(); // Calculate square root
  // performOperation('+'); // Perform addition
  // performOperation('='); // Perform equals operation
  