<template>
    <div>
        <p v-if="text">{{text}}</p>
        <p v-else>No text so far</p>
        <input type="text" v-model="text" placeholder="enter some text" />
        <child-component @deleteText="deleteNow"></child-component>
        <p>{{deletionNotification}}</p>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import childComponent from './childComponent.vue'
export default defineComponent({
name:'parent-component',
data() {
    return {
        text:'',
        deletionNotification: ''
    }
},
methods: {
    deleteNow(characters: number){
        this.text='';
        this.deletionNotification=`You just deleted all the text with ${characters} characters`;

        setTimeout(()=>this.deletionNotification='', 3000)
    }
},
components: {
    childComponent
}    
})
</script>
