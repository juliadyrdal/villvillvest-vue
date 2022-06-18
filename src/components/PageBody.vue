<template>
    <div>
        <div v-for="page in pages" :key="page.id">
            <article class="PageBody__body" v-if="page.id === pageId" v-html="page.body"></article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageBody',
    props: ['pageId'],
    data() {
        return {
            pages: null,
        }
    },
    created() {
        fetch('https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2021/pages?child_edition=villvillvest2021festival&max_per_page=60', {
            headers: {
                'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => this.pages = data.data)
        .catch(err => console.log(err.message))
    },
}
</script>

<style scoped>
.PageBody__body {
    width: 70vw;
}
@media (max-width: 600px) {
        .PageBody__body {
            width: 100%;
        }
    }
</style>


