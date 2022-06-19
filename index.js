let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");

for (item of buttons) {
    item.addEventListener("click",(e)=>
    {
        btntext = e.target.innerText;
        if(btntext=='X')
        {
            btntext = '*';
            screen.value += btntext;
        }
        else if(btntext=='CE')
        {
            screen.value = "";
        }
        else if(btntext=='=')
        {
            screen.value = eval(screen.value);
        }
        else if(btntext=='C')
        {
            screen.value=screen.value.slice(0,screen.value.length-1);
        }
        else
        {
            screen.value += btntext;
        }
        
    })
}




