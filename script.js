var star=document.getElementsByClassName('btn');
console.log(star);
/*for (let i=0;i<star.length;i++)
{
    like.addEventListener("click",function(){
       if(star[i].style.color=="yellow"){
        star[i].style.color=="black";
       }
       else{
        star[i].style.color="yellow";
       }
    });
}*/
var cc=['red','black']
var j=0
for (let i=0;i<star.length;i++)
{
    star[i].addEventListener('click',function(){
        j= j< cc.length ? ++j : 0;
        star[i].style.color=cc[j];
    })
}