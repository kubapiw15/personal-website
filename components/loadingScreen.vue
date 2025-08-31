<template>
    <div class="loadingScreen" :class="{loaded: loaded}">
        <div class="logo"></div>
        <p>{{ $t('general.loading') }}</p>
    </div>
</template>

<script setup>

const { loaded } = defineProps(['loaded'])

import logo from '~/public/img/logo.svg'

</script>

<style lang="scss" scoped>

.loadingScreen {
    position: fixed;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--additive2);
    opacity: 1;
    transition: background-color 0.2s, opacity 0.5s;

    &.loaded {
        pointer-events: none;
        opacity: 0;
    }
}

html.dark .loadingScreen {
    background-color: rgb(19, 19, 19);
}

.logo {
    width: 10rem;
    height: 10rem;
    background-color: white;
    // box-shadow: inset 0 0 10rem rgba(var(--additive2-rgb), 0.2);
    -webkit-mask: url('/img/logo.svg') no-repeat center;
    mask: url('/img/logo.svg') no-repeat center;
    transition: background-color 0.2s, box-shadow 0.2s, opacity 0.2s;
    opacity: 0.6;
}

html.dark .logo {
    background-color: var(--additive2);
    box-shadow: none;
    opacity: 1;
}

p {
    color: var(--bg);
    font-size: 1.3rem;
    margin-top: 3rem;
    font-weight: 500;
    opacity: 0;
    animation: p 0.5s forwards 2s;
    transition: color 0.2s;
}

html.dark p {
    color: var(--text-lighter);
}

@keyframes p {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>