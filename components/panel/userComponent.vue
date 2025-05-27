<template>
    <li>
        <div class="info">
            <i class='bx bxs-user-circle'
            :style="`color: ${pgroup.color};`"
            ></i>
            <p class="username p">{{ account.username }}</p>
            <p class="id p">ID: {{ account.id }}</p>
            <p v-if="account.lastlogin" class="p login">Ostatnie logowanie: {{ `${String(lastLogin.getHours()).padStart(2, '0')}:${String(lastLogin.getMinutes()).padStart(2, '0')} ${String(lastLogin.getDate()).padStart(2, '0')}-${String(lastLogin.getMonth() + 1).padStart(2, '0')}-${lastLogin.getFullYear()}` }}</p>
        </div>
        <div class="permissions">
            <p class="label">Grupa uprawnień:</p>
            <p class="groupname" @click="
            modalStore.addModal({
                type: 'group',
                color: pgroup.color,
                pgroup: account.pgroup
            })
            ">{{ pgroup.groupname }}</p>
            <NuxtLink class="edit" :to="`/panel/accounts/${account.id}`"><p>Szczegóły</p> <i class='bx bxs-user-rectangle'></i></NuxtLink>
        </div>
    </li>
</template>

<script setup>

    const modalStore = useModalStore();
    const groupsStore = useGroupsStore()
    const { account } = defineProps(["account"])
    
    const pgroup = groupsStore.groups.find(e => e.id == account.pgroup)

    const lastLogin = computed(() => {
        return new Date(account.lastlogin);
    })
</script>

<style scoped>
li {
    background-color: var(--low-contrast);
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}

.info {
    display: flex;
    align-items: center;
    position: relative;
}

.info .p {
    margin: 0 0.5rem;
    font-size: 1.2rem;
}

.info i {
    font-size: 3rem;
    color: var(--intermediate);
    margin-right: 0.5rem;
}

.info .username {
    color: var(--text-main);
    font-weight: 500;
    text-decoration: none;
}

.info .id {
    color: var(--intermediate);
}

.info .login {
    font-size: 1rem;
    color: var(--text-light);
    position: absolute;
    right: 0;
}

.permissions {
    display: flex;
    align-items: center;
    position: relative;
}

.permissions p {
    font-size: 1rem;
    color: var(--text-light);
    margin-inline: 0.2rem;
}

.permissions .groupname {
    font-size: 1rem;
    font-size: bold;
    padding: 0.75rem 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--higher-contrast);
    cursor: pointer;
    transition-duration: 0.2rem;
    color: var(--text-main);
}

.edit {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    text-decoration: none;
    border: 0.15rem solid var(--higher-contrast);
    background-color: var(--higher-contrast);
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition-duration: 0.2s;
}

.edit:hover {
    background-color: transparent;
}

.edit p {
    margin: 0;
    color: var(--text-main);
    font-size: 1rem;
    margin-right: 0.2rem;
}

.edit i {
    font-size: 1.5rem;
    color: var(--text-light);
}

@media screen and (max-width: 1000px){
    .permissions .label, .login {
        display: none;
    }
}
</style>