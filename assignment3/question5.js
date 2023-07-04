// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]
// output = maxno. : 15
// minno. : -1
function minMax(){
    var arr = [10,3,15,-1,9,6];
        var min=0;var max=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
            }
            if(arr[i]<min){
                min=arr[i];
            }
        }
        console.log('MAX ',max);
        console.log("MIN ",min);
    }