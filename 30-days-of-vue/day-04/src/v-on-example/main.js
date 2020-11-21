const greetingMsg = 'Hello World! 🥳';
const whatsupMsg = 'What is up! 🤪';

new Vue({
  el: '#app',
  data: {
    greeting: greetingMsg,
    alertMessage: '',
  },
  methods: {
    changeGreeting(event) {
      console.dir(event);
      this.greeting === greetingMsg 
        ? this.greeting = whatsupMsg 
        : this.greeting = greetingMsg;
    },
    alertMessageGreeting() {
      this.alertMessage = 'You typed somthing!';
    },
    alertEnterGreeting() {
      this.alertMessage = 'You typed and pressed Enter!';
    },
  },
});
