<template>
    <Nuxt />
</template>

<style lang="scss">
@import "./assets/scss/mixins/fontface";
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@include fontface("Josefin Sans", "../assets/fonts/JosefinSans-Medium", medium);

html {
    background: $main;
    color: $secondary;
}

html, body, #__nuxt, #__layout, .page-wrapper {
    height: 100%;
}
</style>
