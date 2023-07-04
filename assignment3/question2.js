// Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.
// Output:
// "true" if the triangle is equilateral and "false" if its not.



function checkequilateral(a,b,c){
   return (a==b && b==c)?true:false;
}
function triangle(a,b,c,fn){
    if(fn(a,b,c)){
        console.log('True');
    }
    else{
        console.log('false');
    }
}
triangle(3,6,4,checkequilateral);
