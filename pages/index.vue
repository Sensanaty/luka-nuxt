<template>
    <div class="home-wrapper">
        <div id="about-box" class="home-box black-out">
            <div class="box-letter" aria-hidden="true">L</div>
            <nuxt-link class="white-out box-link" aria-label="Link to About Me page" to="/about">ABOUT</nuxt-link>
        </div>
        <div id="projects-box" class="home-box white-out">
            <div class="box-letter" aria-hidden="true">U</div>
            <nuxt-link class="black-out box-link" aria-label="Link to Projects page" to="/projects">PROJECTS</nuxt-link>
        </div>
        <div id="contact-box" class="home-box white-out">
            <div class="box-letter" aria-hidden="true">K</div>
            <nuxt-link class="black-out box-link" aria-label="Link to Contact page" to="/contact">CONTACT</nuxt-link>
        </div>
        <div id="blog-box" class="home-box black-out">
            <div class="box-letter" aria-hidden="true">A</div>
            <nuxt-link class="white-out box-link" aria-label="Link to Blog page" to="/rambles">RAMBLES</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="scss">
.home-wrapper {
    height: 100%;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-template-areas:
        ". ."
        ". .";
    user-select: none;
}

.box-link {
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 150ms ease-in-out;

    &:hover { color: $highlight }
}

.black-out {
    background: $main;
    color: $secondary;
}

.white-out {
    background: $secondary;
    color: $main;
}

.box-letter {
    font-size: 16vh;
    line-height: 1;
    align-self: end;
    justify-self: center;
}

.home-box {
    display: grid;
}

// Top Left
#about-box {
    grid-template: 1fr 1fr 125px / 3fr 1fr 125px ;
    grid-template-areas:
        ". . ."
        ". letter ."
        ". . link";

    .box-letter { grid-area: letter }
    .box-link { grid-area: link }
}

// Top Right
#projects-box {
    grid-template: 1fr 1fr 125px / 125px 1fr 3fr;
    grid-template-areas:
        ". . ."
        ". letter ."
        "link . .";

    .box-letter { grid-area: letter }
    .box-link { grid-area: link }
}

// Bottom Left
#contact-box {
    grid-template: 125px 1fr 1fr / 3fr 1fr 125px;
    grid-template-areas:
        ". . link"
        ". letter ."
        ". . .";

    .box-letter {
        grid-area: letter;
        align-self: flex-start
    }
    .box-link { grid-area: link }
}

// Bottom Right
#blog-box {
    grid-template: 125px 1fr 1fr / 125px 1fr 3fr;
    grid-template-areas:
        "link . ."
        ". letter ."
        ". . .";

    .box-letter {
        grid-area: letter;
        align-self: flex-start
    }
    .box-link { grid-area: link }
}

@import "./assets/scss/media-queries/homepage";
</style>
