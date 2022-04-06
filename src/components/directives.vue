<template>
    <div>
        <router-link to="/directives/Intro">Intro</router-link>
      <br/>
        <router-link to="/directives/Exercise">Exercise</router-link>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
