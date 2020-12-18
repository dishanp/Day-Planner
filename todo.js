let but=document.getElementById('flipbutton');
let agenda=document.getElementById('ToDoInput');
let showboard=document.getElementById('show')
but.addEventListener("click",function()
{
   var para=document.createElement('p');
   para.innerText=agenda.value;
   showboard.appendChild(para);
   agenda.value="";
   para.addEventListener("dblclick",function(){
      showboard.removeChild(para);
   })
   para.addEventListener("click",function(){
    para.style.textDecoration="line-through"
 })
})