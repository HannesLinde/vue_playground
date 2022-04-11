<template>
  <div class="dynamic-component-demo-posts-tab">
    <ul class="dynamic-component-demo-posts-sidebar">
      <li
          v-for="post in posts"
          :key="post.id"
          :class="{
          'dynamic-component-demo-active': post === selectedPost
        }"
          @click="selectedPost ? selectedPost = null : selectedPost = post"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="dynamic-component-demo-post-container">
      <strong v-if="!selectedPost">
        Click on a blog title to view it.
      </strong>
      <div v-else class="dynamic-component-demo-post">
        <h3>{{ selectedPost.title }}</h3>
        <img :src='selectedPost.img' :alt='selectedPost.title'>
        <div v-html="selectedPost.content"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Ref, ref} from "vue";

interface Post {
  id: number,
  title: string,
  img: string,
  content: string
}

const posts: Array<Post>= [
        {
          id: 1,
          title: 'Doggo Ipsum',
          img: 'https://images.unsplash.com/photo-1593750606500-f0237a94ea1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
          content:
              '<p>Doggo ipsum heckin angery woofer super chub what a nice floof yapper doing me a frighten maximum borkdrive length boy pats, fat boi pupper pats shooberino very good spot. Sub woofer puggorino many pats what a nice floof boof heckin angery woofer smol borking doggo with a long snoot for pats sub woofer, maximum borkdrive wow very biscit heckin good boys and girls waggy wags h*ck. Boofers length boy pats such treat pats heck boofers, pupperino stop it fren heck very good spot wow very biscit.  Shoob I am bekom fat pupperino, dat tungg tho.</p>'
        },
        {
          id: 2,
          title: 'Hipster Ipsum',
          img: 'https://images.unsplash.com/photo-1516314774844-26f6888144e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
          content:
              '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
        },
        {
          id: 3,
          title: 'Cupcake Ipsum',
          img: 'https://images.unsplash.com/photo-1514077583608-aedd9ec18c40?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
          content:
              '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
        }
      ];
const selectedPost: Ref<null | Post> = ref(null);
</script>
<style lang="scss" scoped>

body {
  font-family: 'Noto Serif JP', serif;
}


li {
  cursor: pointer;
}

img {
  border-radius: 4px;
  border: 1px solid #555;
}
</style>
