<template>
    <div class="page-width">
        <h2 class="section-heading u-padding-top-4"><span class="color-accent">Om</span> 
         Vill Vill Vest</h2>
         <section v-for="page in pages" :key="page.id">
            <article class="AboutVillVillVest__body" v-if="page.id === 424806" v-html="page.body"></article>
        </section>
    </div>
</template>

<script>
export default {
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
.AboutVillVillVest__body {
    font-size: 1.6rem;
    width: 80vw;
}
</style>



