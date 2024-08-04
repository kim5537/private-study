//타이를 값을 가져와서 글자바꾸기
//타이틀 값 가져오기 쿼리셀릭터

const main = document.querySelector("main");
// const profile = main.querySelector("main > #profile");
const profile = document.getElementById("profile");
console.log(profile);

const img = document.getElementsByClassName("image");
const h1 = document.getElementsByTagName("h1");

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  //background를 사용하면 충돌나며 기존 스타일이 사라질수있으니 구체적으로 하나를 집어 바꾸는 것이 좋다.
  //스크립트는 카멜법을 사용한다. -는 읽지못한다.
  this.style.color = "#fff";
});
