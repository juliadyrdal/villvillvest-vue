<template>
    <section class="page-width">
        <h2 class="section-heading"><span class="color-accent">Artist</span>slipp</h2>
        <p class="paragraph">Hvert år kommer noen av de beste og mest talentfulle artistene til Vill Vill Vest. Klikk deg inn og finn en ny favoritt! Vi oppdaterer fortløpende med nye artister frem mot festivalen.</p>
        <!-- Refactor if directive statement -->
        <!-- Refactor: should be carousel? -->
        <article class="artistSection__EventRow" v-if="artists !== null">
            <EventRow :artists="filteredArtists" />
        </article>
        <router-link class="artistSection__link" to="/artists">Se alle artister &rarr;</router-link>
    </section>
</template>

<script>
import EventRow from '@/components/EventRow.vue'
export default {
    name: 'ArtistSection',
    components: {
       EventRow
    }, 
    data() {
        return {
            artists: null,
            random1: null,
            random2: null,
            random3: null

        }
    },
    computed: {
        // Create an array of 3 random artists from the total number fetched
        filteredArtists() {
            return this.artists = [this.artists[this.random1], this.artists[this.random2], this.artists[this.random3]]
            
        }
    },
    methods: {
        getRandomInt(max) {
        return Math.floor(Math.random() * max);
        }   
    },
    created() {
        fetch('https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2021/artists?child_edition=villvillvest2021festival&max_per_page=74', {
            headers: {
                'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => this.artists = data.data)
        .catch(err => console.log(err.message))
    },
    mounted() {
        // Create 3 random numbers
        this.random1 = this.getRandomInt(74);
        this.random2 = this.getRandomInt(74);
        this.random3 = this.getRandomInt(74);
    }
}
</script>

<style scoped>
    .artistSection__EventRow {
        margin-top: 4rem;
    }
    .artistSection__link {
        display: flex;
        justify-content: flex-end;
        padding-top: 2rem;
        font-size: 1.6rem;
        color: #333;
    }
    .artistSection__link:hover {
        color: var(--signal-color);
    }
</style>



