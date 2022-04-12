<template>
    <div>
        <input @keyup="submitCommentFromInput" v-model="newComment" type="text" placeholder="Write a comment" />
        <button @click="submitComment">Comment!</button>
        <h3>Comment section</h3>
        <ul class="comments-list">
        <display-comment v-for="comment in comments" :key="comment" :comment="comment"></display-comment>
        </ul>
    </div>
</template>
<script setup lang='ts'>
import displayComment from '../../components/CommentsSectionDisplayComment.vue';
import {ref} from "vue";

const newComment = ref('');
const comments = ref([
                'Cool!',
                'Love it!',
                'Horrible!'
]);

const submitComment = () => {
  comments.value.push(newComment.value);
  newComment.value = ''
}

const submitCommentFromInput = (e) => {
  if (e.keyCode !== 13) {
    return;
  }
  submitComment();
}
</script>
<style lang="scss" scoped>

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
