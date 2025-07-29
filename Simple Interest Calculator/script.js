function compute() {
    let p = document.getElementById("principal").value;
    let result = document.getElementById("result")

    let principal = document.getElementById("principal").value
    let rate = document.getElementById("rate").value
    let years = document.getElementById("years").value

    if (principal <= 0 ) {

        alert("Enter a positive number!")
        document.getElementById("principal").focus();

    } else{
        /**
         * Even though the lab said only do the display bit here, I suppose there is no point of completing the
         * calculations either, if te principal is not valid.
         */
        let interest = principal * years * rate / 100
        let amount = parseInt(principal) + parseFloat(interest)
        let year = new Date().getFullYear() + parseInt(years);

        result.innerHTML=`If you deposit $<mark>${principal}</mark>,<br>` +
                         `at an interest rate of <mark>${rate}</mark>%.<br>` +
                         `You will receive an amount of $<mark>${amount}</mark>,<br>` +
                         `in the year <mark>${year}</mark><br>`
    }






}

function updateRate() {
    let rateval = document.getElementById("rate").value
    document.getElementById("rate_val").textContent = rateval
}
        