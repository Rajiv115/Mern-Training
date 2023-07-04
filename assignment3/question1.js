// Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
//   3==multiply, 4==divide ).Don`t use switch statement or if else statements  1.add,
//   2.subtract,
//    3.multiply,
//    4.divide 
//    write the calc function for all the operations
    
    
    function calculate(){
        var num1=parseInt(prompt("Enter 1st number"));
        var num2=parseInt(prompt("Enter 2nd Number"));
        var op=parseInt(prompt("Enter operation to be performed 1=add, 2=sub,3=multiply,4=divide"));
        function add(){
            return num1+num2;
        }
        function sub(){
            return num1-num2;
        }
        function multiply(){
            return num1*num2;
        }
        function divide(){
            return num1/num2
        }
        var obj={1:add(),2:sub(),3:multiply(),4:divide()};
        return obj[op];
    }
    calculate();