const inputText = document.querySelector("input[type='text']");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //prevent : ~ 를 막다.방해하다
  const word = inputText.value;
  const count = word.length;
  alert(`그만 ${word}씨,${count}개의 글자를 쓰셨군요`);
});
//("input[type='원하는타입']")
//submit
//.value == 안에 속성의 값.
