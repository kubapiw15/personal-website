<template>
    <div class="modal" :style="`background-color: ${modal.data.color};`"
    >
        <div class="content"
        v-if="modal.data.type == 'group'"
        >
            <h3>Szczegóły grupy: {{ pgroup.groupname }}</h3>
            <div class="details">
                <div v-for="permission in Object.keys(pgroup.permissions).filter(e => e != 'main')" class="row">
                    <p>{{ staticNames.permissions[permission][0] }}</p>
                    <i v-if="pgroup.permissions[permission] == 1" class='bx bx-check'></i>
                    <i v-else class='bx bx-x'></i>
                </div>
                
            </div>
        </div>

        <button :style="`color: ${modal.data.color};`" @click="modalStore.resetModals()">Rozumiem!</button>
    </div>
</template>

<script setup>
import { staticNames } from '~/data/staticNames';

    const modalStore = useModalStore();
    const groupsStore = useGroupsStore();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;

    const { modal } = defineProps(["modal"]);
    const pgroup = groupsStore.groups.find(e => e.id == modal.data.pgroup)

    if(modal.data.type == 'group'){
        let formData = new FormData();
        formData.append('id', modal.data.pgroup);
        const data = ref()
        data.value = await useFetch(`${apiUrl}/panel/getGroup.php`, {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        pgroup.value = data.value.data[0];
    }
</script>

<style scoped>
    .modal {
        height: 23rem;
        width: 40rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: center;
        box-shadow: 0 0 5rem rgba(0, 0, 0, 0.3);
        background-color: rgb(122, 122, 122);
    }

    .content {
        width: 100%;
        flex: 1;
        box-sizing: border-box;
        padding: 1rem 2rem;
        display: flex;
        justify-content: stretch;
        flex-direction: column;
    }

    .details {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        flex: 1;
    }

    .details p {
        font-size: 1.1rem;
        margin: 0;
        margin-right: 0.5rem;
        color: var(--bg-main);
    }

    .details i {
        font-size: 1.5rem;
        color: var(--bg-main);
    }

    h3 {
        font-weight: 400;
        color: var(--bg-main);
        font-size: 1.5rem;
    }

    button {
        background-color: var(--bg-darker);
        font-size: 1.3rem;
        padding: 1rem 3rem;
        border-radius: 0.5rem;
        margin: 1rem;
        border: none;
        font-weight: 500;
        letter-spacing: 0.05rem;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    button:hover {
        padding: 1rem 3.5rem;
    }

    .row {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 1000px){
        .modal {
            width: calc(100% - 2rem);
        }
    }
</style>