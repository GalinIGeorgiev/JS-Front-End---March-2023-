function attachEvents() {
    const BASE_URL='http://localhost:3030/jsonstore/phonebook/';
    const loadBtn=document.getElementById('btnLoad');
    
    const phoneBookUl= document.getElementById('phonebook');

    const personInput=document.getElementById('person');
    const phoneInput=document.getElementById('phone');
    const btnCreate=document.getElementById('btnCreate');

    btnCreate.addEventListener('click', createContact);

    loadBtn.addEventListener('click', loadPhoneBook);

    function loadPhoneBook(){
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((peopleInfo) => {
            let peopleData=Object.values(peopleInfo);

            document.getElementById("phonebook").innerHTML = "";
            
            
            for (const {person , phone, _id} of peopleData) {
 
                let phoneBookLi= document.createElement('li');
                phoneBookLi.textContent=`${person}: ${phone}`

                let deleteBtn= document.createElement('button');
                deleteBtn.textContent='Delete';
                deleteBtn.id=_id;
                deleteBtn.addEventListener('click', deleteContact);


                phoneBookLi.appendChild(deleteBtn);
               
                phoneBookUl.appendChild(phoneBookLi);
                               
            }
        })
        .catch((err) => {
                console.log(err);
        })       
    
    
    }   
    function deleteContact(){
        let httpHeaders = {method:'DELETE'}
        
        fetch(`${BASE_URL}${this.id}` , httpHeaders)
        .then(loadPhoneBook)
        .catch((err)=> {
            console.log(err);
        })
        
    }

    function createContact(){
        let person = personInput.value;
        let phone = phoneInput.value;
        console.log(person+phone);

        let httpHeaders= {method:'POST' ,
                         body:JSON.stringify({person:person,phone:phone}) };

         fetch(BASE_URL,httpHeaders)
         .then((res)=> res.json())
         .then(() => {
            loadPhoneBook();
              personInput.value='';
              phoneInput.value='';
        })
         .catch((err)=>{
            console.log(err);
         })               
    } 
}

attachEvents();