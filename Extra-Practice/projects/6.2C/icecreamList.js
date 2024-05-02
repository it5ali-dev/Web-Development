function buildIcecreamList() {
    // Array of ice cream flavors
    const iceCreamFlavors = [
        "Vanilla",
        "Chocolate",
        "Strawberry",
        "Cookies and Cream",
        "Mint Chocolate Chip",
        "Cookie Dough",
        "Butter Pecan",
        "Rocky Road",
        "Chocolate Chip",
        "Pistachio"
    ];

    // Remove existing content inside the top_icecreams div
    const topIceCreamsDiv = document.getElementById("iceCreamList");
    while (topIceCreamsDiv.firstChild) {
        topIceCreamsDiv.removeChild(topIceCreamsDiv.firstChild);
    }

    // Create a new ordered list
    const olElement = document.createElement("ol");

    // Populate the ordered list with ice cream flavors
    iceCreamFlavors.forEach(flavor => {
        const liElement = document.createElement("li");
        liElement.textContent = flavor;
        olElement.appendChild(liElement);
    });

    // Append the ordered list to the top_icecreams div
    topIceCreamsDiv.appendChild(olElement);
}

document.getElementById("generateListBtn").addEventListener("click", function() {
    buildIcecreamList(); // Calling the JavaScript function to create and display the list
  });