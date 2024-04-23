(()  => 
{
    let count = 0;
    const WAIT_TIMER_MS = 600;
    let timeout;

    let mas = []
    let tempmas = [];
    function checkf()
    {
        let temp = Math.floor(Math.random() * (16 - 0) + 0); //random from 1 to 16 (choise button)
        let flag = false;
        for(let i=0;i<mas.length;++i)
        {
            if(temp === mas[i])
            {
                flag=true;break;
            }
        }
        if(flag === false)
        {
            mas.push(temp)
            return temp;
        }
        else{
          return checkf();
        }
    }

    function checks()
    {
        let text = Math.floor(Math.random() * (9 - 1) + 1); // choise number
        let flag = false;
        for(let i=0;i<tempmas.length;++i)
        {
            if(text === tempmas[i])
            {
                flag=true;break;
            }
        }
        if(flag===false)
        {
            tempmas.push(text);
            return text;
        }else
        {
            return checks();
        }
    }
    let flag = false;
    let first;
    document.addEventListener('DOMContentLoaded', ()=>
    {
        let texts =  document.querySelectorAll('.container_ul_li_p');
        
        for(let i=0;i<8;++i)
        {
            let temp = checkf();
            let text = checks();
            texts[temp].textContent = text;
        }
        tempmas = [];
        for(let i=0;i<8;++i)
        {
            let temp = checkf();
            let text = checks();
            texts[temp].textContent = text;
        }

        let bool=false;
        let buttons = document.querySelectorAll('.container_ul_li');
        buttons.forEach((button) => 
        {
            let click = button.addEventListener('click', function(){
                button.style.color = "white";
                if(flag===false)
                {
                    flag = true;
                    first = button;
                }
                else
                {
                    if(first.textContent === button.textContent)
                    {
                        flag=false;
                        count +=2;
                        if(count == 16)
                        {                        
                            let restart_btn = document.createElement('button')
                            restart_btn.classList.add('restart');
                            restart_btn.textContent='restart';
                            let restart=document.querySelector('.container_ul');
                            restart_btn.addEventListener('click', () => {
                                location.reload();
                            });
                            restart.append(restart_btn);
                        }
                    }
                    else
                    {
                        clearTimeout(timeout);
                        timeout = setTimeout(()=>
                        {
                            button.style.color = 'rgb(54, 71, 71)';
                            first.style.color = 'rgb(54, 71, 71)';
                            flag=false;
                        },WAIT_TIMER_MS);
                    }
                }
            });
        });
    });
})();