// 5. Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1

function count() {
    var str =prompt("Enter the string");
    obj = {};
    for(var i in str) {
        if(str[i] === ' ') {
            continue;
        }
        else if(isNaN(obj[str[i]])) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    console.log(obj);
    for(var i in obj) {
        console.log(i + ":", obj[i]);
    }
}
count();