const form = document.querySelector("#form-insert");

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(email.value == ''){
        alert('Email cannot be empty');
    }
    else if(!isEmailValid(email.value)){
        alert('Incorrect Email Format');
    } 
    else if(password.isEmpty){
        alert('Password cannot be empty');
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