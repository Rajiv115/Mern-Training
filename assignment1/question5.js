// WAP to find out if 1st January will be a Sunday between 2000 and 2030
var x=0;
for(var a=2000;a<=2030;a++){
    var k=a.toString();
    var date=new Date(k);
    var day=date.getDay();
    if(day==0) x++;
}
console.log(x);