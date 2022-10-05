const endDate = "26 October 2022 11:30 PM"
document.getElementById('end-date').innerText= endDate;
const inputs = document.querySelectorAll("input");


const clock =()=>
{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    if(diff < 0)return;
    //convert into days
    inputs[0].value=Math.floor(diff/(3600*24));
    //hours
    inputs[1].value = Math.floor((diff/3600)%24);
    //minutes
    inputs[2].value = Math.floor((diff/60)%60);
    //seconds
    inputs[3].value = Math.floor((diff)%60);
}


//inital call
clock();
setInterval(
    ()=>{
       clock(); 
    },1000
);