<template>
    <footer class="page-width">
        <!-- <div class="Footer__form">
            <h2>Subscribe to our newsletter</h2>
            <form action="/my-handling-form-page" method="post"> -->
                <!-- Refactor: Add label for screen reader -->
               <!-- <div class="border-bottom"><input class="footer__input" v-model="message" type="email" id="email" name="subscriber_email" placeholder="Email address" /></div>
                <button type="submit">Sign up</button>
            </form>
        </div> -->
        <div class="Footer__social">
            <a href="https://www.instagram.com/villvillvest" target="_blank">
                <img src="../assets/icons/instagram.svg" alt="Vill Vill Vest Instagram">
            </a>
            <a href="https://www.facebook.com/701999263235784" target="_blank">
                <img src="../assets/icons/facebook.svg" alt="Vill Vill Vest Facebook">
            </a>
            <a href="https://www.youtube.com/channel/UCbXfGYyZiD6rux0bGge26UA" target="_blank">
                <img src="../assets/icons/youtube.svg" alt="Vill Vill Vest Youtube">
            </a>
        </div>
        <ul class="Footer__contact">
            <li>
                <h2 class="Footer__contact-heading">Kontakt oss</h2>
                <a href="mailto:kontakt@villvillvest.no">kontakt@villvillvest.no</a>
            </li>
            <li>
                <h3>Festivalsjef/daglig leder</h3>
                <p>Simen Korneliussen (+47) 984 61 643</p>
                <a href="mailto:simen@villvillvest.no">simen@villvillvest.no</a>
            </li>
            <li>
                <h3>Konferanseansvarlig</h3>
                <p>Inni Mowinckel (+47) 936 34 242</p>
                <a href="mailto:inni@brak.no">inni@brak.no</a>
            </li>
        </ul>
        <hr>
        <!-- <ul class="Footer__links">
            <li><router-link :to="{ name: 'Personvern' }">Personvernerklæring</router-link></li>
            <li><router-link :to="{ name: item.link }">Samarbeidspartnere</router-link></li>
            <li><a href="#" target="_blank">Levert av: StudioKode</a></li>
        </ul> -->
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            message: null
        }
    }
}
</script>

<style scoped>
footer {
    margin-top: 8rem;
    /* Clamp Fallback for < Safari 13.1 */
    margin-left: min(max(2rem, 3vw), 5rem);
    margin-right: min(max(2rem, 3vw), 5rem);
    margin-left: clamp(2rem, 3vw, 5rem);
    margin-right: clamp(2rem, 3vw, 5rem);
    display: grid;
    grid-template-areas: "form social"
                         "contact contact"
                         "hr hr"
                         "links links";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr;
    grid-column-gap: 2rem;
    margin-bottom: 4rem;
    font-size: 1.4rem;
}
footer h2 {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    color: #333;
}
footer label {
    display: block;
    font-size: 1.4rem;
}
footer form {
    display: flex;
    min-width: 300px;
    grid-area: form;
    width: 100%;
}
.footer__input {
    flex-grow: 1;
    margin-right: 1.4rem;
    border: none;
    background-color: #f5f5f5;
}
.border-bottom {
    margin-right: 2rem;
    width: 40rem;
    border-bottom: 1px solid #000;
}
.footer__input::placeholder {
    padding-left: 1rem;
}
/* Make button darker on hover when refactoring to scss */
footer button {
    padding: 1.2rem 4rem;
    background-color: var(--signal-color-secondary);
    border: none; /* Remove default button style */
    border-radius: 45px;
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
}
.Footer__social {
    display: flex;
    grid-area: social;
    padding-bottom: 1rem;
    justify-content: flex-end;
    align-items: flex-end;
}
.Footer__social img {
    width: 3.5rem;
}
/* Refactor margin-right to use gap: 2rem; on flex parent if browser support */
.Footer__social a:not(:last-child) {
    margin-right: 2rem;
}
.Footer__social img:last-child {
    width: 4.5rem;
}
.Footer__contact {
    display: flex;
    grid-area: contact;
    margin: 8rem 0 0 0;
    width: 100%;
    padding: 0;
    list-style: none;
}
/* Refactor margin-right to use gap: 10vw; on flex parent if browser support */
.Footer__contact li:not(:last-child) {
    margin-right: 10vw;
}
.Footer__contact h2 {
    margin: 1.4rem 0 1rem 0;
    font-family: var(--font-family-medium);
    font-size: 2.8rem;
    color: var(--signal-color-primary);
}
.Footer__contact h3 {
    font-size: 1.4rem;
}
.Footer__contact a {
    text-decoration: underline;
}
footer hr {
    grid-area: hr;
    border: none;
    border-bottom: .5px solid var(--signal-color-secondary);
    width: 60%;
}
.Footer__links {
    display: flex;
    grid-area: links;
    margin-top: 8rem;
    width: 100%;
    padding: 0;
    list-style-type: none;
}
/* Refactor margin-right to use gap: 2rem; on flex parent if browser support */
.Footer__links li:not(:last-child) {
    margin-right: 2rem;
}
.Footer__links li:last-child {
    margin-left: auto;
    text-decoration: underline;
}
.Footer__dev-link {
    display: none;
}
@media (max-width: 800px) { 
   footer {
     grid-template-areas: "form form"
                          "contact contact"
                          "hr hr"
                          "links links"
                          "social social";
     grid-template-columns: 1fr 1fr;
     grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
    }    
    .Footer__links {
        justify-content: center;
    }  
    .Footer__links li:last-child {
        margin-left: 0;
    }   
    .Footer__social {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
}    
@media (max-width: 600px) {
    footer {
        grid-template-rows: 2fr 5fr 2fr 2fr 1fr;
    }
    .Footer__contact {
        flex-direction: column;
        margin: 4rem 0 0 0;
    }
    /* Refactor margin-right to use gap: 2rem; on flex parent if browser support */
    .Footer__contact li:not(:last-child) {
        margin-bottom: 2rem;
    }
    footer hr {
        width: 100%;
    }
    .Footer__links {
        flex-direction: column;
        margin-top: 4rem;
    }
    .Footer__links li:not(:last-child) {
        margin-bottom: 1.6rem;
    }
 }
</style>


