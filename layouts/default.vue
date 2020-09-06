<template>
    <div class="layout-wrapper">
        <Header v-if="showHeader" />
        <transition name="fade" mode="out-in">
            <Nuxt />
        </transition>
    </div>
</template>

<script>
import Header from "@/components/Header"
export default {
    name: "default",
    components: { Header },
    computed: {
        showHeader() {
            const route = $nuxt.$route.name;
            return !(
                route === "index" ||
                route === "about" ||
                !route
            );
        }
    }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active { transition: opacity 250ms }
.fade-enter, .fade-leave-to { opacity: 0 }
</style>
