function editElement() {
    let element=editElement.arguments[0];
    let oldText=editElement.arguments[1];
    let newText=editElement.arguments[2];
    
     element.textContent= element.textContent.replace(oldText,newText);
    
    
}