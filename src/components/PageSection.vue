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
        margin-left: clamp(2rem, 3vw, 5rem);
        margin-right: clamp(2rem, 3vw, 5rem);
        min-height: 50vh;
    }
</style>


