<template>
    <div class="error-wrapper">
        <h1 class="sad">:(</h1>
        <h2>Seems that we got lost somewhere...</h2>
        <h2>Let's head back to <nuxt-link to="/">safety!</nuxt-link></h2>
    </div>
</template>

<script>
export default {
    name: "error"
}
</script>

<style lang="scss">
.error-wrapper {
    height: 100%;
    background: #272727 url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23393939' stroke-width='11.6' stroke-opacity='.61'%3E%3Cpath d='M-500 75s125-30 250-30S0 75 0 75s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30'/%3E%3Cpath d='M-500 45s125-30 250-30S0 45 0 45s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30M-500 105s125-30 250-30S0 105 0 105s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30'/%3E%3Cpath d='M-500 15s125-30 250-30S0 15 0 15s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30'/%3E%3Cpath d='M-500-15s125-30 250-30S0-15 0-15s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30M-500 135s125-30 250-30S0 135 0 135s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 0 0 10px 0;
        font-size: 3em;
    }

    .sad {
        margin: 0;
        transform: rotateZ(90deg);
        font-size: 10em;
        user-select: none;
        font-family: "Roboto", sans-serif;
    }

    a {
        text-decoration: underline transparentize($highlight, 1);
        color: $highlight;
        transition: all 150ms ease-in-out;

        &:hover { text-decoration: underline $highlight }
    }
}

</style>
