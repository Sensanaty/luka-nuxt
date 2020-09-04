<template>
    <div class="projects-wrapper">
        <ProjectCard v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :subtitle="project.subtitle"
            :stacks="project.stacks"
            :descriptions="project.description"
            :links="{
                external: project.links.external,
                internal: project.links.internal
            }"
        />
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard"
import projectList from "@/assets/lists/projectList.json";

export default {
    name: "Projects",
    layout: "header",
    data() {
        return {
            projects: projectList
        }
    },
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

<style lang="scss">
.projects-wrapper {
    display: flex;
    flex-flow: column wrap;
}
</style>
