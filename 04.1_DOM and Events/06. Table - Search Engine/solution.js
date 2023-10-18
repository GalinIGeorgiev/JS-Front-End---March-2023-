function solve() {
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(e) {

      let trArray= Array.from(document.querySelectorAll('tbody tr'));
      

      let btn=e.currentTarget;
      let parent=btn.parentElement;
      let word=parent.firstElementChild;
      let search= word.value;
      
      for (const tRow of trArray) {
         tRow.classList.remove('select');
         if(tRow.textContent.trim().includes(search)){
            tRow.classList.add('select');
            console.log(tRow.textContent);
         }
         
      }
   }
}