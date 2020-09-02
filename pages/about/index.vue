<template>
    <div class="page-wrapper about-wrapper">
        <div class="intro">
            <h1 class="greeting">
                Hi, I'm
                <nuxt-link to="/" class="home-link squared-link" aria-label="Link to the homepage labeled 'LUKA'">
                    LUKA
                </nuxt-link>
            </h1>
            <h2 class="description">I'm a Fullstack Web Developer</h2>
        </div>

        <div class="links">
            <p class="nav-text">
                Want to see what I've been working on lately? Check out my
                <nuxt-link to="/projects" class="inline-link squared-link">PROJECTS</nuxt-link>
            </p>
            <p class="nav-text">
                Wanted to talk to me about a project? Get in
                <nuxt-link to="/contact" class="inline-link squared-link">CONTACT</nuxt-link>
            </p>
            <p class="nav-text">
                I write down my thoughts as I make things. Check out the
                <nuxt-link to="/rambles" class="inline-link squared-link">RAMBLES</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="scss">
.about-wrapper {
    font-family: "Aeonik", sans-serif;
    font-weight: bold;
    display: grid;
    grid-template: 1fr 1fr / 1fr;
}

.intro { margin: 2% 3% }

.greeting, .description, .nav-text {
    margin: 0;
    padding: 0;
    line-height: 1;
}

.greeting {
    font-size: 7rem;
    margin-bottom: 25px;
}

.description { font-size: 5.7rem }

.nav-text {
    font-size: 2rem;
    margin: 20px 0;
}

.links {
    font-weight: 500;
    align-self: flex-end;
    justify-self: flex-end;
    text-align: right;
    margin: 2% 3%;
}

.squared-link {
    background: $dark-highlight;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: $highlight;
    transition: all 125ms ease-in-out;
    display: inline-block;
    &:active { background: lighten($main, 10)}

    &.home-link {
        padding: 8px 25px;
        &:hover { transform: translateX(3px) }
    }

    &.inline-link {
        min-width: 208px;
        padding: 12px;
        font-size: 2.15rem;
        text-align: center;
        &:hover { transform: translateY(2px) }
    }
}
</style>
