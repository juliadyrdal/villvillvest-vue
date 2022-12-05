<template>
    <h2>{{ title }}</h2>
</template>

<script>
export default {
    // Pass inner text as prop from parent component
    props: ['title']

}
</script>

<style scoped>
    h2 {
        color: var(--signal-color-primary);
        font-family: var(--font-family-medium);
        font-size: 4rem;
    } 
</style>