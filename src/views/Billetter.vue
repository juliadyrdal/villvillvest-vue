<template>
    <Header />
    <div class="page-width">
        <h2 class="section-heading u-padding-top-4"><span class="color-accent">Billetter</span> 
        </h2>
        <p class="paragraph u-padding-bottom-4">
        Opplev et stort og variert program med de beste og mest interessante artistene som beveger seg i den norske musikkfloraen for tiden. Vill Vill Vest 2021går over tre dager, fra torsdag 9.9 til og med lørdag 11.9.
        </p>
        <a class="ticket-button" href="https://villvillvest.ticketco.events/no/en/e/vill_vill_vest_2021">Kjøp <span>&rarr;</span></a>
    </div>

    <div class="ticket-cards">
        <h2 class="section-heading u-center u-padding-bottom-6 u-padding-top-2">Hvilken billett skal jeg velge?</h2>
        <div class="ticket-cards__container">
            <div class="ticket-card">
                <div class="ticket-card__content">
                    <h3>Dagspass</h3>
                    <div class="ticket-card__text-box">
                        <p class="u-bold">I salg fra 1 september</p>
                        <p class="u-bold">Dagspass Torsdag / Fredag 350,-</p>
                        <p class="u-bold">Dagspass Lørdag 450,-</p>
                        <p>Dette passet gir deg fysisk tilgang til alle konsertene arrangert av Vill Vill Vest på de gitte dagene (torsdag, fredag eller lørdag).</p>
                    </div>
                        <a href="https://villvillvest.ticketco.events/no/en/e/vill_vill_vest_2021" target="_blank" class="ticket-card__button">Kjøp <span>&rarr;</span></a>
                </div>
            </div>
            <div class="ticket-card">
                <div class="ticket-card__content">
                    <h3>Festivalpass</h3>
                    <div class="ticket-card__text-box">
                        <p class="u-bold">Festivalpass: 790,-</p>
                        <p class="u-bold">Studentpris: 690,-</p>
                        <p class="u-bold">Festivalpass (BT Fordel) 690,-</p>
                        <p>Dette passet gir deg fysisk tilgang til alle konsertene arrangert av Vill Vill Vest 9. - 11. september.</p>
                    </div>
                    <a href="https://villvillvest.ticketco.events/no/en/e/vill_vill_vest_2021" target="_blank" class="ticket-card__button">Kjøp <span>&rarr;</span></a>
                </div>
            </div>
            <div class="ticket-card">
                <div class="ticket-card__content">
                    <h3>Delegatpass</h3>
                    <div class="ticket-card__text-box">
                        <p class="u-bold">Earlybird (tom. 21. august) 1290,-</p>
                        <p class="u-bold">Normal pris 1490,-</p>
                        <p class="u-bold">Delegatpass student: 895,-</p>
                        <p>Dette passet gir deg tilgang til alt av program, i tillegg til møteplasser mm. arrangert av Vill Vill Vest</p>
                    </div>
                    <a href="https://villvillvest.ticketco.events/no/en/e/vill_vill_vest_2021" target="_blank" class="ticket-card__button">Kjøp <span>&rarr;</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
    Header
  }
}
</script>

<style lang="css">

.ticket-button {
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;
    background: #EF6202;
    padding: 1.5rem 4rem;
    border: none;
    transition: all 0.2s ease-in;
    cursor: pointer;
}
.ticket-button span {
    margin-left: 1rem;
    transition: all 0.3s ease-in;
}
.ticket-button:hover {
    background: lighten(#EF6202, $amount: 12%);
}
.ticket-button:hover span {
    margin-left: 1.7rem;
}
.ticket-cards {
    padding-left: 5rem;
    padding-right: 5rem;
    background-color: #F2EDED;
    margin-top: 6rem;
    padding-top: 4rem;
    padding-bottom: 8rem;
}
.ticket-cards__container {
    display: flex;
    justify-content: space-between;
}
.ticket-card {
    width: 40rem;
    border-radius: 1rem;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    background: #fff;
    position: relative;
    cursor: pointer;
    transition: transform .2s ease-in;

    &__content {
        padding: 3rem;
        position: relative;
    }
    & h3 {
        font-size: 3rem;
        color: #EF6202;
        padding-bottom: 1rem;
    }
    &__text-box {
        height: 20rem;
    }
    & p {
        font-size: 1.6rem;
        padding-top: 0rem;
        padding-bottom: 1rem;
    }
    &__button {
        margin-top: 2rem;
        display: block;
        padding: 1.5rem;
        font-size: 2rem;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: #EF6202;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all .2s ease-in;

        & span {
            margin-left: 1rem;
            transition: all .2s ease-in;
        }
        &:hover, &:active {
            background-color: lighten(#EF6202, $amount: 12%);
        }
        &:hover span {
            margin-left: 1.7rem;
        }
    }
}


</style>

