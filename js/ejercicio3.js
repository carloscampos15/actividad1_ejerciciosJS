function randomVars() {
    // constants
    const MIN = 0;
    const MAX = 10;
    const MESSAGE = "el resultado de la operación es: ";
    // get values from inputs
    let number1 = document.getElementById("exe3number1").value;
    let number2 = document.getElementById("exe3number2").value;
    // validate if there are empty valiues
    if (!number1 || !number2) {
        alert("elementos vacios");
        return
    }
    // get random number
    let random = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    // make operation, if random < 5 less and if radom > 5 multiplication
    var result;
    if (random < 5) result = number1 - number2;
    else result = number1 * number2;

    // show result in html
    document.getElementById("result3").innerHTML = MESSAGE + result;
    // show result in js
    console.log(MESSAGE + result)
}