function oprationMulLess(){
    const MESSAGE1 = "el resultado de la resta es: ";
    const MESSAGE2 = " y el resultado de la multiplicación es: ";
    // get values from inputs
    let number1 = document.getElementById("exe2number1").value;
    let number2 = document.getElementById("exe2number2").value;
    // validate if there are empty valiues
    if(!number1 || !number2){
        alert("elementos vacios");
        return
    }
    // get result by less operation
    let resultLess = number1 - number2;
    // get result by multiplication operation
    let resultMul = number1 * number2;
    // show result in html
    document.getElementById("result2").innerHTML = MESSAGE1 + resultLess + MESSAGE2 + resultMul;
    // show result in js
    console.log(MESSAGE1 + resultLess + MESSAGE2 + resultMul)
}