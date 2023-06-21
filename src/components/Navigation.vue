<template>
    <nav id="navigation">
        <MqResponsive target="lg+">
        <section class="Navigation__container">
            <NavCategory v-for="category in categoryList" @clickLink="parentEmit" :category="category" :key="category.heading" />
        </section> 
        <!-- <section class="Navigation__footer">
            <div class="Navigation__cta">   
                <router-link to="/ledig-stilling"><button>Ledig stilling &rarr;</button></router-link>
            </div>
            <div class="Navigation__form">
                <h2>Subscribe to our newsletter</h2>
                <form action="/my-handling-form-page" method="post"> -->
                    <!-- Refactor: Add label for screen reader -->
                    <!-- <input type="email" id="email" name="subscriber_email" placeholder="Email address" />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </section> -->
        </MqResponsive>

        <!-- Mobile navigation  -->
        <MqResponsive target="md-">
            <section v-if="!currentSubNav" class="MobileNav__container">
                <a @click="openSubNav" class="MobileNav__link" v-for="category in categoryList" :key="category.heading">{{ category.heading }}</a>
            </section>
            <section v-if="currentSubNav" class="MobileNav__container">
                <SubNav @clickBack="closeSubNav" @clickLink="parentEmit" :list="subList" />
            </section>
        </MqResponsive>
    </nav>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import NavCategory from '@/components/NavCategory.vue'
import SubNav from '@/components/SubNav.vue'
export default {
    inject: ["mq"],
    name: 'Navigation',
    components: {
        MqResponsive, NavCategory, SubNav
    },
    data() {
        return {
            categoryList: [
                {
                    "heading": "Konferanse",
                    "links": [
                        {
                            "link": "Speakers",
                            "title": "Sessions 2022"
                        },
                        {
                            "link": "ConfSchedule",
                            "title": "Konferanseprogram"
                        },
                        {
                            "link": "DelegateTickets",
                            "title": "Delegate tickets"
                        },
                        {
                            "link": "Venues",
                            "title": "Venues"
                        },
                        {
                            "link": "YoungDelegate",
                            "title": "Ung delegat"
                        },
                    ]
                },
                {
                   "heading": "Festival",
                    "links": [
                        {
                            "link": "Artists",
                            "title": "Lineup 2023"
                        },
                        // {
                        //     "link": "ArtistsSchedule",
                        //     "title": "Artistprogram",
                        // },
                        {
                            "link": "Billetter",
                            "title": "Billetter"
                        },
                        {
                            "link": "VenuesOgScener",
                            "title": "Venues og scener"
                        },
                    ] 
                },
                {
                   "heading": "Vill Vill Vest",
                    "links": [
                        {
                            "link": "OmVillVillVest",
                            "title": "Om Vill Vill Vest"
                        },
                        {
                            "link": "Frivillig",
                            "title": "Frivillig"
                        },
                        {
                            "link": "OurPartners",
                            "title": "Våre partnere"
                        },
                        {
                            "link": "KontaktOss",
                            "title": "Kontakt oss"
                        },
                        {
                            "link": "ArtistPamelding",
                            "title": "Artistpåmelding 2023"
                        }
                    ] 
                }
            ],
            currentSubNav: null,
            subList: null
        }

    },
    methods: {
        // Event emitted from child component -> 
        // emit further to parent component
        parentEmit() {
            this.$emit('clickEvent')
        },
        closeSubNav() {
            this.currentSubNav = null
        },
        openSubNav(event) {
            this.currentSubNav = event.target.innerText
            for(const category of this.categoryList) {
                if(this.currentSubNav === category.heading) {
                    this.subList = category
                } 
            }
        }
    }
}
</script>

<style scoped>
#navigation {
    padding-left: clamp(4rem, 5vw, 10rem);
    padding-right: clamp(4rem, 5vw, 10rem);
    height: 100vh;
    background: #fff;
    position: relative;
    z-index: 200;
}
.Navigation__container {
    display: flex;
    justify-content: space-between;
    padding-top: 6vh;
} 
.Navigation__footer {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 9vh;
}
.Navigation__cta {
    align-self: end;
}
.Navigation__form {
    margin-left: auto;
}
.Navigation__footer h2 {
    margin-left: auto;
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    color: #333;
}
.Navigation__footer label {
    display: block;
    font-size: 1.4rem;
}
.Navigation__footer form {
    display: flex;
    min-width: 35vw;
    width: 100%;
}
.Navigation__footer input {
    flex-grow: 1;
    margin-right: 1.4rem;
    border: 1px solid #D9D9D9;
}
.Navigation__footer input::placeholder {
    padding-left: 1rem;
}
/* Make button darker on hover when refactoring to scss */
.Navigation__footer button {
    padding: 1.2rem 4rem;
    background-color: var(--signal-color-secondary);
    border: none; /* Remove default button style */
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
}
.Navigation__cta button {
    padding: 2rem 8rem;
    font-size: 2rem;
}

/* Mobile styles */
.MobileNav__container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 45%;
    transform: translate(-50%, -50%);
}
.MobileNav__link {
    font-size: 3.2rem;
    font-family: var(--font-family-medium);
    color: var(--signal-color-primary);
    text-decoration: none;
    cursor: pointer;
}
.MobileNav__link:not(:last-child) {
    margin-bottom: 4rem;
}
</style>



