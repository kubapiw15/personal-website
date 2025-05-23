<template>
    <i class='bx' :class="icon" ref="element"></i>
</template>

<script setup>

    const { icon } = defineProps(['icon'])

    const element = ref()
    const random = (Math.random()*95)
    const colors = [
        'var(--low-contrast)',
        'var(--additive)'
    ]
    const color = colors[Math.floor(Math.random()*colors.length)]

    onMounted(()=>{
        setTimeout(() => {
        element.value.style.left = `calc(${random+2.5}vw - 2rem)`
        element.value.style.scale = "1"
        element.value.style.opacity = "0"
        if(window.matchMedia("(max-width: 1000px)").matches) {
            element.value.style.transform = `translateY(-${10+Math.abs(random - 47.5)/4}rem)`
        } else {
            element.value.style.transform = `translateY(-${10+Math.pow(random - 47.5, 2)/80}rem)`
        }
        element.value.style.color = color
        }, 20);
    })

</script>

<style scoped>
    i {
        position: absolute;
        bottom: 0;
        scale: 0;
        font-size: 4rem;
        transition: scale 5s, bottom 5s, opacity 5s, transform 0s, color 0.2s;
        transform: translateX(-50%);
    }
</style>