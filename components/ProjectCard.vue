<template>
    <div class="project-card">
        <div class="header-section">
            <h1 class="project-title">{{ title }}</h1>
            <div class="stacks-wrapper">
                <span v-for="(stack, index) in stacks" :class="stack.toLowerCase()" aria-hidden="true" :key="index">
                    {{ stack }}
                </span>
            </div>
        </div>
        <h2 class="project-subtitle">{{ subtitle }}</h2>
        <p class="project-description" v-for="(description, index) in descriptions" :key="index + stacks.length">
            {{ description }}
        </p>
        <div class="project-link-wrapper">
            <a
                class="project-card-link project-link"
                v-if="links.external"
                :href="links.external"
                target="_blank"
                rel="noopener"
            >
                See it in action
            </a>
            <nuxt-link class="project-card-link ramble-link" v-if="links.internal" :to="`/rambles/${links.internal}`">
                See the ramble
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        subtitle: String,
        stacks: Array,
        descriptions: Array,
        links: {
            external: String,
            internal: String
        }
    }
}
</script>

<style lang="scss">
.project-card {
    width: 65%;
    display: flex;
    flex-flow: column nowrap;
    margin: 35px auto;
    padding: 20px 25px;
    background: lighten($dark-highlight, 2);
}

.header-section {
    display: flex;
    align-items: center;
}

.stacks-wrapper {
    margin-left: auto;

    span {
        font-family: "Roboto", sans-serif;
        font-size: 1.35em;
        font-weight: 700;
        margin: 0 8px;
        padding: 6px 12px;
        user-select: none;
        display: inline-flex;

        &.rails { background: #cc0000; color: $secondary }
        &.heroku { background: #6762a6; color: $secondary }
        &.vue { background: #45b882; color: $main; }
        &.javascript { background: $highlight; color: $main; }
        &.netlify { background: #4a9d8e; color: $main; }
        &.react { background: #5bd9ff; color: $main; }
        &.ember { background: #fa9500; color: $main }
        &.nuxt { background: #05668D; color: $secondary }
    }
}

.project-title {
    font-size: 3em;
    letter-spacing: 1px;
    margin: 0;
}

.project-subtitle {
    margin: 10px 0;
    font-size: 2em;
    text-decoration: underline $highlight;
}

.project-description {
    margin: 30px 0 0 0;
    font-size: 1.4em;
    line-height: 1.2;
}

.project-link-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 30px 0 0 0;
}

.project-card-link {
    display: inline-block;
    color: $highlight;
    text-decoration: none;
    font-size: 1.7em;
    font-weight: 700;
    margin: 5px 0;
    transition: color 115ms ease-in-out, transform 150ms ease-in-out;

    &:hover {
        color: darken($highlight, 15);
        transform: translateY(1px);
    }

    &:active { transform: translateY(3px) }
}
</style>
