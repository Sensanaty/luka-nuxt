<template>
    <div class="ramble-wrapper">
        <nuxt-link class="ramble-card" v-for="ramble in rambles" :key="ramble.slug" :to="{ name: 'rambles-slug', params: { slug: ramble.slug } }">
            <div class="ramble-header-wrapper">
                <pre class="date">{{ ramble.updatedAt | humanReadable }}</pre>
                <h1 class="ramble-title">{{ ramble.title }}</h1>
            </div>
            <h2 class="ramble-description">{{ ramble.description }}</h2>
        </nuxt-link>
    </div>
</template>

<script>
import dayjs from "dayjs";

export default {
    name: "Rambles",
    async asyncData({ $content, params }) {
        const rambles = await $content('rambles', params.slug).sortBy('updatedAt', 'desc').fetch();
        return { rambles }
    },
    head() {
        return {
            title: "LUKA | RAMBLES"
        }
    },
    filters: { humanReadable: (date) => { return dayjs(date).format("MMMM DD, YYYY") } }
}
</script>

<style lang="scss">
.ramble-wrapper {
    display: flex;
    flex-flow: column;
}

.ramble-card {
    display: flex;
    flex-flow: column;
    width: 65%;
    background: $dark-highlight;
    color: $secondary;
    margin: 20px auto;
    &:nth-child(1) { margin: 35px auto }
    padding: 20px 25px;
    text-decoration: none;
    position: relative;
    transition: background 2 00ms ease-in-out;

    &:after {
        content: "Read More";
        font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        position: absolute;
        right: 25px;
        top: 25px;
        color: $highlight;
        opacity: 0;
        transition: all 150ms ease-in-out;
        font-size: 1.3em;
    }

    &:hover:after {
        opacity: 1;
        transform: translateY(2px);
    }

    &:active { background: lighten($dark-highlight, 5) }
}

.date {
    margin: 0;
    font-size: 1em;
    color: darken($secondary, 40);
}

.ramble-title, .ramble-description { margin: 0 }

.ramble-title {
    text-decoration: underline solid $highlight;
    display: inline-flex;
    margin-bottom: 20px;
}

</style>
