const button = document.querySelector("input[tyle='submit']");
const form = document.querySelector("form");

//form의 submit은 값을 제출하는 목적으로 만들어진 버튼이기 때문에 이벤트로 click이 아닌 submit으로 사용하는게 옳은 표현

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //만들기 위해 일단 서브밋의 주소이동하는 속성을 막는다.
  const orderName = document.order.orderName;
  // 네임값으로 css 선택자처럼qure를 사용하지 않고 불러 올 수 있다.
  console.log(orderName.value);
  //해당 폼 안의 입력한 내용을 가저오는 .value
});

console.log(document.forms);
//폼을 가져올 땐 s를 붙여 가져온다 .해당 내용을 보면 배열의 형태로, 0인덱스를 가진 forms안에 배열의 형태로 각 폼요소들이 들어가 있는 걸 확인 할 수 있다
//따라서 배열로 호출이 가능하다. 호출할때는 elements 를 사용한다.
console.log(document.forms[0].elements[4]);

//셀랙트 태그또한 네임으로 가져올 수 있다

const select = document.querySelector("#fruits");
console.log(select.options[1].value);
//샐렉트역시 배열의 형태로 가져온다.(유사배열) 이때는 option을 사용하고 해당하는 이름을 가져올땐 value를 사용한다.

select.addEventListener("change", function () {
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다!`);
});

//에드이벤트리스너의 change를 사용하여 변화를 감지하면 해당값을 찾아오는 함수를 만들수있다.
// this.options[this.selectedIndex].innerText;을 풀이하면
//this는 화살표함수가 아닌 function을 사용하였기에 윈도우가 아닌 selec를 바르게 찾아올 수 있다.
// option은 앞에서 보았든 selet내에 포함된 값을 가져올 때 사용한다. 여기서 대괄호를 사용해 해당 인덱스값을 가진 아이템을 가져올 수 있다
//여기선 인덱스값을 선택된 옵션으로 가져오기 위해 selct의 유사배열만이 가진 selectIndex를 사용하였다. 이는 말그대로 셀렉트내의 인덱스값을 말한다.
//인덱스를 보여줄 것이 아닌 그 인덱스를 가진 텍스트를 가져오기 위해 innerText 브라우저객체모델을 사용하였다.

const checkBox = document.querySelector("input[name='alarm']:checked");
//라디오의 값도 가져올 수 있는데변수를 선언 input라디오가 가진 체크되었을때 생기는 속성인 checked를 브라우저객체모델 querySelector로 가져오면 해당 요소를 가져올 수있다.
