<template>
    <li :class="{extended: extended}">
        <transition>
        <div v-if="!extended" class="mainContent">
            <i :class='`bx ${staticNames.eventIcons[log.action][0]} icon`' :style="`color: ${staticNames.eventColors[log.action][0]};text-shadow: 0 0 1rem ${staticNames.eventColors[log.action][1]};`"></i>


            <p v-if="!permissionsStore.permissions.accounts" class="user">{{ log.username }}</p>
            <nuxtLink :href="`/panel/accounts/${log.user}`" v-if="permissionsStore.permissions.accounts" class="user">{{ log.username }}</nuxtLink>
            <p class="action" v-if="staticNames.events[log.action]">{{ staticNames.events[log.action][1] }}</p>
            <p class="target" v-if="!notarget && !log.action.startsWith('account')">{{ log.target }}</p>
            <p class="target" v-if="!notarget && log.action.startsWith('account') && !permissionsStore.permissions.accounts">{{ log.targetname }}</p>
            <nuxtLink :href="`/panel/accounts/${log.target.slice(5)}`" class="target" v-if="!notarget && log.action.startsWith('account') && permissionsStore.permissions.accounts">{{ log.targetname }}</nuxtLink>

            <div class="time">{{ `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}` }}</div>
        </div>
        </transition>
        <transition>
        <div v-if="extended" class="extendedContent">
            <div class="section">
                <div class="parameter">
                    <p class="key">Użytkownik:</p>
                    <p v-if="log.username == null" class="value">{{ log.user }}</p>
                    <p v-if="log.username != null && !permissionsStore.permissions.accounts" class="value">{{ log.user }} ({{ log.username }})</p>
                    <nuxtLink :href="`/panel/accounts/${log.user}`" v-if="log.username != null && permissionsStore.permissions.accounts" class="value">{{ log.user }} ({{ log.username }})</nuxtLink>
                </div>
                <div class="parameter">
                    <p class="key">Zdarzenie:</p>
                    <p v-if="staticNames.events[log.action]" class="value">{{staticNames.events[log.action][0]}}</p>
                </div>
                <div class="parameter">
                    <p class="key">Cel:</p>
                    <p class="value" v-if="log.target == ''">Brak</p>
                    <p v-if="log.targetname == null" class="value">{{ log.target }}</p>
                    <p v-if="log.targetname != null && (!log.action.startsWith('account') || !permissionsStore.permissions.accounts)" class="value">{{ log.target }} ({{ log.targetname }})</p>
                    <nuxtLink :href="`/panel/accounts/${log.target.slice(5)}`" v-if="log.targetname != null && log.action.startsWith('account') && permissionsStore.permissions.accounts" class="value">{{ log.target }} ({{ log.targetname }})</nuxtLink>
                </div>
            </div>
            <div class="section">
                <div class="parameter">
                    <p class="key">ID zdarzenia:</p>
                    <p class="value">{{ log.id }}</p>
                </div>
                <div class="parameter">
                    <p class="key">Czas:</p>
                    <p class="value">{{ `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')} ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}` }}</p>
                </div>
            </div>
        </div>
        </transition>
        <i @click="extended = !extended" v-if="!extended" class='bx bx-chevron-down arrow'></i>
        <i @click="extended = !extended" v-if="extended" class='bx bx-chevron-up arrow'></i>
    </li>
</template>

<script setup>
    import { staticNames } from '~/data/staticNames';
    const { log, notarget } = defineProps(["log", "notarget"])
    const date = ref(new Date(log.time))
    const extended = ref(false)
    const permissionsStore = usePermissionsStore()
</script>

<style scoped>

    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.2s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

    li {
        flex: 1;
        position: relative;
        display: flex;
        align-items: flex-start;
        background-color: var(--low-contrast);
        height: 4rem;
        min-height: 4rem;
        box-sizing: border-box;
        border-radius: 1rem;
        margin-block: 0.3rem;
        transition: all 0.2s;
        overflow: hidden;
        color: var(--text-main);
        font-size: 1rem;
    }

    .mainContent {
        height: 4rem;
        display: flex;
        align-items: center;
        width: calc(100% - 4rem);
        overflow: hidden;
        position: absolute;
    }

    .icon {
        height: 100%;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }

    .extendedContent {
        height: 10rem;
        display: flex;
        align-items: center;
        width: calc(100% - 4rem);
        position: absolute;
    }

    .extendedContent .section {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding-inline: 2rem;
        justify-content: space-evenly;
    }

    .parameter {
        display: flex;
        align-items: center;
    }

    .key, .value {
        padding: 0;
        margin: 0;
        text-align: center;
        text-decoration: none;
    }

    .key {
        color: var(--intermediate);
        margin-right: 0.8rem;
        font-weight: 500;
    }

    .value {
        color: var(--text-main);
        letter-spacing: 0.05rem;
    }

    .extended {
        height: 10rem;
        min-height: 10rem;
    }
    .arrow {
        position: absolute;
        right: 0;
        font-size: 2rem;
        top: 0;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        aspect-ratio: 1;
        color: var(--intermediate);
        transition-duration: 0.2s;
    }

    .mainContent p {
        margin-inline: 0.5rem;
    }

    .mainContent .user, .mainContent .target {
        color: var(--text-main);
        font-size: 1.2rem;
        transition-duration: 0.2s;
        text-decoration: none;
        margin: 0;
    }

    .mainContent .action {
        transition-duration: 0.2s;
        color: var(--intermediate);
        text-decoration: none;
    }

    .mainContent .time {
        color: var(--intermediate);
        font-size: 0.8rem;
        position: absolute;
        right: 0;
    }

    @media screen and (max-width: 1000px) {
        .target {
            display: none;
        }

        .mainContent .user {
            font-size: 1rem;
            margin: 0;
        }

        .mainContent .action {
            font-size: 0.9rem;
        }

        .mainContent .icon {
            height: 90%;
        }

        .extended {
        height: 15rem;
        min-height: 15rem;
    }

        .extendedContent {
            flex-direction: column;
            justify-content: stretch;
            height: 15rem;
        }
        .extendedContent .section {
            width: 100%;
            padding: 0 0 0 2rem;
        }

        .extendedContent .section:nth-of-type(1) {
            flex: 5;
        }

        .extendedContent .section:nth-of-type(2) {
            border-top: dashed 0.01rem var(--intermediate);
            flex: 2;
        }
    }
</style>