let calculate = document.getElementById('calculate');
let newText = document.getElementById('newText');

calculate.onclick = function () {
    let dob = new Date(document.getElementById('dob').value);
    let currentDate = new Date();

    let ageYears = currentDate.getFullYear() - dob.getFullYear();
    let ageMonths = currentDate.getMonth() - dob.getMonth();
    let ageDays = currentDate.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    newText.textContent = `You are ${ageYears} years, ${ageMonths} and ${ageDays} days old`;
}