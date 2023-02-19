var maininput = $("#maininput");
var  deleteAll = $("#ClrAll");
var  add = $("#add");
var  remove = $(".btnDel");
var  done = $(".btnDone");
var  task = $('.task');     
var  newtask = $(".newtask");

function createElement(text){
  
    var div = ` <div class="task">
                    <input type="text" class="newtask" readonly>
                    <span class="btnDel">remove</span>
                    <span class="btnDone">done</span>
                </div>`;
 
    task.append(div);

    newtask = $('.newtask')
    newtask.eq(newtask.length-1).val(`${text}`)

    maininput.val("");

}


add.on('click' , ()=>{
    if(maininput.val() !== ""){

        createElement(maininput.val());

    }
})



task.on('click',(e)=>{

    if(e.target.classList == 'btnDel' ){

        e.target.parentNode.remove();
    }
  if(e.target.classList == 'btnDone' ){

if(e.target.parentNode.childNodes[1].classList == 'newtask')
    {
        e.target.parentNode.childNodes[1].classList.add("marked");
       e.target.textContent="undo"
    }
    else
    {
        e.target.parentNode.childNodes[1].classList.remove("marked");
        e.target.textContent="done"
    }
}
})



deleteAll.on('click',function(){
 
    task.html(" ");
    inputMain.val();

})