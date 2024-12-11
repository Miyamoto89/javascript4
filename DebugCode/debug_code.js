function performOperation(){
    //get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value)

    //check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        //perform operation
        let result = multiply (num1, num2);

        // display results
        displayResult(result);
    } else{
        displayResult('Please enter valid numbers');        
    }
}
function multiply(a, b){
    // Introduce a debugger statement to pause execution
                debugger;
            // calculate
            return a * b;
}
function displayResult(result){
    const resultElement = document.getElementById('result');
    resultElement.textContent = "The result is: ${result}";
}
