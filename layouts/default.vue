<template>
    <Nuxt />
</template>

<style lang="scss">
@import "./assets/scss/mixins/fontface";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');
@include fontface("Aeonik", "../assets/fonts/Aeonik-Bold", bold);
@include fontface("Aeonik", "../assets/fonts/Aeonik-Medium", 500);

html {
    background: $main;
    color: $secondary;
}

html, body, #__nuxt, #__layout, .page-wrapper {
    height: 100%;
}
</style>
