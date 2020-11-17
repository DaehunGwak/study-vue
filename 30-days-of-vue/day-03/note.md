# 03. The Vue Instance - Data Driven Applications

## Reactive Data

- Data가 변경되면 템플릿은 re-render 됨

## Data Driven Applications

- 위의 Reactive Data 속성은 Data-Driven 마인드셋을 개발자들이 가지게되어 App에 적용하게 됨
- vanilla js 로 짜게되면 DOM 을 직접 다루게됨
- Vue 에선 data를 조작하는 것 만으로 템플릿이 변경됨

## Vue Data Properties

- data는 미리 정의되어 있어야함 (안그러면 워닝을 뱉음)
  - Vue 3.0에선 Proxy-based observation mechanism 을 제공함
  - 이는, 새로운 data properties를 추가하고 삭제할 수 있음
- Reactivity 에 대해선 https://vuejs.org/v2/guide/reactivity.html 에서 잘 다루고 있음

![Vue 2.x Reactivity Diagram from vuejs.org](https://vuejs.org/images/data.png)

## 실습

- [vanilla-js-toggle](./src/vanilla-js-toggle)
