// Q6. Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1

function sum(x){
    var even = 0;
    var odd = 0;
    var i = 0;
    while(x!=0){
        if(i%2==0){
            var n = x%10;
            even = even + n;
        }
        else{
            var m = x%10;
            odd = odd + m;
        }
        i++;
        x = parseInt(x/10);
    }
    console.log(`Sum of even place digit is: ${even}`);
    console.log(`Sum of odd place digit is: ${odd}`);
}
sum(5611);
//sum(prompt("enter the number"));