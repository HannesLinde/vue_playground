<template>
    <div>
        <input v-model="newComment" type="text" placeholder="Write a comment" />
        <button @click="submitComment">Comment!</button>
        <h3>Comment section</h3>
        <ul>
        <display-comment v-for="comment in comments" :key="comment" :comment="comment"></display-comment>
        </ul>
        <pre>{{comments}}</pre>
    </div>
</template>
<script lang='ts'>
import {defineComponent} from 'vue';
import displayComment from './displayComment.vue';

export default defineComponent(
  {
    name:'main-comment',
    data() {
        return {
            newComment: '',
            comments: [
                'Cool!',
                'Love it!',
                'Horrible!'
            ]
        }
    },
    methods: {
        submitComment() {
            this.comments.push(this.newComment);
            this.newComment = ''
        }
    },
    components: { displayComment }

})
</script>
