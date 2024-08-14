const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.remove("active");
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    let message = "";
    let imageURL = "";
    switch (index) {
      case 0:
        message = "별로에요";
        imageURL = "./img/star-lv1.png";
        break;
    }
    print.innerHTML = `<img src="${imageURL}">${message}`;
  });
});
