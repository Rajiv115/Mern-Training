// Write a javaScript program to display the current day and time in the following format.
//Today is : wednesday.
//Current time is : 10PM : 30 :38

var date=new Date();
var currDay=date.getDay();
var days={ 0:"Sunday" , 1:"Monday" , 2:"Tuesday" , 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
console.log("Today is : " + days[currDay]);
var hour=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var hr=hour>=12?"PM":"AM";
hour%=12;
hour=hour?hour:12;  //the hour '0' should be '12'. 
console.log(`Current time is : ${hour}${hr} : ${min} : ${sec}`);
