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
    document.getElementById('thank-you').style.display = 'block';
    document.getElementById('reset-form').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('arrow-button').style.display = 'none';
}

// reset message // 
function clearForm() {
    document.getElementById('reset-form').style.display = 'block'; 
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('arrow-button').style.display = 'none'; 
    document.getElementById('submit').style.display = 'none'; 
    document.getElementById('reset').style.display = 'none'; 
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

    // Store the data in local storage
    localStorage.setItem('contactFormData', JSON.stringify({
        name, gender, email, number, yes, no, service, method, 
        value_1, value_2, value_3, value_4, value_5, value_6, 
        option1, option2, option3, option4, option5, option6
    }));
});
