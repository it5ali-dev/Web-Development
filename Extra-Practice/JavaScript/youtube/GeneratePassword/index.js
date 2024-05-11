
generate.onclick = function () {

    const passwordLen = document.getElementById('length').value;
    const includeLowerCase = document.getElementById('lower').checked; // Change .value to .checked
    const includeUpperCase = document.getElementById('upper').checked; // Change .value to .checked
    const includeNumber = document.getElementById('number').checked; // Change .value to .checked
    const includeSymbol = document.getElementById('symbol').checked; // Change .value to .checked

    let newText = document.getElementById('newText');

    const lowercaseChar = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercaseChar = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const numberChar = '0123456789';
    const symbolChar = '@$#-_&';

    let allowedChar = '';
    let password = ''; // Initialize password as an empty string

    if (includeLowerCase) { // Use includeLowerCase directly
        allowedChar += lowercaseChar; // Concatenate to allowedChar
    }
    if (includeUpperCase) { // Use includeUpperCase directly
        allowedChar += uppercaseChar; // Concatenate to allowedChar
    }
    if (includeNumber) { // Use includeNumber directly
        allowedChar += numberChar; // Concatenate to allowedChar
    }
    if (includeSymbol) { // Use includeSymbol directly
        allowedChar += symbolChar; // Concatenate to allowedChar
    }

    console.log(`allowed character length : ${allowedChar}`);

    if (passwordLen < 4 || passwordLen === '') {
        newText.textContent = 'Password length must be at least 4'; // Display error message
    }
    else if (allowedChar.length === 0) { // Correct condition to check if allowedChar is empty
        newText.textContent = 'At least 1 set of characters needs to be selected'; // Display error message
    }
    else {
        for (let i = 0; i < passwordLen; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChar.length);
            password += allowedChar[randomIndex];
        }
        newText.textContent = `Generated Password: ${password}`;
    }
}
