<template>
    <div class="checkBox" @click="model = !model" :class="{active: model}">
        <i class='true bx  bx-check'></i> 
        <i class='false bx  bx-x'></i> 
    </div>
</template>

<script setup>

const model = defineModel()

</script>

<style lang="scss" scoped>

.checkBox {
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem;
    min-height: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: background-color 0.2s;
    background-color: var(--low-contrast);
    cursor: pointer;

    i {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: opacity 0.2s, color 0.2s, transform 0.2s;
        font-size: 1.2rem;
    }

    .true {
        color: var(--bg-light);
        transform: translateY(-0.2rem);
        opacity: 0;

    }

    .false {
        color: var(--bg-light);
        transform: translateY(0rem);
    }
}

.checkBox.active {
    background-color: var(--additive2);

    .true {
        opacity: 1;
        transform: translateY(0rem);
    }
    .false {
        transform: translateY(0.2rem);
        opacity: 0;
    }
}

</style>