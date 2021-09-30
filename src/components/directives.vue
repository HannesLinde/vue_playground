<template>
    <div>
        <router-link to="/directives/Intro">Intro</router-link>
        <router-link to="/directives/Exercise">Exercise</router-link>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import directivesIntro from './Directives/directivesIntro.vue';
// import directivesExercises from './Directives/directivesExercises.vue';

export default defineComponent({
    setup () {
        

        return {}
    },
    components: {
        // directivesIntro,
        // directivesExercises
    }
})
</script>
