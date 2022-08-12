<template>
  <Header />
  <router-view/>
  <sponsorSection />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SponsorSection from '@/components/SponsorSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header, Footer, SponsorSection
  },
}
</script>

<style lang="css">
/************************************/
/************************************/
         /* GLOBAL STYLES */
/************************************/
/************************************/

/******************/
/* Variables */
/******************/
:root {
  --signal-color: #EF6305;
  --font-family-display:'Druk Wide Super', sans-serif;
  --font-family-medium:'Druk Wide Medium', sans-serif;
  --font-family-small: 'Helvetica Neue', 'Open Sans', sans-serif; 
}
#app {
  font-family: var(--font-family-small);
  font-size: 1.6rem;
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
}
a:hover {
  text-decoration-color: var(--signal-color);
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

/* These styles will apply to the body p of pages fetched from api */
  p {
    line-height: 1.7;
  }


/******************/
/* Utility Classes */
/******************/
.color-accent {
  color: #EF6305;
}
.color-black {
  color: #2a2a2a;
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


/******************/
/* Responsiveness */
/******************/
html {
    /* This defines what 1rem is */
    font-size: 62.5%; 
    /* 1 rem = 10px; 10px/16px = 62.5% */
}
</style>
