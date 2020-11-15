# 컴포넌트 통신 방법 - 기본

## 컴포넌트 통신 방법

- 뷰 컴포넌트는 각 고유한 데이터 유효범위를 가짐
- 데이터를 공유하려면
  - 상위 -> 하위, `props 속성`
  - 하위 -> 상위, `event 발생`

## 컴포넌트 통신 규칙이 필요한 이유

- 컴포넌트끼리 유기적으로 통신가능하다면 서로 종속성이 커짐
- props, event로 데이터를 관리하면 종속성 관리가 용이해짐

## props 실습

- [props.html](../playground/props.html)

## props 특징

- 상위 데이터에서 내려온 데이터가 props에 바인딩 되면, Reactivity가 같이 동작됨
  - 상위 컴포넌트 데이터가 변경되면, 하위 컴포넌트 프롭스에 반영된다는 뜻

## event, emit 실습

- [event-emit.html](../playground/event-emit.html)

## vue 인스턴스에서의 this

- 뷰인스턴스에 data로 num을 선언 했지만 출력해보면, 인스턴스 최상단으로 나와있는 것을 확인
- [해당 글](https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)에서 정리가 잘 되어 있음
