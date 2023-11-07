function attachEvents() {
    const BASE_URL='http://localhost:3030/jsonstore/messenger';
    const refreshButton= document.getElementById('refresh');
    const sendButton= document.getElementById('submit');
    const textArea= document.getElementById('messages');
     const inputFields=Array.from(document.getElementById('controls').getElementsByTagName('input'));


    refreshButton.addEventListener('click', getMesseges)
    sendButton.addEventListener('click', sendMesseges)

   function getMesseges(){

    textArea.innerHTML='';

        fetch(BASE_URL)
        .then((res)=> res.json())
        .then((messeges) =>{

            for (const key in messeges) {
                let {author , content} = messeges[key];

                if(textArea.textContent!==''){
                    textArea.textContent+='\n';
                }
                textArea.textContent+=author +': '+content ;
            }
            
        }) 
   }

   function sendMesseges(){

    const author=inputFields[0].value;
    const content=inputFields[1].value;

    if(author!=='' &&  content !==''){
        let httpHeaders= {
            method:'POST',
            body: JSON.stringify({author,content})
        }
    
            fetch(BASE_URL,httpHeaders)
            
            inputFields[0].value='';
            inputFields[1].value='';
       }
    }   
}

attachEvents();