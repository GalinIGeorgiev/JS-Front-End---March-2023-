function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    
    for (const button of buttons) {
        
        button.addEventListener('click' ,toggleInfo)
    }
    

    function toggleInfo(e){
        let btn =e.currentTarget; 
        
        let parent= btn.parentElement;
        let showDiv=Array.from(parent.children)[9];
        let lockCheck=Array.from(parent.children)[4];

        if (lockCheck.checked) {
            if(btn.textContent==='Show more'){
                showDiv.style.display='block';
                btn.textContent='Hide it';
            }
           else {
                showDiv.style.display='none';
                btn.textContent='Show more';
            }
        }
            
    }
}