<template>
    <li :class="{expired: expiration < new Date()}">
        <div class="container left">
            <i class='bx bxs-key icon'></i>
            <p class="code">{{ code.code }}</p>
            <!-- {{ code }} -->
            <i class='bx bxs-copy copy' @click="copy()" v-if="expiration >= new Date()"></i>
        </div>
        <div class="container right">
            <div class="column">
                <p class="pgroup">Uprawnienia:  <span :style="`background-color: ${pgroup.color};`">{{ pgroup['groupname'] }}</span></p>
                <p v-if="expiration >= new Date()" class="expiration">Wygasa: {{ `${String(expiration.getHours()).padStart(2, '0')}:${String(expiration.getMinutes()).padStart(2, '0')} ${String(expiration.getDate()).padStart(2, '0')}-${String(expiration.getMonth() + 1).padStart(2, '0')}-${expiration.getFullYear()}` }}</p>
                <p v-else class="expiration">KLUCZ WYGASŁ</p>
            </div>
            <div class="delete" @click="deleteHandle()" @mouseleave="deleteSafety = false">
                <i class='bx bx-trash'></i>
                <div class="relative">
                    <p :class="{show: !deleteSafety}">Usuń klucz</p>
                    <p :class="{show: deleteSafety}">Na pewno?</p>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup>


const { code } = defineProps(['code'])
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl
const notificationStore = useNotificationStore()
const groupsStore = useGroupsStore()

const emit = defineEmits(['update'])

function copy(){
    navigator.clipboard.writeText(code.code);
    notificationStore.addNotification("Skopiowano do schowka.", "success")
}

const deleteSafety = ref(false)

async function deleteHandle(){
    if(!deleteSafety.value){
        deleteSafety.value = true
    } else {
        const data = ref();
        let formData = new FormData()
        formData.append("id", code.id)
        data.value = await $fetch(`${apiUrl}/panel/deleteRegistrationCode.php`, {
            method: "POST",
            credentials: 'include',
            body: formData
        })
        if(data.value == 'no_permission'){
            navigateTo("/panel")
            notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
        } else if(data.value.success){
            emit('update')
        } else {
            notificationStore.addNotification("Wystąpił błąd.", "error")
            console.error(data.value)
            navigateTo("/panel")
        }
    }
}

const expiration = computed(()=>{
    return new Date(code.expiration)
})

const pgroup = computed(()=>{
    return groupsStore.groups.find(e => e.id == code.pgroup)
})

</script>

<style scoped>
    li {
        flex: 1;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        margin-block: 0.3rem;
        border-radius: 1rem;
        background-color: var(--bg-lighter);
        box-sizing: border-box;
        overflow: hidden;
        transition: background-color 0.2s;
    }

    .container {
        display: flex;
    }

    .container.left {
        align-items: center;
    }

    .container.right {
        justify-content: flex-end;
        flex: 1;
    }

    .container.right .column {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 1rem;
    }

    .icon {
        font-size: 3rem;
        color: var(--intermediate);
        margin-inline: 1rem;
        color: rgb(32, 135, 219);
    }

    .code {
        background-color: var(--bg-main);
        color: var(--text-light);
        padding-block: 0.8rem;
        border-radius: 0.5rem;
        width: 9rem;
        text-align: center;
        user-select: all;
        margin-right: 1rem;
        position: relative;
        overflow: hidden;
        font-size: 1.2rem;
        font-family: 'fira code', monospace;
    }

    .expired .code {
        color: var(--intermediate);
    }

    .code::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: var(--bg-main);
    }

    .expired .code::after {
        display: none;
    }

    .code:hover::after {
        display: none;
    }

    .copy {
        font-size: 2rem;
        color: var(--higher-contrast);
        cursor: pointer;
        transition: color 0.2s;
    }

    .copy:hover {
        color: var(--intermediate);
    }

    .expired .icon {
        color: rgb(224, 60, 60);
    }

    .delete {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-inline: 1rem;
        height: 100%;
        background-color: rgba(221, 48, 48, 0.3);
        color: rgb(245, 59, 59);
        cursor: pointer;
    }

    .delete i {
        font-size: 1.6rem;
        transition-duration: 0.1s;
    }

    .delete:hover i {
        transform: scale(1.2);
    }

    .delete p {
        font-weight: 600;
        margin: 0;
        margin-top: 0.5rem;
        opacity: 0;
    }

    .delete p:nth-of-type(1){
        position: absolute;
    }

    .relative {
        display: flex;
        position: relative;
    }

    .show {
        opacity: 1 !important;
        pointer-events: all !important;
    }

    .pgroup {
        color: var(--intermediate);
    }

    .pgroup span {
        color: var(--bg-main);
        font-weight: 600;
        padding: 0.2rem 1rem;
        border-radius: 10rem;
    }

    .expiration {
        color: var(--intermediate);
    }

    .expired .expiration {
        color: rgb(245, 59, 59);
    }

    @media screen and (max-width: 1000px){
        li {
            flex-direction: column;
        }
        .container {
            width: 100%;
        }

        .container.right {
            justify-content: space-between;
        }

        .container.right .column {
            align-items: flex-start;
            margin-right: 0;
            margin-left: 0.5rem;
        }
        .column p {
            margin: 0;
        }
        .delete {
            border-top-left-radius: 1rem;
            padding: 1rem;
            height: auto;
        }
        .delete p {
            font-size: 0.9rem;
        }
        .delete i {
            font-size: 1.2rem;
        }
    }

</style>