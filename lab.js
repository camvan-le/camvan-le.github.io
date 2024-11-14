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
function openModal() {
    document.getElementById("modal").style.display = "flex";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// show the next question // 
function showNextQuestion() {
    const currentQuestion = document.querySelector('.question.active');
    const nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('question')) {
        currentQuestion.classList.remove('active'); 
        nextQuestion.classList.add('active');       
    } else {
        console.log("No more questions."); 
    }
}

// show the previous question // 
function showPreviousQuestion() {
    const currentQuestion = document.querySelector('.question.active');
    const previousQuestion = currentQuestion.previousElementSibling;

    if (previousQuestion && previousQuestion.classList.contains('question')) {
        currentQuestion.classList.remove('active'); 
        previousQuestion.classList.add('active');   
    } else {
        console.log("No previous questions."); 
    }
}

// thank you message // 
function showThankYouMessage() {
    const questionDivs = document.querySelectorAll('.question');
    questionDivs.forEach(function (question) {
        question.style.display = 'none'; 
    });
    const thankYouMessage = document.getElementById('thank-you');
    thankYouMessage.style.display = 'block';
    
    const submitButton = document.getElementById('submit');
    submitButton.disabled = true; 
}

// reset form message // 
function clearForm() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'none';
    });

    const resetMessage = document.getElementById('reset-form');
    resetMessage.style.display = 'block';

    document.getElementById('questions').reset();
}

// store the form data in local storage //
document.getElementById('questions').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';

    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const yes = document.getElementById('yes').value;
    const no = document.getElementById('no').value;
    const service = document.getElementById('service').value;
    const method = document.getElementById('method').value;

    const value_1 = document.getElementById('1').value;
    const value_2 = document.getElementById('2').value;
    const value_3 = document.getElementById('3').value;
    const value_4 = document.getElementById('4').value;
    const value_5 = document.getElementById('5').value;
    const value_6 = document.getElementById('6').value;

    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const option5 = document.getElementById('option5').value;
    const option6 = document.getElementById('option6').value;

    // Store the data in local storage // 
    localStorage.setItem('contactFormData', JSON.stringify({
        name, gender, email, number, yes, no, service, method, 
        value_1, value_2, value_3, value_4, value_5, value_6, 
        option1, option2, option3, option4, option5, option6
    }));
});


// enlarge button 
function enlargeText() {
    const mainContentElements = document.querySelectorAll('.main-content *');

    mainContentElements.forEach(element => {
        const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        element.style.fontSize = (currentSize * 1.02) + "px"; 
    });
}

// change background color // 
function changeBackgroundColor() {
    const color = '#fafcff';  
    document.body.style.background = color;  

    const navLinks = document.querySelectorAll('.social_link');
    navLinks.forEach(link => {
        link.style.color = '#6d7780';  
    });
}

// alt text for img //
function displayAltText() {
    const img1 = document.getElementById('activity1_img');  
    const img2 = document.getElementById('activity2_img'); 
    const img3 = document.getElementById('activity3_img'); 
    const altText2 = img2.alt;  
    
    const altTextDisplay = document.getElementById('alt-text');
    const button = document.querySelector('activity_button');
    
    if (altTextDisplay.textContent !== '') {
        altTextDisplay.textContent = '';  
        button.textContent = 'Show Alt Text'; 
    
    } else {
        altTextDisplay.innerHTML = `An assortment of fresh flowers on display in a flower shop, 
        each variety labeled with Vietnamese names and prices. Later on, at a heartfelt charity event, we were filled with 
        gratitude as we donated all the money we raised for the orphanage, knowing it would make a difference in the lives of those children.`;  
        button.textContent = 'Hide Alt Text'; 
    }
}
