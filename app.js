let textarea = document.querySelector('#text');
let character = document.querySelector('#characters');

let text;
let word = document.querySelector('#words');
textarea.addEventListener('keydown', (key) => {
  characterCounter();

  wordCounter();
});
function wordCounter() {
  text = textarea.value;
  let words = text.split(' ');

  word.innerHTML = `${words.length} Words`;
}

function characterCounter() {
  text = textarea.value;
  character.innerHTML = `${text.length + 1} Characters`;
}
