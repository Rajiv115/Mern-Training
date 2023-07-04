//1.find occurence
// var arr=[19,22,18,19,16,18,19,21,24];
// var target=19;
// var h=arr.filter(e=>e==19);
// console.log(h.length);
//Done
//2.reverse string
var str="BrainMentors";
var ans="";
for(var i=str.length-1;i>=0;i--){
    var h=str[i];
    ans=ans+h;
}
console.log(ans);
//find occurence of vowels
var str="brainmentors";
var arr=str.split("");
var h=arr.filter(e=>(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'));
console.log(h.length);
//find sum
var arr=[1,2,3,4,5];
var res=arr.reduce((acc,e)=>acc+e,0);
console.log(res);
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
//6.remove a specific element
var arr=[1,2,3,4,5];
var remove=3;
var h=arr.filter(e=>e!=remove);
console.log(h);
//7.second largest
var arr=[12,4,6,9,2,15,3,9];
arr.sort((a,b)=>b-a);
console.log(arr[1]);
//8.remove duplicate
var arr=[1,2,5,2,5,1,6,7,7];
arr.sort((a,b)=>a-b);
var temp=[];
for(var i=0;i<arr.length-1;i++){
   if(arr[i]==arr[i+1]) continue;
   temp.push(arr[i]);
}
temp.push(arr[arr.length-1]);
console.log(temp);

console.log(temp);
//9.intersection
var arr=[2,4,1,7,4,2];
var arr1=[5,1,4,7,3,1];
var d=[];
var f=[];
var temp=[];
for(var i=0;i<arr.length;i++){
    var f=0;
    for(var j=0;j<arr1.length;j++){
        if(arr[i]==arr1[j]){
           f=1;
    }
    if(f==1){
        temp.push(arr[i]);
    }
}
}
temp.sort();
var ans=[];
for(var i=0;i<temp.length-1;i++){
    if(temp[i]==temp[i+1]) continue;
    ans.push(temp[i]);
 }
 ans.push(temp[temp.length-1]);
console.log(ans);
//10.rotate
var arr=[1,2,3,4,5];
var step=2;
for(var i=0;i<step;i++){
    arr.unshift(arr.pop());

}
console.log(arr);


