

// /**
//  * 전체 체크버튼이 활성화 상태에 따른 기본 체크박스 전체 선택
//  * @param all_selector 전체 체크박스 셀렉터
//  * @param check_selector 체크박스 셀렉터
//  */
// function checkAllToggle(all_selector, check_selector){
//   let el_all_check = document.querySelector(all_selector);
//   let el_check_all = document.querySelectorAll(check_selector);
//   let is_check = el_all_check.checked;

//   if( is_check === true ){
//       el_check_all.forEach((checkbox) => {
//           if( checkbox.disabled !== true ){
//               checkbox.setAttribute('checked', 'checked');
//               checkbox.checked = true;
//           }
//       })
//   } else {
//       el_check_all.forEach((checkbox) => {
//           checkbox.removeAttribute('checked', 'checked');
//           checkbox.checked = false;
//       })
//   }
// }

// /**
// * 체크박스 선택수에 따라 전체 선택 체크 활성/비활성
// * @param all_selector 전체 체크박스 셀렉터
// * @param check_selector 체크박스 셀렉터
// */
// function checkBoxToggle(all_selector, check_selector){
//   let el_all_check = document.querySelector(all_selector);
//   let checkbox_ln = document.querySelectorAll(check_selector+':enabled').length;
//   let check_ln = document.querySelectorAll(check_selector+':checked:enabled').length;
//   if( checkbox_ln === check_ln ){
//       el_all_check.setAttribute('checked', 'checked');
//       el_all_check.checked = true;
//   } else {
//       el_all_check.removeAttribute('checked', 'checked');
//       el_all_check.checked = false;
//   }
// }

// /**
// * 체크박스 토글 이벤트
// * @param all_selector 전체 체크박스 셀렉터
// * @param check_selector 체크박스 셀렉터
// */
// function checkBoxToggleEvent(all_selector, check_selector){
//   // 체크박스(전체) 변경시
//   let el_all_check = document.querySelector(all_selector);
//   // 신규 이벤트
//   el_all_check.addEventListener('change', function(){
//       checkAllToggle(all_selector, check_selector);
//   });

//   // 체크박스(기본) 변경시
//   let el_check_all = document.querySelectorAll(check_selector);
//   el_check_all.forEach((el_check, idx) => {
//       el_check.addEventListener('change', function(){
//           checkBoxToggle(all_selector, check_selector);
//       });
//   })
// }


// checkBoxToggleEvent('.all_check', '.check_list');



////////
// HTML 요소를 선택하여 변수에 저장
// let allCheckSelector = '.all_check';
// let checkListSelector = '.check_list';

// let el_all_check = document.querySelector(allCheckSelector);
// let el_check_all = document.querySelectorAll(checkListSelector);
let el_all_check = document.querySelector('.all_check');
let el_check_all = document.querySelectorAll('.check_list');

// 전체 체크박스를 토글하는 함수
function checkAllToggle() {
    let is_check = el_all_check.checked;

    if (is_check) {
        el_check_all.forEach((checkbox) => {
            if (!checkbox.disabled) {
                checkbox.setAttribute('checked', 'checked');
                checkbox.checked = true;
            }
        });
    } else {
        el_check_all.forEach((checkbox) => {
            checkbox.removeAttribute('checked');
            checkbox.checked = false;
        });
    }
}

// 개별 체크박스에 따라 전체 체크박스를 토글하는 함수
function checkBoxToggle() {
    let checkbox_ln = document.querySelectorAll(checkListSelector + ':enabled').length;
    let check_ln = document.querySelectorAll(checkListSelector + ':checked:enabled').length;

    if (checkbox_ln === check_ln) {
        el_all_check.setAttribute('checked', 'checked');
        el_all_check.checked = true;
    } else {
        el_all_check.removeAttribute('checked');
        el_all_check.checked = false;
    }
}

// 체크박스 토글 이벤트 설정
function checkBoxToggleEvent() {
    // 전체 체크박스 변경 시
    el_all_check.addEventListener('change', function() {
        checkAllToggle();
    });

    // 개별 체크박스 변경 시
    el_check_all.forEach((el_check) => {
        el_check.addEventListener('change', function() {
            checkBoxToggle();
        });
    });
}

// 이벤트 초기화
checkBoxToggleEvent();
