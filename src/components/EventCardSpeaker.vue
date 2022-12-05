<template>
    <router-link :to="{ name: 'SpeakerDetails', params: { id: speaker.id, slug: generateSlug, metaDesc: metaDesc} }">
        <article class="event__card">
            <div>
                <img :src="speaker.lineup_image[500]" :alt="speaker.name" class="event__image">
            </div>
            <div class="event__text-box">
                <h2 class="event__name">{{ speaker.name }}</h2>
            </div>         
        </article>
    </router-link>
</template>

<script>
export default {
    name: 'EventCardSpeaker',
    props: ['speaker'],
    computed: {
        generateSlug() {
            return this.speaker.name.replace(/ /g, '-');
        },
        metaDesc() {
            const bio = this.speaker.biography;
            return bio.replace(/(<p>|<\/p>|<em>|<\/em>|&nbsp;|<br \/>)/g, '').replace(/(&aring;)/g, 'å').replace(/(&oslash;)/, 'ø').replace(/(&rsquo;)/, "'");
        },
        metaBio() {
            return this.metaDesc.replaceAll(/<.*>.*?/ig);
        }
        
        // Computed properties for meta description and image
    },
    data() {
        return {
            speakerSlug: null
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
        color: var(--signal-color-primary);
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


