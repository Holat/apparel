const arrow = document.querySelector('.arrow');
const errors = document.querySelectorAll('.error');
const email = document.querySelector('.email');


arrow.addEventListener('click',function(){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if(!regexMatch){
        errors.forEach(function(error){
            error.style.display = 'block'
        });
        email.value = ''
    }
    else{
        errors.forEach(function(error){
            error.style.display = 'none'
        });
        email.value = ''
    }
});