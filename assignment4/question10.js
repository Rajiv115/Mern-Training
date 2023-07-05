//10.rotate
var arr=[1,2,3,4,5];
var step=2;
for(var i=0;i<step;i++){
    arr.unshift(arr.pop());

}
console.log(arr);