// 즉시 실행 함수만들기!
(function (window, document) {
    'use strict';

    // 토클 클래스가 부여된 모든 요소를 찾아 선언한다.
    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
    // id 선택자 토글 버튼을 찾는 요소를 찾아 선언한다.
    const $toggleBtn = document.getElementById('toggle-btn'); // Return Element

    // 사용자가 클릭하는 행위(이벤트)를 감지한다.
    // 감지가 되면 함수를 실행
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    // 윈도우는 브라우저를 의미함
    // 브라우저에 리사이즈(뷰포인트의 변화)라는 이벤트가 발생할때 함수 실행
    window.addEventListener('resize', function(){
        if (window.innerWidth > 1024){
            // toggle Off
            offElements();
            
        };
    });
    
    function toggleElements() {
        // forEach로 반복시킨다.
        // 반복할때마다 실행함 함수를 정의함
        [].forEach.call($toggles, function(toggle) {
            // 토클 클래스를 가지고 있는 요소에다가 On이라는 클래스를 지속적으로 토글한거다.
            // 언제? 토글 엘리먼츠가 실행될때마다 -> 토글 버튼을 클릭할 때 마다.
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle) {
            // 모든 토클 요소의 on이라는 요소를 삭제
            toggle.classList.remove('on');
        });

    }

})(window, document)