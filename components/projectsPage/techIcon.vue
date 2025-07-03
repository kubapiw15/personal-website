<template>
    <div class="icon" :style="`background-color: ${technologies[icon]?.color};`" :title="technologies[icon]?.name">
        <i :class="technologies[icon]?.icon" v-if="technologies[icon]?.icon"></i>
        <div class="backup" :style="`-webkit-mask: url('/img/icons/${icon}.svg') no-repeat center; mask: url('/img/icons/${icon}.svg') no-repeat center;`" v-else></div>
    </div>
</template>

<script setup>
const { icon } = defineProps(['icon'])
import { technologies } from '~/data/static'

</script>

<style lang="scss" scoped>
    .icon {
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.2rem;
        border-radius: 50%;

        i {
            font-size: 1.5rem;
            color: var(--bg);
            transition: color 0.2s;
        }

        .backup {
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--bg);
            transition: background-color 0.2s;
        }
    }
</style>