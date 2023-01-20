let count=11;
const timer=document.querySelector("#timer")

console.log(timer)
function timeout(){
    count=count-1;
timer.textContent =count;
   const id= setTimeout(timeout, 1000);
    if(count==0){
        clearTimeout(id);
 timer.innerHTML=`<div id="greet">Happy <br>Independence <br>Day!</div>`

timer.style.fontsize="10vh"
 
    }

}
