# 02. List Rendering with `v-for`

## The `v-for` Directive

- syntax
  - `v-for="item in items"`
- 실습: [v-for-example](./src/v-for-example)

## The Key Attribute

- v-for list의 identifier를 위한 값
- key는 뷰 v-for내 요소들에 대해서 unique 해야함
- 실습
  - [v-for-no-key-example](./src/v-for-no-key-example)
  - [v-for-with-key-example](./src/v-for-with-key-example)
- 위의 두 예제에서 key를 할당 안했을 때 shuffle해도 input box는 셔플이 안됨을 확인할 수 있음
- key를 입력하는 것을 권장 하지만,
- 안입력해줘도 되는 경우가 있을까?
  - 재정렬, 특정 기능을 제외한 기본적 패치만 사용하는 경우
  - DOM content가 심플한 경우
  - ref: https://vuejs.org/v2/guide/list.html#Maintaining-State
