window.addEventListener('scroll', function(){
    if( document.documentElement.scrollTop > 200 ){
        scrollBtn.style.display ="block"
    }
    else scrollBtn.style.display ="none"
})

let form = document.querySelector("#form-Id")

function nameValidation(input){
    let inputValue= input.value.trim()

    if (inputValue.length < 8){
        handleError(input , "must be 8 or more ")
    }
    else {
        handleError(input)
    }

}

function emailValidation(input){

    let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!regExp.test(input.value)) {handleError(input, "invalid email")}
    else handleError(input)
}

function passwordValidation(input){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!strongRegex.test(input.value)) handleError(input, "invalid password")

    else handleError(input)
}

form.addEventListener('input' , function(e){

    switch(e.target.id){
        case "userName-Id" :
            nameValidation(e.target)
            break;

        case "email-Id" :
            emailValidation(e.target)
            break;

        case "pass-Id" :
            passwordValidation(e.target)
            break;
    }
})

function handleError(element , msg =" "){
    element.nextElementSibling.innerText = msg
}



  


