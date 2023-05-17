
function password(){
    let input = document.getElementById('password').value;
    let text = document.getElementById('text');
    // length=input.length
    if(input.length<=5){
        text.style.color = 'red';
        text.innerText = 'Password is weak';
        document.querySelector('.input').style.border="2px solid red"
    }else if(input.length>5&&input.length<=10){
        text.style.color = 'yellow';
        text.innerText = 'Password is medium';
        document.querySelector('.input').style.border="2px solid yellow"
    }else{
        text.style.color = 'green';
        text.innerText = 'Password is strong';
        document.querySelector('.input').style.border="2px solid green"
    }
}
document.getElementById('password').addEventListener('keyup', password);