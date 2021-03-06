<template>
    <nav id="navigation">
        <MqResponsive target="lg+">
        <section class="Navigation__container">
            <NavCategory v-for="category in categoryList" @clickLink="parentEmit" :category="category" :key="category.heading" />
        </section> 
        <section class="Navigation__footer">
            <div class="Navigation__cta">   
                <button>Secure Tickets &rarr;</button>
            </div>
            <div class="Navigation__form">
                <h2>Subscribe to our newsletter</h2>
                <form action="/my-handling-form-page" method="post">
                    <!-- Refactor: Add label for screen reader -->
                    <input type="email" id="email" name="subscriber_email" placeholder="Email address" />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </section>
        </MqResponsive>

        <!-- Mobile navigation  -->
        <MqResponsive target="md-">
            <section v-if="!currentSubNav" class="MobileNav__container">
                <a @click="openSubNav" class="MobileNav__link" v-for="category in categoryList" :key="category.heading">{{ category.heading }}</a>
            </section>
            <SubNav v-if="currentSubNav" @clickBack="closeSubNav" :list="subList" />
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
                    "heading": "Conference",
                    "links": [
                        {
                            "link": "Speakers",
                            "title": "Speakers 2021"
                        },
                        {
                            "link": "ConfSchedule",
                            "title": "Schedule"
                        },
                        {
                            "link": "DelegateTickets",
                            "title": "Delegate tickets"
                        },
                        {
                            "link": "YoungDelegate",
                            "title": "Young delegate"
                        }
                    ]
                },
                {
                   "heading": "Music",
                    "links": [
                        {
                            "link": "Artists",
                            "title": "Lineup 2021"
                        },
                        {
                            "link": "ArtistsSchedule",
                            "title": "Schedule",
                        },
                        {
                            "link": "Billetter",
                            "title": "Tickets"
                        }
                    ] 
                },
                {
                   "heading": "Festival",
                    "links": [
                        {
                            "link": "OmVillVillVest",
                            "title": "About Vill Vill Vest"
                        },
                        {
                            "link": "Frivillig",
                            "title": "Volunteer"
                        },
                        {
                            "link": "Venues",
                            "title": "Venues and stages"
                        },
                        {
                            "link": "OurPartners",
                            "title": "Our Partners"
                        },
                        {
                            "link": "KontaktOss",
                            "title": "Contact us"
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
            // Populate subMenu with corresponding 
            // categoryList -> loop through categoryList, find match for category.heading, render category.links 
        }
    }
}
</script>

<style scoped>
#navigation {
    margin-left: clamp(2rem, 3vw, 5rem);
    margin-right: clamp(2rem, 3vw, 5rem);
    padding: 0 6rem;
    height: 100vh;
    background: #fff;
    position: relative;
    z-index: 200;
}
.Navigation__container {
    display: flex;
    justify-content: space-between;
    margin-top: 6vh;
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
    background-color: var(--signal-color);
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
    left: 50%;
    transform: translate(-50%, -50%);
}
.MobileNav__link {
    font-size: 3.2rem;
    font-family: var(--font-family-medium);
    color: var(--signal-color);
    text-decoration: none;
    cursor: pointer;
}
.MobileNav__link:not(:last-child) {
    margin-bottom: 4rem;
}
</style>



