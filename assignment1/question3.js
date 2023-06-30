// Write a program to print area and perimeter of rectangle , taking input from the user , using prompt

  
    var ln=parseInt(prompt("Enter the length of rectangle"));
    var br=parseInt(prompt("Enter the breadth of rectangle"));
    console.log("Area is "+ ln*br);
    var s=2*(ln+br);
    console.log("Perimeter is "+ s);
