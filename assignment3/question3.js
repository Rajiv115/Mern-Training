
// 3.Given two strings, return true if they are anagrams of one another
// For example: Mary is an anagram of Army

function ana(s1 , s2) {
    var str1 = s1.split('').sort().join('');
    var str2 = s2.split('').sort().join('');
    if (str1 === str2) {
        console.log("strings are anagram");
    }
    else {
        console.log("strings are not anagram");
    }
} 

ana("mary","army");