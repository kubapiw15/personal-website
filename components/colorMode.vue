<template>
    <div class="colormode" @click="switchColorMode()">
        <i class='bx bx-sun'></i>
        <i class='bx bx-moon' ></i>
    </div>
</template>

<script setup>

    const colorMode = useColorMode()
    const switchColorMode = ()=>{
        colorMode.value == 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
    }

</script>

<style scoped>

    .colormode {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        aspect-ratio: 1;
        cursor: pointer;
        position: relative;
        padding: 1.5rem;
        transition: background-color 0.2s;
    }
    .colormode i {
        color: var(--low-contrast);
        font-size: 1.5rem;
        transition: color 0.2s, transform 0.2s, opacity 0.2s;
    }


    .colormode:hover i {
        color: var(--text-light);
    }

    .colormode i:nth-child(2) {
        
        position: absolute;
    }

    html.dark .colormode i:nth-child(1) {
        transform: translateY(50%);
        opacity: 0;
    }

    html.light .colormode i:nth-child(2){
        transform: translateY(-50%);
        opacity: 0;
    }

</style>