<template>
    <div class="page-container">
      <p>Filter data with computed properties. Compare this code with the code from <router-link to="/computed-properties">filtering with computed properties</router-link></p>
      <p>Sort titles by:
    <button @click="sortLowest">Lowest Rated</button>
    <button @click="sortHighest">Highest Rated</button>
  </p>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns" :key="key">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in ratingsInfo" :key="entry.title">
        <td v-for="key in columns" :key="key">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const columns = ref(["title", "rating"]);
const ratingsInfo = ref([
        { title: `White Chicks`, rating: 82 },
        { title: `Grey's Anatomy`, rating: 98 },
        { title: `Prison Break`, rating: 98 },
        { title: `How I Met Your Mother`, rating: 94 },
        { title: `Supernatural`, rating: 95 },
        { title: `Breaking Bad`, rating: 97 },
        { title: `The Vampire Diaries`, rating: 91 },
        { title: `The Walking Dead`, rating: 98 },
        { title: `Pretty Little Liars`, rating: 96 },
        { title: `Once Upon a Time`, rating: 98 },
        { title: `Sherlock`, rating: 95 },
        { title: `Death Note`, rating: 77 },
        { title: `Naruto`, rating: 88 },
        { title: `Arrow`, rating: 96 },
        { title: `Black Mirror`, rating: 80 },
        { title: `The Originals`, rating: 74 },
        { title: `The 100`, rating: 97 },
        { title: `Masha and the Bear`, rating: 81 },
        { title: `Hunter X Hunter`, rating: 57 },
        { title: `Marvel's Luke Cage`, rating: 95 },
        { title: `Marvel's Iron Fist`, rating: 98 }
      ]);
const sortLowest = () => {
  ratingsInfo.value.sort((a, b) => a.rating > b.rating ? 1 : -1);
};
const sortHighest = () => {
  ratingsInfo.value.sort((a, b) => a.rating < b.rating ? 1 : -1);
};
</script>

<style lang="scss" scoped>
body, button {
  font-family: 'Bitter', serif;
}

table {
  margin: 1rem;
  background: #444;
  color: white;
}

th {
  background: #333;
  text-transform: capitalize;
  text-align: left;
}

td, th {
  padding: 10px;
  border-bottom: 1px solid #888;
}

td:first-child {
  width: 300px;
  border-right: 1px solid #888;
}

tr:last-child {
  td {
    border-bottom: none;
  }
}

button {
  background: orangered;
  border: none;
  padding: .5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover{
    background-color: beige;
  }
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>