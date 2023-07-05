//5.find the reverse order
var ans="";
var arr=['a','b','c','d','e','f'];
var i=0;
var l=arr.length;
while(i<l){
    var temp=arr[i];
    arr[i]=arr[l];
    arr[l]=temp;
    i++;
    l--;
}
console.log(arr);