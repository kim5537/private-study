//포커스와 블러. 폼의 이벤트중 하나이다.
const userId = document.querySelector("#userId");
console.log(userId);

userId.addEventListener("focus", function (e) {
  this.style.backgroundColor = "pink";
});

userId.addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
