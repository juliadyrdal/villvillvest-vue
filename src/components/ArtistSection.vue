<template>
    <section>
        <HeadingSection :title="title" />
        <Paragraph>
            Hvert år kommer noen av de beste og mest talentfulle artistene til Vill Vill Vest. Under finner du noen godbiter fra fjorårets lineup. Klikk deg inn og finn en ny favoritt!
        </Paragraph>
        <!-- Refactor if directive statement -->
        <!-- Refactor: should be carousel? -->
        <article class="artistSection__EventRow" v-if="artists !== null">
            <EventRow :artists="filteredArtists" />
        </article>
        <div class="artistSection__link-container">
            <router-link class="artistSection__link" to="/artists">Se alle artister &rarr;</router-link>
        </div>
    </section>
</template>

<script>
import HeadingSection from '@/components/HeadingSection.vue'
import Paragraph from '@/components/Paragraph.vue'
import EventRow from '@/components/EventRow.vue'
export default {
    name: 'ArtistSection',
    components: {
       HeadingSection, Paragraph, EventRow
    },  
    data() {
        return {
            artists: null,
            random1: null,
            random2: null,
            random3: null,
            title: "Lineup 2023"

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
        // Create 3 random numbers and store in variables
        this.random1 = this.getRandomInt(16);
        this.random2 = this.getRandomInt(16);
        this.random3 = this.getRandomInt(16);
    }
}
</script>

<style scoped>
    section {
        margin-top: 8rem;
        /* Clamp fallback for < Safari 13.1 */
        margin-left: min(max(2rem, 3vw), 5rem);
        margin-right: min(max(2rem, 3vw), 5rem);
        margin-left: clamp(2rem, 3vw, 5rem);
        margin-right: clamp(2rem, 3vw, 5rem);
    }
    .artistSection__EventRow {
        margin-top: 4rem;
    }
    .artistSection__link-container {
        display: flex;
        justify-content: flex-end;
    }
    .artistSection__link {
        padding-top: 2rem;
        font-size: 1.6rem;
        color: #333;
    }
    .artistSection__link:hover {
        color: var(--signal-color-primary);
    }
</style>



