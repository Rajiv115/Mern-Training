// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors


function firstLetterToUpper(str) {
    var arr = str.split(' ');
    var ans = "";
    for (var idx in arr) {
        var curr = arr[idx];
        curr = curr.charAt(0).toUpperCase() + curr.substring(1).toLowerCase() + " ";
        ans = ans + curr;
    }
    console.log(ans);
}

firstLetterToUpper("hello hOW are YOU");