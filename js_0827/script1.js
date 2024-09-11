const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

const addtodo = (e) => {
  e.preventDefault();
  if (todoItem.value !== "") {
    const newLi = document.createElement("li");
    newLi.classList.add("todo");

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todoItem.value;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);
  }
};

form.addEventListener("submit", addtodo);
