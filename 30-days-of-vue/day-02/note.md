# 02. The Vue Instance - Data

> Vue Insance의 Data 속성이 Reactivity를 어떻게 활성화 시키는지 알아볼 예정

## 요약

> [실습 코드](./src) 참고

- Vue 인스턴스가 초기화 되면, data 속성에 대해 getter/settter 메소드를 형성
  - 그리고 해당 메소드들 안엔 ractive하게 구성되어 있어, html(템플릿)에 사용되는 데이터가 갱신되면 DOM도 자동으로 갱신되어 Re-redering 됨
- `v-on:click` 을 통해 Vue 인스턴스의 method `changeGreeting()` 연결
