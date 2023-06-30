// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// input  = brainmentors
// output = sbrainmentor


var str = "brainmentors";
var len = str.length;
for (let i = 0 ; i < len ; i++) {
    var char = str.charAt(len - 1);
    var rot = char + str.substring(0,len-1);
    console.log(rot);
    str = rot;
}
