let strings="";
let buttons=document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="=") {
            strings=eval(strings);
            document.getElementById('in').value=strings;
        }
        else if(e.target.innerHTML=="AC")
        {
            strings="";
            document.getElementById('in').value=strings;
        }
        else{
            strings=strings+e.target.innerHTML;
            document.getElementById('in').value=strings;
        }
    })
})