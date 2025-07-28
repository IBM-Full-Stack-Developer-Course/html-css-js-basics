function temperature() {
    //Temp(Fahrenheit) = [Temp(Degrees)*9/5] + 32
    let tempCelsius = document.getElementById("celsius").value
    let tempFahrenheit = (tempCelsius*9/5) + 32
    document.getElementById("fahrenheit").value = tempFahrenheit
}

function weight() {
    //Weight(Pounds) = Weight(Kgs) * 2.2
    let weightKg = document.getElementById("kilo").value
    let weightLbs = weightKg * 2.2
    document.getElementById("pounds").value = weightLbs
}

function distance() {
    // Distance(Miles) = Distance(Kms) * 0.62137
    let distanceKms = document.getElementById("km").value
    let distanceMiles = distanceKms * 0.62137
    document.getElementById("miles").value = distanceMiles
}