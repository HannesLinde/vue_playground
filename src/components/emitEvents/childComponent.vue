<template>
    <div>
        <button @click="$emit('deleteText', characters)">Delete all text</button>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    data(){
        return{
            characters: 50
        }
    }
})
</script>