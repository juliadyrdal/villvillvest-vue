<template>
    <section>
        <hr>
        <h2>Våre Hovedpartnere</h2>
        <ul>
            <li><img src="@/assets/sponsors/kulturraadet-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/FV-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/Bergen-Kommune-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/Music-Norway-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/SPV-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/BT-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/MK-BRAK-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/Gramo-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/OK-1.webp" alt=""></li>
            <li><img src="@/assets/sponsors/Grieg-Foundation-1.webp" alt=""></li>
        </ul>
        <div class="sponsorLink-container">
            <router-link to="/">Se alle Partnere &rarr;</router-link>
        </div>
        <hr>
    </section>
</template>

<script>
export default {
    name: 'SponsorSection',
    components: {

    }
}
</script>

<style scoped>
section {
    margin-top: 12rem;
    margin-bottom: 6rem;
    /* Clamp Fallback for < Safari 13.1 */
    padding-left: min(max(2rem, 3vw), 5rem);
    padding-right: min(max(2rem, 3vw), 5rem);
    padding-left: clamp(2rem, 3vw, 5rem);
    padding-right: clamp(2rem, 3vw, 5rem);
}

h2 {
    padding-top: 6rem;
    font-family: var(--font-family-medium);
    font-size: 2.8rem;
    color: var(--signal-color);
}

ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    margin-top: 4rem;
    min-width: 0;
    list-style: none;
}
li {
    min-height: 0;
    margin-bottom: 8rem;
}

li:not(:last-child) {
    margin-right: 8vw;
}

img {
    min-height: 0;
    max-width: 100%;
}

hr {
    border: none;
    border-bottom: .5px solid var(--signal-color);
    width: 75%;
}

.sponsorLink-container {
    display: flex;
    justify-content: flex-end;
}

a {
    padding-bottom: 6rem;
    padding-top: 2rem;
    font-size: 1.6rem;
    color: #333;
}
</style>
