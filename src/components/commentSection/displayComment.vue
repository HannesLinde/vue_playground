<template>
    <div>
        <li>{{comment}}</li>
    </div>
</template>
<script lang='ts'>
import {defineComponent} from 'vue';

export default defineComponent({
    name:'display-comment',
    props: {
        comment: {
            type: String,
            required: true,
            default: 'No comments so far'
        }
    }
    
})
</script>
