//1.최초에 보여줘야하는 ui디자인
//2. 모달창이 오픈 되었을 때 ui디자인
//3. 스크립트를 활용하여 위 2개의 디자인 요소를 어떻게 크로스할 것 인가.

const openBtn = document.querySelector("#open");
const modal = document.querySelector("#modal-box");

openBtn.addEventListener("click", function () {
  this.classList.add("btnActive");
  modal.classList.add("active");
});

const closeBtn = document.querySelector("#profile > button");
closeBtn.addEventListener("click", function () {
  openBtn.classList.remove("btnActive");
  modal.classList.remove("active");
});
