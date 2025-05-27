<template>
    <li class="notification" :class="{ 'success': type == 'success', 'error': type == 'error' }">
        
        <i v-if="type == 'info'" class='bx bx-info-circle'></i>
        <i v-if="type == 'success'" class='bx bx-check-circle'></i>
        <i v-if="type == 'error'" class='bx bxs-error'></i>
        <p>{{ text }}</p>
    </li>
</template>

<script setup>
    const {text, type} = defineProps(["text", "type"])
</script>

<style scoped>

    .notification {
        width: 100%;
        margin-block: 0.5rem;
        border-radius: 1rem;
        background-color: rgba(54, 145, 219, 0.3);
        color: rgb(54, 145, 219);
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        animation: notification 0.5s;
        animation-delay: 4.5s;
        transition-duration: 0.5s;
        animation-fill-mode: forwards;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    }

    .notification.success {
        background-color: rgba(40, 190, 40, 0.3);
        color: rgb(40, 190, 40);
    }

    .notification.error {
        background-color: rgba(255, 73, 73, 0.3);
        color: rgb(255, 73, 73);
    }

    p {
        margin: 0 0 0 1rem;
        padding: 0.5rem;
        text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }

    i {
        color: inherit;
        text-shadow: 0 0 1rem rgba(255, 166, 0, 0.1);
        padding: 1rem;
        font-size: 1.5rem;
    }

    @keyframes notification {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

</style>