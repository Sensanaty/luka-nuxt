<template>
    <header>
        <nav class="header-nav">
            <nuxt-link to="/" id="home-link" class="header-navlink" aria-label="Home Link">LUKA</nuxt-link>
            <nuxt-link to="/projects" id="projects-link" class="header-navlink">PROJECTS</nuxt-link>
            <nuxt-link to="/contact" id="contact-link" class="header-navlink">CONTACT</nuxt-link>
            <nuxt-link to="/rambles" id="rambles-link" class="header-navlink">RAMBLES</nuxt-link>
            <nuxt-link to="/about" id="about-link" class="header-navlink">ABOUT</nuxt-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
header, .header-nav {
    display: flex;
    width: 100%;
}

.header-nav {
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    user-select: none;
    margin: 0 0 10px 0;

    .nuxt-link-exact-active {
        box-sizing: border-box;
        background: lighten($dark-highlight, 5);
        border-top: 2px solid $highlight;
    }
}

.header-navlink {
    font-size: 2.2em;
    text-decoration: none;
    color: $highlight;
    background: $dark-highlight;
    padding: 10px 0;
    text-align: center;
    min-width: 17%;
    border-top: 2px solid $main;
    transition: transform 150ms ease-in-out, background-color 110ms ease-in-out, border-top-color 125ms ease-in-out;

    &:hover { transform: translateY(3px) }
    &:active { background: lighten($dark-highlight, 5) }
}

@import "./assets/scss/media-queries/header";
</style>
