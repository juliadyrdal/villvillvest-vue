<template>
    <!-- Task: Add loader animation -->
    <div class="event-grid__container">
        <EventCard v-for="artist in artists" :artist="artist" :key="artist.id" />
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
    name: 'EventGrid',
    props: ['artists'],
    components: {
        EventCard
    }
}
</script>

<style scoped>
    .event-grid__container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
    }
</style>


