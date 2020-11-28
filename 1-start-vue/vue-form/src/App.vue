<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="userid">id: </label>
        <input id="userid" type="text" v-model="userid">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="userpw">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      userid: '',
      userpw: '',
    }
  },
  methods: {
    submitForm(event) {
      // event.preventDefault();
      console.log(event);
      const url = 'https://jsonplaceholder.typicode.com/users/';
      const data = {
        username: this.userid,
        password: this.userpw,
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>