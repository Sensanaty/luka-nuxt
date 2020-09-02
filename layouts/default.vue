<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/mixins/fontface";
@include fontface("Josefin Sans", "../assets/fonts/JosefinSans-Medium", medium);

* {
    font-family: "Josefin Sans", sans-serif;
    background: $main;
}
</style>
