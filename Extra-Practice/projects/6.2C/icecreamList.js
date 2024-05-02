function addIceCreamRating() {
    // Get input values from the form
    let nameInput = document.getElementById("nameInput");
    let ratingInput = document.getElementById("ratingInput");
    let name = nameInput.value;
    let rating = parseInt(ratingInput.value);
    let upDate = document.getElementById('up-date');
    let upTime = document.getElementById('up-time');

    // Check if name or rating is empty
    if (!name || !ratingInput.value) {
        alert("Please fill in both name and rating fields.");
        return; // Exit the function if any field is empty
    }

    // Check if rating is valid
    if (isNaN(rating) || rating < 0 || rating > 5) {
        // Display error message
        alert("Invalid rating! Rating must be between 0 and 5.");
        return; // Exit the function if rating is invalid
    }

    // Get current date and time
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    // Create the list item with the required information
    let listItem = document.createElement("li");
    listItem.innerHTML = `${date} ${time} - ${name}: `;

    // Update date and time elements
    upDate.textContent = date;
    upTime.textContent = time;

    // Add filled stars
    for (let i = 0; i < rating; i++) {
        listItem.innerHTML += "&#x2605;"; // Filled star
    }

    // Add unfilled stars
    for (let i = 0; i < (5 - rating); i++) {
        listItem.innerHTML += "&#x2606;"; // Unfilled star
    }

    // Add the new list item to the ratings list
    document.getElementById("ratingsList").appendChild(listItem);

    // Clear input fields
    nameInput.value = "";
    ratingInput.value = "";
}
