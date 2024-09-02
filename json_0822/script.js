const student = { name: "david", major: "컴공", grade: 2 };
const json = JSON.stringify(student);
//이러면   js의 객체가 모두 문자열이 되며  json  파일로 변경된다.ㅓ

const origin = JSON.parse(json);
// json 파일로 변했던 student가 다시 객체의 형태로 바뀐다.

//방법
const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    // const result = document.querySelector("#result");
    // result.innerHTML = `${student.name}`;
  }
};

const from = document.querySelector("from");
const input = document.querySelector("#userNumber");

from.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = input.value

  try {
    if (value === "" || isNaN(value)) throw "숫자입력";
    value = Number(value);
  };
});
