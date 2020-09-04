<template>
    <div class="project-wrapper">
        <ProjectCard
            title="Spotlight"
            subtitle="Keep track of your restaurant's online presence in one convenient spot!"
            :stacks="['Rails', 'Heroku', 'Javascript', 'Vue', 'Netlify', 'React']"
            :descriptions="['Built with restaurant managers and owners in mind, Spotlight is a tool built with the intention of making their lives easier by taking away the monotony of having to check a huge number of different crowd-sourced review sites every single day. With Spotlight, all your Google, Tripadvisor, Zomato and Yelp reviews live under one unified dashboard for a much easier time accessing what your clients are thinking about.']"
            :links="{
                external: 'https://sp0tlight.herokuapp.com',
                internal: 'spotlight'
            }"
        />
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard"

export default {
    name: "Projects",
    layout: "header",
    components: {
        ProjectCard
    },
    head() {
        return {
            title: "LUKA | PROJECTS",
        }
    }
}
</script>

<style lang="scss"></style>
