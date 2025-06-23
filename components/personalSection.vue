<template>
    <div class="section">
        <AboutMeSection></AboutMeSection>
        <div class="shadowDeco shadowDeco1"></div>
        <div class="shadowDeco shadowDeco2"></div>
        <ProjectsSection></ProjectsSection>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .section {
        position: relative;
        overflow: hidden;
        width: 100vw;
    }

    .shadowDeco {
        border-radius: 50%;
        position: absolute;
        background-color: var(--additive);
        mask-image: radial-gradient(closest-side, black 0%, rgba(0, 0, 0, 0) 100%);
        pointer-events: none;
        transition: color 0.2s, opacity 0.2s;
    }

    .shadowDeco1 {
        width: 100rem;
        height: 100%;
        left: -30rem;
        top: 0;
        opacity: 0.15;
    }

    .shadowDeco2 {
        width: 50rem;
        height: 50rem;
        opacity: 0.1;
        left: auto;
        top: auto;
        bottom: 0;
        right: -20rem;
    }

    html.light .shadowDeco {
        opacity: 0;
    }

    @media screen and (max-width: 1000px){
        .shadowDeco1 {
            height: 100rem;
        }
    }
</style>