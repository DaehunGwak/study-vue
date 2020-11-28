# 최종 프로젝트 - 사용자 입력 폼 만들기

- 실습 프로젝트: [vue-form](../vue-form/)

## `event.preventDefault()` 는 어떤 역할을 할까

### 이벤트 버블링 추후학습하기

> 원문을 읽고 요약정리: [이벤트 버블링, 이벤트 캡처 그리고 이벤트 위임까지](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)


### 새로고침을 막을때 `event.preventDefault()` 보단 `@submit.prevent`

- vue에서 기본적인 이벤트 동작을 예방할 때 form 에선 `@submit.prevent` 로 방지가능
