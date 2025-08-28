<template>
    <div class="component" v-if="!error && channelData.name && channelData.avatar" data-aos="fade">
        <div class="left">
            <a :href="link" class="name" target="_blank">{{ channelData.name || $t('general.nodata') }}</a>
            <div class="platform">
                <i class='bxl  bx-youtube'></i>
                <p>YouTube</p>
            </div>
        </div>
        <img class="img" :src="channelData.avatar" alt="youtube avatar">
    </div>
</template>

<script setup>

const { channelId, link } = defineProps(['channelId', 'link'])

const channelData = ref({
    name: "",
    avatar: ""
})

const config = useRuntimeConfig()
const apiUrl = config.public.api


const { data, error } = await useAsyncData(`channel-${channelId}`, ()=> $fetch(`${apiUrl}/ytChannels?channelId=${channelId}`, {
    method: "GET",
}),
{
    server: false,
    lazy: true
}
)
    
watch(data, ()=>{

if(!error.value){
    channelData.value.name = data.value?.name
    channelData.value.avatar = data.value?.avatar
}

}, {deep: true})

</script>

<style lang="scss" scoped>

.component_error {
    display: none;
}

.component {
    width: calc(100% / 3 - 2rem);
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    background-color: var(--low-contrast-15);
    margin: 1rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding: 1rem;
    border: solid 0.1rem transparent;
    transition: background-color 0.2s, border 0.2s, opacity 0.5s !important;
    position: relative;

}

.component:hover {
    background-color: transparent;
    border: solid 0.1rem var(--low-contrast-30);
}


.left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.img {
    border-radius: 50%;
    height: 6rem;
    transition: box-shadow 0.2s;
    background-color: var(--low-contrast);
    aspect-ratio: 1;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.name {
    color: var(--text-main);
    transition: color 0.2s;
    font-weight: 500;
    font-size: 1.2rem;
    text-decoration: none;
}


html.light .img {
    box-shadow: 0 0 5rem var(--low-contrast-30);
}

.platform {
    display: flex;
    align-items: center;
        position: absolute;
        bottom: 1rem;

    i {
        color: var(--yt);
        transition: color 0.2s;
        font-size: 1.3rem;
    }
    
    p {
        color: var(--text-light);
        transition: color 0.2s;
        font-size: 0.8rem;
        margin: 0 0 0 0.3rem;
    }
}

@media screen and (max-width: 1000px){
    .component {
        width: calc(100% / 2 - 1rem);
        margin: 0.5rem;
    }

    .img {
        height: 5rem;
        margin-block: 0.5rem;
    }
}

</style>