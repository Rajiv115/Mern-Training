// Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu

function emailValidation(email)
{
    if(email.includes('@')){
        if(email.endsWith('.com')||email.endsWith('.org')||email.endsWith('.edu.in')){
             console.log('Valid Email');
        }
        else{
            console.log('Email must end with .com, .org, .edu ');
        }
    }
    else{
        console.log('Email must include @');
    }
}
emailValidation(prompt("enter the email address for validation purpose"));