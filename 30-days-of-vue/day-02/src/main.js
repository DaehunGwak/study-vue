const greetingStr = '🥳 Hello World!';
const whatisupStr = '🤩 What is up!';

new Vue({
  el: '#app',
  data: {
    greeting: '🥳 Hello World!',
    user: 'Daehun',
    city: "Daegu",
    toggle: true,
  },
  methods: {
    changeGreeting() {
      // `this.$data.gretting` is equal to `this.greeting`
      this.toggle = !this.toggle;
      this.greeting = this.toggle ? greetingStr : whatisupStr;
    }
  }
});
