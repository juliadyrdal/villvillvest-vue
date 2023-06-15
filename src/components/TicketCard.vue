<template>
    
    <div>
        <a class="ticket-card" href="https://villvillvest.ticketco.events/no/en/e/vill_vill_vest_2023" target="_blank">
        <h2>{{ title }}</h2>
        <ul>
            <slot></slot>
            <!-- <li>Festivalpass: <span>890,-</span></li>
            <li>Studentpass: <span>749,-</span></li> -->
        </ul>
        <div class="ticket-offer">
            <slot name="usp"></slot>
            <!-- <span class="color-accent u-bold">Juletilbud</span>
            <span class="color-accent u-bold">50% på festivalpass</span> -->
        </div>
    </a>
    </div>

</template>

<script>
export default {
props: ['title'],
data() {
    return {

    }
}
}
</script>

<style scoped>
a {
    text-decoration: none;
}
a:hover {
    color: #333;
}
.ticket-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    min-width: 20rem;
    max-width: 25rem;
    min-height: 29rem;
    padding: 3.5rem 3.5rem;
    border: 4px solid var(--signal-color-primary);
    border-radius: 45px;
    transition: all 300ms;
}
.ticket-card:hover {
    border: 4px solid var(--signal-color-secondary);
    border-radius: 45px;
    background-color: #fff;
    box-shadow:  0rem 0rem .5rem var(--signal-color-secondary);
}
.ticket-card:hover {
    cursor: pointer;
}
h2 {
    padding: 0;
    margin: 0;
    color: var(--signal-color-primary);
    font-family: var(--font-family-medium);
}
ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    padding-bottom: 2rem;
    list-style-type: none;
    font-size: 1.4rem;
    font-weight: 500;
}
ul span {
    padding-left: 3rem;
    font-weight: bold;
    font-size: 2rem;
}
.ticket-offer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>