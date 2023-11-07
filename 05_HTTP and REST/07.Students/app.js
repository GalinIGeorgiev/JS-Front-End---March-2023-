function attachEvents() {
    const BASE_URL ='http://localhost:3030/jsonstore/collections/students/'

    const tBody= document.getElementById('results').getElementsByTagName('tbody')[0];
    const submitButton= document.getElementById('submit');
  
    submitButton.addEventListener('click' ,submit);
       
    fetch(BASE_URL)
    .then((res) => res.json())
    .then( studentsDatabase => {

      for (const key in studentsDatabase) {
        let {firstName,lastName,facultyNumber,grade}= studentsDatabase[key]
        
        const tr = document.createElement('tr');

        const tdFirstName = document.createElement('td');
        tdFirstName.textContent=firstName;
        const tdLastName = document.createElement('td');
        tdLastName.textContent=lastName;
        const tdFacultyNumber = document.createElement('td');
        tdFacultyNumber.textContent=facultyNumber;
        const tdGrade = document.createElement('td');
        tdGrade.textContent=grade;
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);

       tBody.appendChild(tr);
      }
    })


     function submit(){
      let inputs=Array.from(document.getElementsByClassName('inputs')[0].getElementsByTagName('input'));
      firstName= inputs[0].value;
      lastName=  inputs[1].value;
      facultyNumber=inputs[2].value;
      grade=inputs[3].value;

      console.log(firstName,lastName,grade);
        httpHeaders={
          method:'POST',
          body: JSON.stringify({firstName,lastName,facultyNumber,grade})
        }
        fetch(BASE_URL,httpHeaders)

        inputs[0].value=''; 
        inputs[1].value=''; 
        inputs[2].value=''; 
        inputs[3].value=''; 
       }         
    }
  
attachEvents();