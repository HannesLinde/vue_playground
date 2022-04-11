<template>
    <div>
        <button @click="$emit('deleteText', message, divisor)">Delete all text</button>
    </div>
</template>
<script setup lang="ts">
const message = "The child component lets you know that... "
const divisor = 3;
</script>