<template>
    <router-link :to="{ name: 'ArtistDetails', params: { id: artist.id, slug: generateSlug, metaDesc: metaDesc} }">
        <article class="event__card">
            <div>
                <img :src="artist.lineup_image[500]" :alt="artist.name" class="event__image">
            </div>
            <div class="event__text-box">
                <h2 class="event__name">{{ artist.name }}</h2>
            </div>         
        </article>
    </router-link>
</template>

<script>
export default {
    name: 'EventCard',
    props: ['artist'],
    computed: {
        generateSlug() {
            return this.artist.name.replace(/ /g, '-');
        },
        metaDesc() {
            const bio = this.artist.biography;
            return bio.replace(/(<p>|<\/p>|<em>|<\/em>|&nbsp;|<br \/>)/g, '').replace(/(&aring;)/g, 'å').replace(/(&oslash;)/, 'ø').replace(/(&rsquo;)/, "'");
        },
        metaBio() {
            return this.metaDesc.replaceAll(/<.*>.*?/ig);
        }
        
        // Computed properties for meta description and image
    },
    data() {
        return {
            artistSlug: null
        }
    },
    mounted() {
        // console.log(this.metaDesc)
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .event__card {
        color: var(--signal-color);
        background: #F2EDED;
        cursor: pointer;
        height: 100%;
    }
    .event__image {
        width: 100%;
    }
    .event__text-box {
        padding: 1rem;
    }
    .event__name {
        font-size: 2.8rem;
        font-weight: bolder;
        text-align: center;
    }
</style>


