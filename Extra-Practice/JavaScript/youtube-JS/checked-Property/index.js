const myChecked = document.getElementById('checkbox1');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const paypalBtn = document.getElementById('paypalBtn');
const mySubmit = document.getElementById('mySubmit');
const subRes = document.getElementById('subRes');
const cardRes = document.getElementById('cardRes');

mySubmit.onclick = function() {
    if(myChecked.checked) {
        subRes.textContent = `you are Subscribed`
    } else {
        subRes.textContent = `you are not Subscribed`
    }

    if(visaBtn.checked) {
        cardRes.textContent = `you are paying with Visa`
    }
    else if(masterBtn.checked) {
        cardRes.textContent = `you are paying with Master`
    }
    else if(paypalBtn.checked) {
        cardRes.textContent = `you are paying with Paypal`
    } 
    else {
        cardRes.textContent = `you must select a payment type`
    }
}