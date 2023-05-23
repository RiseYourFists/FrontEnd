function create(words) {
   const wrapperDiv = document.getElementById('content');

   words.forEach(element => {
      let paragraph = document.createElement('p')
      paragraph.textContent = element;
      paragraph.style.display = 'none';

      let wrapper = document.createElement('div');
      wrapper.appendChild(paragraph);
      wrapper.addEventListener('click', onClickHandler);
      
      wrapperDiv.appendChild(wrapper);
   });

   function onClickHandler(e){
      let target = e.target;
      target.children[0].style.display = 'block';
   }
}