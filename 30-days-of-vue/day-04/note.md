# 04. Vue Directives

## Directives

- HTML 태그안에 `v-` prefix를 가지는 속성들
- HTML 컨텐츠 안에도 붙어짐

## Event Handling with `v-on`

- `v-on` 은 DOM event와 매칭되어 inline javascript로 실행됨
- 함수 혹은 `greeting = 'Hi there!'` 과 같은 코드도 가능
- DOM 이벤트 다 가능
- 실습 코드: [v-on-example](./src/v-on-example)

## Attribute Binding with `v-bind`

- Mustache syntax는 HTML Attrbitue에 쓸 수 없음
- 그래서 `v-bind` 를 사용해 데이터 바인딩을 할 수 있음
- 실습 코드: [v-bind-example](./src/v-bind-example)

## Conditional Rendering with `v-if`

- `v-if` `v-show` 로 conditional rendering 할 수 있음
- 실습 코드
  - [v-if-example](./src/v-if-example)
  - [v-show-example](./src/v-show-example)
- `v-if` 시리즈로 `v-else-if` `v-else` 도 있음
- 그럼 `v-if` `v-show` 차이가?
  - `v-if` 는 true일때만 렌더링됨
  - `v-show` 는 미리 렌더링 되어있고 css `display` property 로 조정됨

## Shorthand Synxtax with `v-on` and `v-bind`

- `v-bind:src` == `:src`
- `v-on:click` == `@click`
