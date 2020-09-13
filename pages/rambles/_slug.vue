<template>
        <article class="page-wrapper">
            <nuxt-link v-if="!hideOnMobile" class="back-link" to="/rambles">Back</nuxt-link>
            <nuxt-content :document="ramble"/>
        </article>

</template>

<script>
import debounce from "lodash.debounce";

export default {
    async asyncData({ $content, params }) {
        const ramble = await $content('rambles', params.slug).fetch();
        return { ramble }
    },
    data() {
        return {
            hideOnMobile: false
        }
    },
    mounted() {
        this.hideOnMobile = window.innerWidth <= 475;

        window.addEventListener("resize", debounce(() => {
            this.hideOnMobile = window.innerWidth <= 475;
        }, 25))
    },
    head() {
        return {
            title: "LUKA | " + this.ramble.title
        }
    },
}
</script>

<style lang="scss">
article {
    background: $dark-highlight;
    background: $dark-highlight;
    width: 65%;
    margin: 35px auto;
    padding: 40px;
}

.back-link {
    color: $highlight;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
    transition: all 150ms ease-in-out;
    user-select: none;

    &:hover { color: darken($highlight, 13) }
}

.nuxt-content {
    margin-top: 15px;

    h1 {
        font-size: 3.5em;
        margin: 0;
        text-decoration: underline solid $highlight;
        text-align: center;
    }

    h2 {
        font-size: 2em;
        text-align: center;
    }

    p {
        font-size: 1.35em;
        line-height: 1.3;
    }

    a {
        color: $highlight;
        text-decoration: solid underline $dark-highlight;
        transition: all 150ms ease-in-out;

        &:hover { text-decoration: solid underline $highlight}
    }

    // This is the class used by Nuxt Content for the codeblocks
    .line-numbers {
        background: $main;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        border-left: 5px solid $highlight;
        text-shadow: none;
        padding: 35px;

        ::selection {
            background: $highlight;
            color: black;
        }
    }
}

@import "./assets/scss/media-queries/ramblePage";
</style>
