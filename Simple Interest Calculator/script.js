function compute() {
    // let p = document.getElementById("principal").value; // This came with the starter code, no point keeping it

    // This was part of the exercise, so keeping it
    let result = document.getElementById("result")

    // Values read from various elements, parsed to ensure type safety
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    // Validate principal, it shyoudl be a number above zero
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number for Principal");
        document.getElementById("principal").focus();
        return;
    }

    // Validate years to be a number
    if (isNaN(years) || years <= 0) {
        alert("Enter a positive number for Years");
        document.getElementById("years").focus();
        return;
    }

    // Calculate everything
    let interest = principal * years * rate / 100
    let amount = principal + interest
    let year = new Date().getFullYear() + years;

    // Display the results
    result.innerHTML=`If you deposit $<mark>${principal}</mark>,<br>` +
                     `at an interest rate of <mark>${rate}</mark>%.<br>` +
                     `You will receive an amount of $<mark>${amount}</mark>,<br>` +
                     `in the year <mark>${year}</mark><br>`







}

function updateRate() {
    let rateval = document.getElementById("rate").value
    document.getElementById("rate_val").textContent = rateval
}
        