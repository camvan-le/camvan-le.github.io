function nameChange(){
    const displayUserName = document.getElementById("displayUserName");
    const inputName = document.getElementById("inputName").value;
    displayUserName.innerText = `Hello, ${inputName}!`;
}

// Function to apply the hover effect
function hoverEffect(element) {
    element.style.color = '#e4c5c2'; // Change text color to gold
    console.log("abc")
}

// Function to reset the effect when mouse leaves
function resetEffect(element) {
    element.style.backgroundColor = ''; // Reset background color
    element.style.color = ''; // Reset text color
}

function toggleZoom() {
    const img = document.getElementById("img");

    if (img.style.height === '400px' && img.style.width === '400px'){
        img.style.height = '320px';
        img.style.width = '320px'
    } else {
        img.style.width = "400px";
        img.style.height = "400px";
    }}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button')

    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#13315c'
    }, true);

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = ''
    }, true);
}); 

