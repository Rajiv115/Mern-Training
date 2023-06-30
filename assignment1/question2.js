/* Write a JavaScript program to get the current date.
   Expected Output :
   mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
function ExpectedOutput(){
    var date=new Date();
    var getmonth=date.getMonth();
    var getyear=date.getFullYear();
    var getdate=date.getDate();
    var s=`${getmonth+1}-${getdate}-${getyear},${getmonth+1}/${getdate}/${getyear} or ${getdate}-${getmonth+1}-${getyear},${getdate}/${getmonth+1}/${getyear}`;
    console.log(s);
}
ExpectedOutput();