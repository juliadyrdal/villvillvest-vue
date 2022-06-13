<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header, Footer
  },
}
</script>

<style lang="css">
/* Variables */
:root {
  --signal-color: #EF6305;
  --font-family-display:'Druk Wide Super', sans-serif;
  --font-family-medium:'Druk Wide Medium', sans-serif;
  --font-family-small: 'Helvetica Neue', 'Open Sans', sans-serif; 
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
#app {
  font-family: var(--font-family-small);
  color: #333;
}
body {
  margin: 0;
}
body.navOpen {
  overflow: hidden;
}
a {
  color: #2a2a2a;
  text-decoration: none;
}


/******************/
/* Typography */
/******************/

/*
        This font software is the property of Commercial Type.

        You may not modify the font software, use it on another website, or install it on a computer.

        License information is available at http://commercialtype.com/eula
        For more information please visit Commercial Type at http://commercialtype.com or email us at info[at]commercialtype.com

        Copyright (C) 2021 Schwartzco Inc.
        License: 2105-ZIISZU     
*/

  @font-face {
    font-family: 'Druk Wide Super';
    src: url('assets/type/DrukWide-Super-Web.woff2') format('woff2'),
         url('assets/type/DrukWide-Super-Web.woff') format('woff');
    font-weight:  900;
    font-style:   normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Druk Wide Medium';
    src: url('assets/type/DrukWide-Medium-Web.woff2') format('woff2'),
         url('assets/type/DrukWide-Medium-Web.woff') format('woff');
    font-weight:  500;
    font-style:   normal;
    font-stretch: normal;
  }

  .heading {
    font-family: var(--font-family-display);
    font-size: 7rem;
  }

  .section-heading {
    font-family: var(--font-family-display);
    font-size: 6rem;
  }




/******************/
/* Utility Classes */
/******************/
.page-width {
  margin-left: 5rem;
  margin-right: 5rem;
}
.section-heading {
  font-size: 4.6rem;
}
.paragraph {
  font-size: 1.8rem;
  line-height: 2.5rem;
  width: 70%;
}
.color-accent {
  color: #EF6305;
}
.color-black {
  color: #2a2a2a;
}
.email {
  color: #2a2a2a;
  text-decoration: underline;
}
.underline {
  text-decoration: underline;
}
.u-bold {
  font-weight: bold;
}
.u-center {
  text-align: center;
}
.u-padding-bottom-2 {
  padding-bottom: 2rem;
}
.u-padding-bottom-4 {
  padding-bottom: 4rem;
}
.u-padding-bottom-6 {
  padding-bottom: 6rem;
}
.u-padding-top-2 {
  padding-top: 2rem;
}
.u-padding-top-4 {
  padding-top: 4rem;
}
.u-margin-bottom-2 {
  margin-bottom: 2rem;
}


/******************/
/* Responsiveness */
/******************/
html {
    /* This defines what 1rem is */
    font-size: 62.5%; 
    /* 1 rem = 10px; 10px/16px = 62.5% */
}
</style>
