<template>
    <header>
        <nav class="header-nav">
            <nuxt-link to="/" class="header-navlink">LUKA</nuxt-link>
            <nuxt-link to="/projects" class="header-navlink">PROJECTS</nuxt-link>
            <nuxt-link to="/contact" class="header-navlink">CONTACT</nuxt-link>
            <nuxt-link to="/rambles" class="header-navlink">RAMBLES</nuxt-link>
            <nuxt-link to="/about" class="header-navlink">ABOUT</nuxt-link>
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
    margin: 10px 0;

    .nuxt-link-exact-active { background: lighten($dark-highlight, 5) }
}

.header-navlink {
    font-size: 2.2em;
    text-decoration: none;
    color: $highlight;
    background: $dark-highlight;
    padding: 10px 0;
    text-align: center;
    min-width: 17%;
    transition: transform 150ms ease-in-out, background-color 110ms ease-in-out;

    &:hover { transform: translateY(3px) }
    &:active { background: lighten($dark-highlight, 5) }
}
</style>
