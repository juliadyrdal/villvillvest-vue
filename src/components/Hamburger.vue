<template>
    <div @click="$emit('clickHamburger')" class="hamburger" :class="{open: navIsShowing}">
        <div>
            <h2>Meny</h2>
        </div>
        <div class="hamburger__lines">
            <div class="hamburger__line-1"></div>
            <div class="hamburger__line-2"></div>
            <div class="hamburger__line-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hamburger',
    props: ['navIsShowing'],
    methods: {
       
    }
}
</script>


<style scoped>
.hamburger {
    display: flex;  
    cursor: pointer; 
    color: #333;
    font-family: var(--font-family-display);   
}
.hamburger h2 {
    text-transform: uppercase;
    font-size: 3rem;
    margin-right: 2rem;
}
.hamburger__lines {
    position: relative;
    top: 3.2rem;
    width: 6rem;
    height: 4.5rem;
}
.hamburger__line-1, .hamburger__line-2, .hamburger__line-3 {
    position: absolute;
    background-color: #333;
    height: 4px;
    width: 40px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}
.hamburger__line-1 {
    top: 0;
}
.hamburger__line-2 {
    top: 1rem;
    width: 32px;
}
.hamburger__line-3 {
    top: 2rem;
}
.hamburger.open .hamburger__line-1 {
    top: 1rem;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}
.hamburger.open .hamburger__line-2 {
    opacity: 0;
}
.hamburger.open .hamburger__line-3 {
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    top: 1rem;
}
</style>


