function solve() {
  const inputElement = document.getElementById('input');
  const outputElement = document.getElementById('output');
  let text = inputElement.value;
  let sentences = text.split('.');
  sentences.pop();

  while(sentences.length > 0){
    let paragraphSentences = sentences
      .splice(0, 3)
      .map((p)=> p.trimStart());

    const newParagraph = document.createElement('p');

    newParagraph.textContent = paragraphSentences.join('.') + '.';
    outputElement.appendChild(newParagraph);
  }
}