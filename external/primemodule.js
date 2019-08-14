module.exports.primecheck=(n)=>{
var m=n/2;
var flag=0;
for(var i=2;i<m;i++)
{
    if(n%1==0)
    console.log("not a prime number");
    flag=1;break;
}
if(flag==0)
{
    console.log("prime number")
}
}