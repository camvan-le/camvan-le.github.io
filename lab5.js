// input name //
function nameChange() {
    const displayUserName = document.getElementById("displayUserName");
    const inputName = document.getElementById("inputName").value.trim();
    const greeting = document.getElementById("greeting");

    displayUserName.style.color = "#ccc";
    displayUserName.style.fontSize = "50px";

    if (inputName) {
        displayUserName.innerText = `Hello, ${inputName}!
        Welcome to my homepage!`;
        greeting.style.display = "none";

    }

    else {
        displayUserName.innerText = "Please enter your name!";
        displayUserName.style.color = "#e4c5c2";
    }
}

// navigation // 
function hoverEffect(element) {
    element.style.color = '#e4c5c2'; 
}

function resetEffect(element) {
    element.style.backgroundColor = '';
    element.style.color = ''; 
}

// dropdown menu //
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    
        dropdownButton.addEventListener("click", function(event) {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            event.stopPropagation(); 
        });

            document.addEventListener("click", function() {
            dropdownMenu.style.display = "none";
        });



// image // 
function toggleZoom() {
    const img = document.getElementById("img");

    if (img.style.height === '400px' && img.style.width === '400px'){
        img.style.height = '320px';
        img.style.width = '320px'
    } else {
        img.style.width = "400px";
        img.style.height = "400px";
    }}

// enter button // 
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button')
    
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#e4c5c2'
    }, true);
    
    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = ''
    }, true);
}); 
    
