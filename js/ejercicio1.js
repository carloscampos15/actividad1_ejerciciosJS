function oprationLess(){
    const MESSAGE = "el resultado de la resta es: ";
    // get values from inputs
    let number1 = document.getElementById("exe1number1").value;
    let number2 = document.getElementById("exe1number2").value;
    // validate if there are empty valiues
    if(!number1 || !number2){
        alert("elementos vacios");
        return
    }
    // get result by less operation
    let result = number1 - number2;
    // show result in html
    document.getElementById("result1").innerHTML = MESSAGE + result;
    // show result in js
    console.log(MESSAGE + result)
}