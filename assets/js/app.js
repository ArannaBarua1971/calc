let strings="";
let buttons=document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(button);
        strings=strings+button.innerHTML;
        document.getElementById('in').innerHTML
    })
})