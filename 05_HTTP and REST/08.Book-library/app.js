function attachEvents() {
  
  const BASE_URL= 'http://localhost:3030/jsonstore/collections/books/';
  const loadButton=document.getElementById('loadBooks');
  const tableBody=document.querySelector('table > tbody');

   const allInputs=Array.from(document.getElementsByTagName('input'));
   const titleInput=allInputs[0];
   const authorInput=allInputs[1];
  const formButton=document.querySelector('#form > button');
  const formHeader=document.querySelector('#form > h3');
 
  formButton.addEventListener('click', submitBook);
  loadButton.addEventListener('click' ,loadBooks);
 

  function loadBooks(){
      fetch(BASE_URL)
      .then((res) => res.json())
      .then((books)=>{
        

        tableBody.innerHTML='';

        for (const bookId in books) {

          const {author ,title } =books[bookId];

          let tableRow=document.createElement('tr');
          let tableAuthor=document.createElement('td');
          tableAuthor.textContent=author;
          let tableTitle=document.createElement('td');
          tableTitle.textContent=title;
          let tableButtons=document.createElement('td');

          let buttonEdit=document.createElement('button');
          buttonEdit.textContent='Edit';
          buttonEdit.id=bookId;
          buttonEdit.addEventListener('click' , () => {
             titleInput.value=title;
             authorInput.value=author ;
             formButton.textContent='Save';
             formHeader.textContent='Edit FORM';
             formHeader.id=bookId;
         });
          
          let buttonDelete=document.createElement('button');
          buttonDelete.textContent='Delete';
          buttonDelete.id=bookId;
          buttonDelete.addEventListener('click' ,deleteBook);

          tableButtons.appendChild(buttonEdit);
          tableButtons.appendChild(buttonDelete);

          
          tableRow.appendChild(tableTitle);
          tableRow.appendChild(tableAuthor);
          tableRow.appendChild(tableButtons);

          tableBody.appendChild(tableRow);
        }
      })
  }

  function submitBook(){
             
      if(formHeader.textContent==='FORM'){
        if(titleInput.value!=='' && authorInput.value!==''){
          
          let title=titleInput.value;
          let author=authorInput.value;

          let httpHeaders = {
            method:'POST',
            body: JSON.stringify({author,title})
          }

          fetch(BASE_URL,httpHeaders)
          .then(loadBooks);

          titleInput.value='';
          authorInput.value='';
        }       
      }
      else{
          let title=titleInput.value;
          let author=authorInput.value;

          let httpHeaders = {
            method:'PUT',
            body: JSON.stringify({author,title})
          }

          let url=BASE_URL+formHeader.id;

          fetch(url,httpHeaders)
          .then(loadBooks);

          formButton.textContent='Submit';
             formHeader.textContent='FORM';
          titleInput.value='';
          authorInput.value='';
      }  

  }

  function deleteBook(){

      let bookId=this.id;
      let url=BASE_URL+bookId
      let httpHeaders= {
        method: 'DELETE',        
      }
      fetch(url,httpHeaders)
      .then(loadBooks);
  }
}

attachEvents();