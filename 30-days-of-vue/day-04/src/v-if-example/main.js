const imageUrlDaegu = 'https://www.daegu.go.kr/cmsh/daegu.go.kr/english/images/main/daegu_tower.jpg';
const imageUrlSeongnam = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Seongnam-2013.jpg/300px-Seongnam-2013.jpg';

new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Ordi',
    city: 'Daegu',
    cityImage: 'https://www.daegu.go.kr/cmsh/daegu.go.kr/english/images/main/daegu_tower.jpg',
  },
  methods: {
    changeCity() {
      if (this.city === 'Daegu') {
        this.city = 'Seongnam';
        this.cityImage = imageUrlSeongnam;
      } else {
        this.city = 'Daegu';
        this.cityImage = imageUrlDaegu;
      }
    }
  }
});
