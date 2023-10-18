function solve() {
  let inputElement = document.getElementById('input');
  let outputDiv = document.getElementById('output');
  let input =Array.from(inputElement.value.split('.'));
  input.pop();


  while(input.length>0){
    let sentences= input.splice(0,3).map((p) => p.trimStart());
    let paragraph = document.createElement('p');
    paragraph.textContent=sentences.join('.')+'.';
    outputDiv.appendChild(paragraph);

  }

}