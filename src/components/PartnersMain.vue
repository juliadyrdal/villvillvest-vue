<template>
    <div>{{ sponsors }}</div>
</template>

<script>
export default {
    data() {
        return {
            sponsors: null
        }
    },
    mounted() {
        axios
        .get(`https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2021/sponsors`, {
            headers: {
            'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY
        }
        })
      .then(response => (this.sponsors = response.data))
    }
}
</script>

<style scoped>

</style>


