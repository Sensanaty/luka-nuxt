<template>
    <div class="layout-wrapper">
        <Header v-if="showHeader" />
        <Nuxt />
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
