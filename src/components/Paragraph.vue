<template>
    <p>
        <slot />
    </p>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    p {
        width: 70%;
        line-height: 1.7;
    }
    @media (max-width: 600px) {
        p {
            width: 100%;
        }
    }
</style>


