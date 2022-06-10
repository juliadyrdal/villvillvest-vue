<template>
    <div>
        <div id="header">
            <router-link to="/"><img class="logo" src="@/assets/logo-2021-orange.png" alt="Vill Vill Vest Logo"></router-link>
            <div @click="toggleNav" class="hamburger">
                <h2>Meny</h2>
                    <div class="hamburger-lines">
                    <div class="burger-line-1"></div>
                    <div class="burger-line-2"></div>
                    <div class="burger-line-3"></div>
                </div>
            </div>
        </div>

    <!-- Refactor: separate components for nav and nav items -->
    <nav v-if="navIsShowing" id="navigation">
        <div class="nav-container">
        <img class="nav-blob" src="../assets/blobb.png" alt="Abstrakt illustrasjon"> 

        <div class="nav-category">
            <h2 class="nav-heading">Billetter & Påmelding</h2>
            <ul class="nav-list">
                <router-link @click="toggleNav" :to="{ name: 'Billetter' }">
                <li class="nav-item">Billetter</li>
                </router-link>
                <router-link @click="toggleNav" :to="{ name: 'Frivillig' }">
                <li class="nav-item">Frivillig</li>
                </router-link>
            </ul>
        </div>

        <div class="nav-category">
            <h2 class="nav-heading">Festival</h2>
            <ul class="nav-list">
                <router-link @click="toggleNav" :to="{ name: 'Artists' }">
                    <li class="nav-item">Artister 2021</li>
                </router-link>
                <li class="nav-item">Konferanse 2021</li>
                <router-link @click="toggleNav" :to="{ name: 'UngDelegat' }">
                <li class="nav-item">Ung delegat</li>
                </router-link>
            </ul>
        </div>

        <div class="nav-category">
            <h2 class="nav-heading">Om Vill Vill Vest</h2>
            <ul class="nav-list">
                <router-link @click="toggleNav" :to="{ name: 'OmVillVillVest' }">
                    <li class="nav-item">Om Vill Vill Vest</li>
                </router-link>
                <router-link @click="toggleNav" :to="{ name: 'KontaktOss' }">
                    <li class="nav-item">Kontakt oss</li>
                </router-link>
                <li class="nav-item">Samarbeidspartnere</li>
            </ul>
        </div>
        <div class="nav-social">
                <a class="social-link" href="#" target="_blank"><span class="fab fa-facebook-f"></span></a>
                <a class="social-link"  href="#" target="_blank"><span class="fab fa-instagram"></span></a>
                <a class="social-link"  href="#" target="_blank"><span class="fab fa-youtube"></span></a>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            navIsShowing: false
        }
    },
    methods: {
        toggleNav() {
            this.navIsShowing = !this.navIsShowing
        }
    }
}
</script>


<style scoped>
#header {
    display: flex;
    height: 10rem;
    z-index: 100;
    position: relative;
    & .logo {
        width: 10rem;
    }
}
#navigation {
    position: absolute;
    top: 8rem;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 100;
}
.nav-container {
    display: grid;
    grid-template-columns: 35% 1fr 1fr 1fr;
    grid-column-gap: 6rem;
    margin-top: 17vh;
    padding-left: 7rem;
    padding-right: 7rem;
}
.nav-blob {
    margin-top: 10rem;
    width: 35rem;
    transform: rotate(-35deg)
}
.nav-heading {
    color: #EF6305;
    font-size: 2.4rem;
}
.nav-list {
    list-style: none;
    padding-left: 0;
}
.nav-item {
    padding-bottom: 2rem;
    font-size: 2rem;
}
.nav-social {
    margin-top: 2rem;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-self: start;
}
.social-link {
    font-size: 3rem;
    color: #EF6305;
    text-decoration: none;
}
.social-link:not(:last-child) {
    margin-right: 4rem;
}
.hamburger {
  color: #333;
  display: flex;
  flex-direction: row;  
  align-items: center;
  cursor: pointer;   

  & h2 {
      text-transform: uppercase;
      font-size: 3rem;
      margin-right: 2rem;
  }
}
.hamburger-lines {
    margin-top: -.7rem;
    display: flex;
    flex-direction: column;
}
.burger-line-1, .burger-line-2, .burger-line-3 {
  background-color: #333;
  height: 4px;
  width: 40px;
  margin-top: 7px;
}

.burger-line-2 {
    width: 32px;
}

</style>







