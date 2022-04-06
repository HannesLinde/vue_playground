<template>
    <div>
<div class="contain">
    <h2>Blog Posts</h2>

    <div class="new">
      <h3>Add a New Post</h3>
      <form @submit.prevent="addPost">
        <input v-model="newTitle" placeholder="title" required/>
        <input v-model="newAuthor" placeholder="author name" required/>
        <select v-model="newLabel" required>
          <option disabled value="">Add a New label</option>
          <option v-for="category in categories" :key="category">{{category}}</option>
        </select>
        <button type="submit" >Add New Blog Post</button>
      </form>
    </div>

    <select v-model="selected">
      <option disabled value="">Filter with a label</option>
      <option v-for="category in categories" :key="category">{{category}}</option>
      <option value=''>none</option>
    </select>

    <div v-for="post in filterByLabel" :key="post.title" class="post">
      <span class="label">{{ post.label }}</span>
      <p>{{ post.title }}</p>
      <small>{{ post.author }}</small>
    </div>
  <pre>{{filterByLabel}}</pre>
  </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface Post {
  author: string,
  title: string,
  label: string
}

const selected = ref('')
const posts = ref([
        {
          author: '@vFitzgerald',
          title: 'Quod Ducimus Omnis',
          label: 'science'
        },
        {
          author: '@mPalmer',
          title: 'Vero Eius Laboriosam Ex Repudiandae',
          label: 'math'
        },
        {
          author: '@mDean',
          title: 'Magnam Odit',
          label: 'science'
        },
        {
          author: '@tCole',
          title: 'Velit Mollitia Voluptates Assumenda',
          label: 'science'
        },
        {
          author: '@jCooper',
          title: 'Eum Commodi Cupiditate',
          label: 'poetry'
        },
        {
          author: '@lLamb',
          title: 'Amet',
          label: 'history'
        },
        {
          author: '@fMartin',
          title: 'Voluptatem Fuga Cum Asperiores Error',
          label: 'science'
        },
        {
          author: '@eHayes',
          title: 'Ipsa Consectetur Rerum Repellat Quia',
          label: 'math'
        },
        {
          author: '@cCollier',
          title: 'Dolor Nihil Delectus',
          label: 'science'
        },
        {
          author: '@cBenson',
          title: 'Labore Ipsum Ad Pariatur',
          label: 'poetry'
        }
      ]);
const categories = ref([
        "Science",
        "Math",
        "Poetry",
        "History"
      ]);
const newTitle = ref('');
const newAuthor = ref('');
const newLabel = ref('');
const addPost = () => {
  let addedPost = {
    author: newAuthor.value,
    title: newTitle.value,
    label: newLabel.value
  };
  posts.value.push(addedPost);
  newAuthor.value = '',
      newTitle.value = '',
      newLabel.value = ''
};

const filterByLabel = computed (() => {
      let filter = new RegExp(selected.value, 'i');
      return posts.value.filter((post: Post) => post.label.match(filter))
    });
</script>
<style lang="scss" scoped>

$primary: #5968d7;

#app {
  display: flex;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
}

h2 {
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-align: center;
  font-size: 30px;
}

li {
  list-style: none;
  span {
    display: inline-block;
    width: 100px;
  }
}

.contain {
  width: 400px;
  padding: 10px 40px;
}

input, select {
  font-family: 'Work Sans', sans-serif;
}

button {
  color: white;
  border: none;
  border-radius: 3px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13px;
  width: 97.5%;
  text-align: center;
  padding: 10px 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: 0.25s all ease;
  background: #555;
  margin-bottom: 15px;
  &:hover {
    transform: translateY(1px);
  }
}

select {
  width: 100%;
}

.post, .new {
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 5px 0 10px;
  p {
    font-weight: bold;
    margin: 10px 0 5px;
  }
}

.new {
  background: #111;
  margin-bottom: 40px;
  label {
    font-size: 13px;
  }
  input {
    margin: 0 0 10px;
  }
  select {
    width: 98%;
    margin-bottom: 10px;
  }
  h3 {
    text-align: center;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin: 10px 0;
    color: white;
  }
}

.label {
  border: 1px solid #ccc;
  background: white;
  color: black;
  float: right;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 13px;
}

</style>
