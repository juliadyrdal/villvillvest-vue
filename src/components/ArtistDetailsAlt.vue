<template>
    <section>

        
            <h2 class="artistDetails__name">{{ artist.name }}</h2>

            <img :src="artist.lineup_image[500]" alt="">

            <article v-html="artist.biography"></article>

            <!-- <h2 class="artist-details__name">{{ artist.name }}</h2>

            <div class="artist-details__flex">

                <div class="artist_img-div">
                    <img :src="artist.lineup_image[500]" alt="">
                </div>

                <div class="spotify">
                    <iframe src="https://open.spotify.com/embed/artist/4UXJsSlnKd7ltsrHebV79Q" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                

            </div>

            <span v-html="artist.biography"></span> -->

            <!-- <div v-for="artist in artists" :key="artist.id">

        <div v-if="id == artist.id">

            <h2 class="artist-details__name">{{ artist.name }}</h2>

            <div class="artist-details__flex">

                <div class="artist_img-div">
                    <img :src="artist.lineup_image[500]" alt="">
                </div>

                <div class="spotify">
                    <iframe src="https://open.spotify.com/embed/artist/4UXJsSlnKd7ltsrHebV79Q" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                

            </div>

            <p>User {{ id }}</p>
            <p v-html="artist.biography"></p>
            
embedSrc: `https://open.spotify.com/embed/artist/${artist.spotify_artist_id}`
        </div>

    </div> -->

    <!-- <iframe v-bind:src=`https://open.spotify.com/embed/artist/${artist.spotify_artist_id}` width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> -->
            

        

    </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            artist: null
        }
    },
    mounted() {
        axios
        .get(`https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2021/artists/${props.id}?child_edition=villvillvest2021festival`, {
            headers: {
            'x-protect': '87f43c7325949792385b9d0486f7c518'
        }
        })
      .then(response => (this.artist = response.data))
    }
}
</script>

<style scoped>

.artistDetails__name {
    font-family: var(--font-family-display);
    font-size: 2.8rem;
    text-align: left;
    color: var(--signal-color);
}
.artist-details__flex {
    display: flex;
    grid-column-gap: 2rem;
    margin-bottom: 2rem;
}

.artist_img-div {
    flex-basis: 60%;
    background: red;
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.spotify {
    flex-basis: 40%
}

.spotify iframe {
    width: 100%;
    height: 100%;
}
</style>