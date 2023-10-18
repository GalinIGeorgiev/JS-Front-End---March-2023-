function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extraDiv = document.getElementById('extra');
    console.log(extraDiv);

    if(button.textContent==='More'){
        button.textContent='Less';
        extraDiv.style.display='block';
        
    }
    else{
        button.textContent='More';
        extraDiv.style.display='none';
       
    }

}