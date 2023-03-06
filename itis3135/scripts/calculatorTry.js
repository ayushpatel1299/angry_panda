let display = document.getElementById('display');
let calculatorButtons = Array.from(document.getElementsByClassName('calculatorButton'));

calculatorButtons.map(calculatorButtons =>{
  calculatorButton.addEventListener('click', (e) =>{
    switch(e.target.innerText){
      case 'C':
        display.innerText = '';
        break;
      case '=':
        try{
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Error"
          }
          break;
      case '<-':
        if (display.innerText){
          display.innerText = display.innerText.slice(0, -1);
        } 
        break;
        default:
          display.innerText += e.target.innerText;
          }
    });
});
/*ar result = document.getElementById("result")
function addToResult(value){
  result.value += value;
}
function clearResult(){
  result.value += "";
}
function deleteLast(){
  result.value = result.value.slice(0, -1);
}
function calculate(){
  result.value = eval(result.value);
}
/*