# HTTP 통신 라이브러리 - axios

## axios 이전에

- Ajax
  - 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해 전체 페이지를 새로 고치지 않고 페이지 일부만 데이터를 로드하는 기법
  - JavaScript 를 사용한 비동기 통신
  - ref: https://coding-factory.tistory.com/143
- vue-resource 라는 공식 라이브러리가 있었지만, 지금은 공식이 아님

## axios

- 뷰에서 권고하는 HTTP 통신 공식 라이브러리
- Promise 기반 (자바스크립트 비동기 처리 패턴)

### + 자바스크립트의 비동기 처리 패턴 진화 과정

1. callback
2. promise
3. promise + generator
4. async & await

- ref
  - [js 비동기 처리와 콜백함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
  - [js promise 이해](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
  - [js async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)

### 실습

- [axios.html](../playground/axios.html)
- axios내부의 function은 다른 실행컨텍스트 (axios promise) 이므로 다른 방식으로 해결해야함
  - 해결책
    - arrow function
    - this variable 선언 & 참조
- ref: https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/

### 네트워크 패널

- [HTTP 간단 정리 문서](https://joshua1988.github.io/web-development/http-part1/)
- [크롬 개발자 도구 공식 가이드 문서](https://developers.google.com/web/tools/chrome-devtools/)
