# 프로젝트 생성 도구 - Vue CLI

- vue 프로젝트 시작 시 기본 세팅 해주는 도구
- [npm 을 통한 vue-cli install 가이드](https://cli.vuejs.org/guide/installation.html)
- `npm install -g @vue/cli`

## vue cli 2.x vs 3.x

> 본인은 4.4.6 으로 설치 됨 (세팅시 vue2 기본세팅으로 진행)

- 2.x
  - `vue init 'type of project template' 'path of project folder`
- 3.x
  - `vue create 'path of project folder'`

## project 생성

- `vue create vue-cli`
- `npm run serve` 하면 데브 모드로 로컬호스트 서버가 띄어짐

## project 구조

- `package.json`
  - npm 프로젝트 구조 설정 파일
- index.html, main.js 가 메인 파일들

## 싱글 파일 컴포넌트 구조 (`*.vue 파일`)

```html
<template>
  <!-- HTML -->
</template>

<script>
export default {
  // javascript
}
</script>

<style>
  /* CSS */
</style>
```
