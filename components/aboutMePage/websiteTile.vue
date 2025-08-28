<template>
    <div class="component" data-aos="fade">
        <div class="left">
            <a :href="link" class="name" target="_blank">{{ name }}</a>
            <div class="platform">
                <i class='bx  bx-link'  ></i> 
                <p>{{ $t(`aboutmePage.types.${type}`) }}</p>
            </div>
        </div>
        <NuxtImg alt="website icon" class="img" :src="img"></NuxtImg>
    </div>
</template>

<script setup>

const { name, link, img, type } = defineProps(['name', 'link', 'img', 'type'])

</script>

<style lang="scss" scoped>

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
        color: var(--blue);
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