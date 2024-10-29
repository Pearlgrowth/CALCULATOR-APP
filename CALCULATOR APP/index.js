// functionality
const display = document.getElementById('display');

//this is the function to display the characters as well as numbers
function displayChar(input){
display.value += input;
}

//this is a function that takes the eval() methid to perform the arithmetic operations
function calculate(){
    try{
        display.value=eval(display.value)
    }
    //catches error when the user types something invalid
    catch(err){
 display.value="Error"
    }

}

//clears the display
function clearDisplay(){
    display.value= "";
}