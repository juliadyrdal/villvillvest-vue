<template>
    <section>
        <slot />
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    section {
        /* Fallback for < Safari 13.1 */
        margin-left: min(max(2rem, 3vw), 5rem);
        margin-right: min(max(2rem, 3vw), 5rem);
        margin-left: clamp(2rem, 3vw, 5rem);
        margin-right: clamp(2rem, 3vw, 5rem);
        min-height: 30vh;
    }
</style>


