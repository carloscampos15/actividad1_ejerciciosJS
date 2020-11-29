function calculateMonth() {
    // constants
    const MIN = 1;
    const MAX = 12;

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    // const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // get random number
    let random = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);

    // looking for days by month
    var result = months[random - 1] == "Abril" || months[random - 1] == "Junio" || months[random - 1] == "Septiembre" || months[random - 1] == "Noviembre" ? 30 : 31;
    result = months[random - 1] == "Febrero" ? 29 : result;

    // show result
    const MESSAGE = `El mes ${months[random - 1]} tiene ${result} dias`;
    document.getElementById("result4").innerHTML = MESSAGE;
    console.log(MESSAGE);
}