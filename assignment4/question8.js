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