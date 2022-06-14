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
        --min: 40rem;
        --gap: 2rem;

        display: grid;
        grid-gap: var(--gap);
        /* min() with 100% prevents overflow
        in extra narrow spaces */
        grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    }
</style>


