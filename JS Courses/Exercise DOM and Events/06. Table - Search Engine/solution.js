function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const targetInput = document.getElementById('searchField');
      const tableElements = Array.from(document.querySelectorAll('tbody > tr > td'));
      const rows = Array.from(document.querySelectorAll('tbody > tr'));
      for (const row of rows) {
         row.removeAttribute('class','select');
      }

      for (const definition of tableElements) {
         if(definition.textContent.includes(targetInput.value)){
            definition.parentElement.setAttribute('class', 'select');
         }
      }

      targetInput.value = '';
   }
}