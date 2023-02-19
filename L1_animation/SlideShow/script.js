index=0;
var myTimeout;
slideshow()
function slideshow(){
x=$(".slide");
for(i=0;i<x.length;i++)
 x[i].style.display="none"
if(index>x.length-1) index=0
x[index].style.display="block"
index++;
myTimeout =setTimeout(slideshow,1500)
}
var flag=true;

$("#stop").on("click",function(e){
    if(flag)
    {
        clearTimeout(myTimeout);
        $("#stop").text("Continue");
        flag=false;
    }
    else
    {
        console.log(e)
     slideshow()
    $("#stop").text("Stop");
    }

})

