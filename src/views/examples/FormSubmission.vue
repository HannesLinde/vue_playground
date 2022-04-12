<template>
    <div id="container">
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label><br>
      <input id="name" type="text" v-model="name" required/>
    </div>
    <div>
      <label for="email">Email:</label><br>
      <input id="email" type="email" v-model="email" required/>
    </div>
    <div>
      <label for="caps">HOW DO I TURN OFF CAPS LOCK:</label><br>
      <textarea id="caps" v-model="caps" required></textarea>
    </div>
    <button :class="[name&&email&&caps ? activeClass : '']" type="submit">Submit</button>
    <div>
      <h3>Response from server:</h3>
      <pre>{{ response }}</pre>
    </div>
  </form>
</div>
</template>

<!--<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    setup () {


        return {}
    },
  data() {
    return {
      name: '',
      email: '',
      caps: '',
      response: '',
      activeClass: 'active'
    }
  },
  methods: {
    submitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        caps: this.caps
      }).then(response => {
        this.response = JSON.stringify(response, null, 2);
        this.name = '';
        this.email = '';
        this.caps = '';
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    }
  }
})
</script>-->
<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
const name = ref('');
const email = ref('');
const caps = ref('');
const response = ref('');
const activeClass = 'active';

const submitForm = () => {
  axios.post('//jsonplaceholder.typicode.com/posts', {
    name: name.value,
    email: email.value,
    caps: caps.value
  }).then(responseData => {
    response.value = JSON.stringify(responseData, null, 2);
    name.value = '';
    email.value = '';
    caps.value = '';
  }).catch(error => {
    response.value = 'Error: ' + error.response.status
  })
}
</script>

<style scoped lang="scss">
$primary: #5968d7;

#container {
  display: flex;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
}

form {
  width: 300px;
  padding: 10px 40px;
  label {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.03em;
    font-weight: bold;
  }
  input, textarea {
    border: 1px solid #ccc;
    color: #333;
    width: calc(100% - 30px);
  }
  input, textarea, button {
    border-radius: 4px;
    padding: 8px 15px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
  }
  div {
    margin: 20px 0;
  }
}

button {
  color: white;
  border: none;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #ccc;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
  &:hover {
    transform: translateY(5px) translateX(5px);
  }
}

.active {
  animation-name: button-animation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

pre-content {
  width: 300px;
}

@keyframes button-animation {
  0%{
    background-color: #cccccc;
    width: 20%;
  }
  25% {
    background-color: #888888;
    width: 80%;
    transform: rotate(90deg);
  }
  50% {
    background-color: #555555;
    width: 40%;
    transform: rotate(180deg);
  }
  75% {
    background-color: #2c3e50;
    width: 60%;
    transform: rotate(270deg);
  }
  100% {
    background-color: darkslateblue;
    width: 100%;
    transform: rotate(360deg);
  }

}
</style>