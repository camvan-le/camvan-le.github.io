function nameChange(){
    const displayUserName = document.getElementById("displayUserName");
    const inputName = document.getElementById("inputName").value;
    displayUserName.innerText = `Hello, ${inputName}`;
}

function toggleZoom() {
    const img = document.getElementById("img");

    if (img.style.height === '400px' && img.style.width === '400px'){
        img.style.height = '260px';
        img.style.width = '260px'
    } else {
        img.style.width = "400px";
        img.style.height = "400px";
    }
    
}

const btn = document.getElementById('button');
const blue = 'Blue';
const red = 'Red'
btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = red;
});

btn.addEventListener('mouseout', function(){
    btn.style.backgroundColor = blue;
});