function solve() {
  let [textAreaGenerate, textAreaBuy] = Array.from(document.getElementsByTagName('textarea'));

  let [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));

  let tBody = document.querySelector('.table > tbody');

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);



  function generateHandler() {

    let inputData = JSON.parse(textAreaGenerate.value);

    for (const  { img, name, price, decFactor } of inputData) {
      let tRow=createElement('tr','','',tBody);

      let firstTd=createElement('td','','',tRow);  
      let htmlImg=createElement('img','','',firstTd,'',{src: img});

      let secondTd=createElement('td','','',tRow);
      let nameParagraph=createElement('p',name,'',secondTd);

      let thirdTd=createElement('td','','',tRow);
      let priceParagraph=createElement('p',price,'',thirdTd);

      let forthTd=createElement('td','','',tRow);
      let decFactorParagraph=createElement('p',decFactor,'',forthTd);

      let fifthTd=createElement('td','','',tRow);
      let checkBoxInput=createElement('input','','',fifthTd,'',{type:'checkbox'});
    
    }
  }
  function createElement(type, content, id, parentNode, classes, attributes) {

    let htmlElement = document.createElement(type);
  
  
    if (content && type !== 'input') {
      htmlElement.textContent = content;
    }
  
    if (content && type === 'input') {
      htmlElement.value = content;
    }
  
    if (id) {
      htmlElement.id = id;
    }
  
    if (classes) {
      htmlElement.classList.add(...classes);
    }
  
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }    
     }
  
     if(parentNode){
        parentNode.appendChild(htmlElement);
     }
  
     return htmlElement;
  }
  
  function buyHandler(){
      let checkedElements = Array.from(document.querySelectorAll('tbody tr input:checked'));
      let  textAreaBuy= Array.from(document.getElementsByTagName('textarea'))[1];
      
      let totalSum=0;
      let allNames=[];
      let averageDecFactor=0.0;
  
  for (const element of checkedElements) {
      let tableRow =element.parentElement.parentElement;
  
      let allTr=Array.from(tableRow.children);
  
      let name=allTr[1].firstChild.textContent;
      let price=Number(allTr[2].firstChild.textContent);
      let decFactor=Number(allTr[3].firstChild.textContent);
  
      allNames.push(name);
      totalSum+= price;
      averageDecFactor+=decFactor;
  
  }
      let buyAreaContent=  `Bought furniture: ${allNames.join(', ')}`+ '\n'
        + `Total price: ${totalSum.toFixed(2)}`+ '\n'
        + `Average decoration factor: ${averageDecFactor/checkedElements.length}`;
  
      textAreaBuy.value=buyAreaContent;
  }
}


