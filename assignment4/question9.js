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