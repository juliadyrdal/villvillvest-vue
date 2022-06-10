<template>
    <footer class="footer page-width">
    <ul class="footer-list">
        <li class="footer-item"><a class="footer-link" href="#">Personvernerklæring</a></li>
        <li class="footer-item"><a class="footer-link" href="#">Samarbeidspartnere</a></li>
    </ul>

    <ul class="footer-list">
        <li class="footer-item"><a class="footer__link" href="#">Kontakt oss</a></li>
    </ul>

    <div class="footer-social">
        <a class="footer-link footer-link--social" href="https://www.facebook.com/villvillvest" target="_blank"><span class="fab fa-facebook-f"></span></a>
        <a class="footer-link footer-link--social"  href="https://www.instagram.com/villvillvest" target="_blank"><span class="fab fa-instagram"></span></a>
        <a class="footer-link footer-link--social"  href="https://www.youtube.com/channel/UCbXfGYyZiD6rux0bGge26UA" target="_blank"><span class="fab fa-youtube"></span></a>
    </div>

    <div class="footer-newsletter">

	


    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="css">
.footer {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 2fr;
    margin-top: 10rem;
}
.footer-list {
    list-style: none;
    padding-left: 0;
}
.footer-item {
    font-size: 1.8rem;
}
.footer-item:not(:last-child) {
    padding-bottom: 1rem;
}
.footer-link--social {
    font-size: 3rem;
    color: #EF6305;
    text-decoration: none;
}
.footer-link--social:not(:last-child) {
    padding-right: 2rem;
}


</style>


