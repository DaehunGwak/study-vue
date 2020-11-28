# 싱글 파일 컴포넌트

## `<temaplate>` 은 하나의 최상위 요소로 구성해야 함

```html
<template>
  <div>
  <div>
  <!-- 여기에 다른 요소를 더 넣을 수 없음 -->
</template>
...
```

## data는 function으로 새 객체를 반환해주어야 함

- 다른 싱글 컴포넌트 파일의 데이터 접근을 막기위해 function으로 반환하는 형식을 취함
- 왜?
  - [kr.vuejs.org: data는 반드시 함수여야 합니다](https://kr.vuejs.org/v2/guide/components.html#data-%EB%8A%94-%EB%B0%98%EB%93%9C%EC%8B%9C-%ED%95%A8%EC%88%98%EC%97%AC%EC%95%BC%ED%95%A9%EB%8B%88%EB%8B%A4)

## 실습 프로젝트

- [vue-cli](../vue-cli)
