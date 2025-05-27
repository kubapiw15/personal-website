export default async ()=>{
    const data = ref()
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiUrl
    const permissionsStore = usePermissionsStore()
    const groupsStore = useGroupsStore()
    try {
        
        const userData = ref()
        data.value = await $fetch(`${apiUrl}/panel/getUser.php`, {
            method: "GET",
            credentials: 'include'
        })
        if(data.value['id'] == ''){
            navigateTo('/login')
            return;
        } 
        permissionsStore.setPermissions(data.value['perms'])
        userData.value = data.value
        let formData = new FormData()
        formData.append("id", '')
        data.value = await $fetch(`${apiUrl}/panel/getGroup.php`, {
            credentials: 'include',
            method: "POST",
            body: formData
        })
        groupsStore.setGroups(data.value)
        return userData
    } catch(e){
        console.error(e)
        navigateTo('/login')
    }
}