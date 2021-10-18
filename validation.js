const form = document.querySelector("#form-insert");

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById('confirm');
    const check = document.getElementById('term');

    if(isEmpty(name.value)){
        alert('Username cannot be empty');
    } 
    else if(email.value == ''){
        alert('Email cannot be empty');
    }
    else if(!isEmailValid(email.value)){
        alert('Incorrect Email Format');
    } 
    else if(password.value.length<8){
        alert('Password must be 8 characters minimum');
    } 
    else if(password.isEmpty){
        alert('Password cannot be empty');
    }
    else if(confirm.value != password.value){
        alert('Password is not the same');
    } 
    else if(!check.checked){
        alert('You must agree to the term and conditions');
    }
   
});

function isEmpty(str){
    return str === "";
}
function isEmailValid(value){
    if(value.split('@').length != 2){
        return false;
    }
    if(!value.endsWith('.com')){
        return false;
    }
    if(value.includes('@.') || value.includes('.@')) {
        return false;
    }
    return true;
}