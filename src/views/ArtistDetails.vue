<template>
    <section v-if="artist !== null" class="page-width">
    <h2 class="artistDetails__name">{{ artist.name }}</h2>
    <!-- Add moment.js date filter, find edition_day_id and stage_id on appmiral admin -->
    <!-- <p class="artistDetails__schedule"><span class="color-accent u-bold">Konsert </span> {{ artist.performances[0].edition_day_id }} | {{ formatDate(artist.performances[0].start_time) }} | {{ artist.performances[0].stage_id }} </p> -->

        <article class="artistDetails__media">
            <figure>
                <img :src="artist.lineup_image[500]" alt="artist.name">
                <!-- Placeholder for photo credit, create custom field in appmiral -->
                <!-- <figcaption>Photo cred placeholder</figcaption> -->
            </figure>

            <div class="artistDetails__bio">
                <article v-html="artist.biography"></article>
                <ul>
                    <li v-if="artist.links.website"><router-link to=""><img src="../assets/icons/instagram.svg" alt=""></router-link></li>
                    <li v-if="artist.links.facebook_page_id"><router-link to=""><img src="../assets/icons/facebook.svg" alt=""></router-link></li>
                    <li v-if="artist.links.youtube_channel_id"><router-link to=""><img src="../assets/icons/youtube.svg" alt=""></router-link></li>
                </ul>
            </div>

        </article>

        <article v-if="artist.tracks" class="artistDetails__embed-grid">
            <figure v-for="track in artist.tracks" :key="track.track_id">
                <img @click="test" class="artistDetails__track-image" :src="track.image_url" :alt="track.title">
            </figure>
        </article>
        <article v-if="trackUrl" class="artistDetails__track-player">
            <iframe style="border-radius:12px" :src="musicEmbed + trackUrl" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </article>       
    </section>
</template>

<script>
export default {
    name: 'SpeakerDetails',
    props: ['id', 'slug', 'metaDesc'],
    components: {
  },
    data() {
        return {
            artist: null,
            musicEmbed: 'https://open.spotify.com/embed/track/',
            trackUrl: null,
            spotifyTracking: '?utm_source=generator',
        }
    },
    methods: {
        test(event) {
            for(let i = 0; i < this.artist.tracks.length; i++) {
                if(this.artist.tracks[i].title === event.target.alt) {
                    return this.trackUrl = this.artist.tracks[i].track_uri
                }
            }
        },
        // Function to format the ISO date fetched from api - refactor to user dayjs or alternative, for wider browser support
        formatDate(date) {
            return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(date))
        }
    },
    created() {
        fetch('https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2021/artists/' + this.id + '?child_edition=villvillvest2021festival', {
            headers: {
                'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => this.artist = data)
        .catch(err => console.log(err.message))
    },
    mounted() {
        // Remove current meta tags
        const metaElement = document.querySelector('.metaDescription')
        if (metaElement) {
            metaElement.remove()
        }
        // Set primary meta tags
        document.title = `${this.slug} | Vill Vill Vest`
        const metaDescription = document.createElement('meta')
        metaDescription.classList.add('metaDescription')
        metaDescription.setAttribute('name', 'description')
        metaDescription.setAttribute('content', `${this.metaDesc}`)
        const head = document.querySelector('head')
        head.appendChild(metaDescription)

        // Set Open Graph meta tags
        // const OgMetaTitle = document.createElement('meta')
        // OgMetaTitle.setAttribute('og:title', `${this.slug}`)
    }
}
</script>

<style scoped>
section {
    /* Clamp Fallback for < Safari 13.1 */
    margin-left: min(max(2rem, 3vw), 5rem);
    margin-right: min(max(2rem, 3vw), 5rem);
    margin-left: clamp(2rem, 3vw, 5rem);
    margin-right: clamp(2rem, 3vw, 5rem);
}
.artistDetails__name {
    font-family: var(--font-family-display);
    font-size: 7rem;
    text-align: left;
    color: var(--signal-color-primary);
}
.artistDetails__schedule {
    font-size: 1.6rem;
}
.artistDetails__media {
    display: flex;
    margin-top: 2rem;
}

figure {
    margin: 0;
}

figcaption {
    display: block;
    padding: 1rem 0 2rem 0;
    text-decoration: underline;
    text-decoration-color: var(--signal-color-primary);
}

img {
    object-fit: cover;
    width: 60vw;
    height: 100%;
}

.artistDetails__embed-grid {
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 8rem;
}

.artistDetails__track-image {
    width: 100%;
    height: auto;
    cursor: pointer;
}

.artistDetails__track-player {
    margin-top: 2rem;
}

.spotify {
    flex-basis: 40%
}

.spotify iframe {
    width: 100%;
    height: 100%;
}

.artistDetails__bio {
    width: 80vw;
    margin-top: 0;
    font-size: 1.6rem;
    border: 3px solid var(--signal-color-secondary);
    padding: 2rem;
}
@media (max-width: 1200px) {
    .artistDetails__media {
        flex-direction: column;
    }
    img {
        width: 100%;
    }
    .artistDetails__bio {
        margin-top: 2rem;
        width: auto;
    }
}

.artistDetails__bio ul {
    display: flex;
    margin-top: 4rem;
    list-style: none;
    padding-left: 0;
}

.artistDetails__bio li:not(:last-child) {
    margin-right: 2rem;
}

.artistDetails__bio img {
    height: 4rem;
    width: auto;
}
</style>