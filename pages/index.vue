<template>
    <div class="page">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <PersonalSection></PersonalSection>
        <ToolsSection></ToolsSection>
    </div>
</template>

<script setup>
import AOS from 'aos'

onMounted(()=>{
    setTimeout(() => {
        AOS.init({
            once: true
        });
    }, 0);
})

</script>

<style scoped>
.page {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--bg);
    transition: background-color 0.2s;
}


</style>