<template>
    <div class="tile">
        <i :style="`color: ${color};`" :class='`${icon}`'></i> 
        <h3 class="text">{{ text }}</h3>
        <div class="shadow" :style="`background-color: ${color};`"></div>
    </div>
</template>

<script setup>

const { icon, text, color } = defineProps(['icon', 'text', 'color'])

</script>

<style scoped>

.tile {
    border-radius: 0.5rem;
    /* border: solid 0.1rem var(--low-contrast-60); */
    flex: 1;
    margin: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: min-content;
}

i {
    font-size: 5rem;
    color: white;
}

h3 {
    font-size: 1.3rem;
    margin: 0.2rem 0 0 0.4rem;
    transition: color 0.2s;
    color: var(--text-dark);
    opacity: 0.6;
}


.shadow {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 200%;
    width: 200%;
    opacity: 0.1;
    mask-image: radial-gradient(circle,rgba(0, 0, 0, 0.2) 0%, rgb(0, 0, 0) 100%);
    transition: opacity 0.2s, mask-image 0.2s;
}

html.light .shadow {
    
    mask-image: radial-gradient(circle,rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
}

.tile:hover .shadow {
    opacity: 0.2;
}

@media screen and (max-width: 1000px){
    .tile {
        pointer-events: none;
        justify-content: center
    }

    h3 {
        display: none;
    }

    i {
        margin: 0;
    }
}

</style>