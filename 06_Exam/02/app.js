window.addEventListener("load", solve);

function solve() {

   let inputDOMSelectors= {
        title: document.getElementById('task-title'),
        category: document.getElementById('task-category'),
        content: document.getElementById('task-content'),
   }

    let form=document.querySelector('form');

    let publishButton= document.getElementById('publish-btn');
    publishButton.addEventListener('click', publishTask);

    let reviewListUl=document.getElementById('review-list');

    let publishedListUl=document.getElementById('published-list');


   function publishTask(){

        let allInputsHaveValue= Object.values(inputDOMSelectors).every( (x) => x.value!=='');
        if(allInputsHaveValue){
            let li = createElement('li',reviewListUl,'',['rpost'])
            let article = createElement('article',li);
            createElement('h4',article,inputDOMSelectors.title.value);
            createElement('p',article,`Category: `+inputDOMSelectors.category.value);
            createElement('p',article,`Content: `+inputDOMSelectors.content.value);
            let editButton=createElement('button',li,'Edit',['action-btn','edit']);
            editButton.addEventListener('click', editTask);
    
           let postButton= createElement('button',li,'Post',['action-btn','post']);
           postButton.addEventListener('click', postTask);
    
           form.reset();
        }

       
   }

   function editTask(){
        let parent = this.parentNode.firstChild.children;

        inputDOMSelectors.title.value=parent[0].textContent.split(':');
        inputDOMSelectors.category.value=parent[1].textContent.split(':')[1].trim();
        inputDOMSelectors.content.value=parent[2].textContent.split(':')[1].trim();

        this.parentNode.remove();
        
   }
   function postTask(){

        let parent = this.parentNode;
        parent.querySelector('button').remove();
        parent.querySelector('button').remove();
        publishedListUl.appendChild(parent);
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