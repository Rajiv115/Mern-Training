// Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long


function validateMobile(num) {
    if (num.length != 10) {
        console.log("The number you have entered is invalid,plz try again later..");
        return;
    }
    num = parseInt(num);
   // num = num + "";
    if (num.length == 10) {
        console.log("you have entered the valid mobile number");
    }
    else {
        console.log("Number is not valid");
    }
}
validateMobile("9958369873");
//validateMobile(prompt("enter your mobile number"));