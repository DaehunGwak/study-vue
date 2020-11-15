# Vue.js 소개

## 1. MVVM 모델에서의 뷰

### Vue란?

![image](https://user-images.githubusercontent.com/12469427/99178962-1bb12200-275c-11eb-9cc4-23934404543c.png)

- MVVM 패턴의 ViewModel레이어 해당하는 프레임워크

### 두가지 큰 특징

- DOM Listners
  - View 액션에 의한 데이터를 모델에 업데이트/생성
- Data Bindings
  - Model(데이터) 가 업데이트 되면 변화를 감지해서 DOM에 업데이트

## 2. Reactivity 란

- data의 변화를 감지하면 DOM 에 내용을 갱신해주는 것
- Vue에서 data 속성을 정의하면 자동으로 Reactivity를 지원하는 getter/setter를 생성해줌

## 실습코드

- [기존 웹 dom 갱신](../playground/web-dev.html)
- [Ractivity 구현](../playground/vue-way.html)
