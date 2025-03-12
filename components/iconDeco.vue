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
        element.value.style.left = `${random+2.5}vw`
        element.value.style.scale = "1"
        element.value.style.opacity = "0"
        element.value.style.transform = `translateY(-${5+Math.sqrt(Math.pow(random - 47.5, 2))/1.5}rem)`
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
        transition: scale 5s, bottom 5s, opacity 5s, transform 0s;
        /* color: var(--additive); */
    }
</style>