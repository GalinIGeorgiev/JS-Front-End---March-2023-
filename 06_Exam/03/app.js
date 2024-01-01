function app() {

    
   const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

   let buttonsDOMSelector ={
    addButton: document.getElementById('add-course'),
    editButton: document.getElementById('edit-course'),
    loadAllButton: document.getElementById('load-course')
   }
   buttonsDOMSelector.loadAllButton.addEventListener('click',loadAllCourses);
   buttonsDOMSelector.addButton.addEventListener('click',addCourse);
   buttonsDOMSelector.editButton.addEventListener('click',putCourse);

   let inputDOMSelectors ={
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name')      
   }

   let idHolder='';

   let divToAdd = document.getElementById('list');
   let form = document.querySelector('form');
  

   function putCourse(event){
   
    const {title,type,description,teacher} = inputDOMSelectors;
       
            
          const objectPost =JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value
          });

           const httpHeaders = {
            method: 'PUT',
            body: objectPost
           };



           fetch(BASE_URL+idHolder,httpHeaders)
           .then(loadAllCourses())

           form.reset();

           buttonsDOMSelector.editButton.setAttribute('disabled', true);
           buttonsDOMSelector.addButton.removeAttribute('disabled');

   }

   function loadAllCourses(){
        

        divToAdd.innerHTML='';
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((allCourses)=>{

            
          let  currentCourses=Object.values(allCourses);

          for (const {title,type,description,teacher,_id} of currentCourses) {

          

            let div= createElement('div',divToAdd,'',['container'],_id);
            createElement('h2',div,title);
            createElement('h3',div,teacher);
            createElement('h3',div,type);
            createElement('h4',div,description);
            let editButton=createElement('button',div,'Edit Course',['edit-btn']);
            editButton.addEventListener('click', editCourse);

            let finishButton=createElement('button',div,'Finish Course',['finish-btn']);
            finishButton.addEventListener('click', deleteCourse);

          }
        })
   }

   function editCourse(event){   

        let allElements= this.parentNode.children;
       
        inputDOMSelectors.title.value=allElements[0].textContent;
        inputDOMSelectors.teacher.value=allElements[1].textContent;
        inputDOMSelectors.type.value=allElements[2].textContent;
        inputDOMSelectors.description.value=allElements[3].textContent;

        buttonsDOMSelector.addButton.setAttribute('disabled', true);
        buttonsDOMSelector.editButton.removeAttribute('disabled');

        idHolder=this.parentNode.id;

   }

   function deleteCourse(){  

        
        let id= this.parentNode.id;


        const httpHeaders = {
            method: 'DELETE'           
           };

           let url= BASE_URL+id;
           console.log(url);

           fetch(url,httpHeaders)
           .then(() =>loadAllCourses())


   } 

   function addCourse(event){

    if(event){
        event.preventDefault();
    }
    
    let allInputsHaveValue= Object.values(inputDOMSelectors).every( (x) => x.value!=='');
    if(allInputsHaveValue){


        const {title,type,description,teacher}= inputDOMSelectors;
       
          
          const objectPost =JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value
          });

           const httpHeaders = {
            method: 'POST',
            body: objectPost
           };


           fetch(BASE_URL,httpHeaders)
           .then(loadAllCourses())

           form.reset();
    }


   }


   function createElement(type, parentNode,content, classes, id, attributes, useInnerHtml){
    let element=document.createElement(type);

    if(content && useInnerHtml){
        element.innerHTML=content;
    } else {

      if(content && type!=='input'){
        element.textContent=content;
      }

      if(content && type==='input'){
        element.value=content;
      }
    }

    if(classes && classes.length>0){
      element.classList.add(...classes);
    }

    if(id){
      element.id=id;
    }

    if(attributes){
      for (const key in attributes) {
         element.setAttribute(key,attributes[key]);
      }

    }

    if(parentNode){
      parentNode.appendChild(element);
    }
	
	return element;
  }
}


app();