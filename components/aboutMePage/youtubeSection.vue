<template>
    <div class="section">
        <div class="content">
        <h2 data-aos="fade">{{ $t('aboutmePage.resources') }}</h2>

            <div class="category">

                <h3 data-aos="fade">{{ $t('aboutmePage.resources2') }}</h3>
            </div>
            
            <div class="tileContainer">
                <AboutMePageYouTubeTile
                v-for="item in youtubeList"
                :key="item[0]"
                :channelId="item[0]"
                :link="item[1]"
                ></AboutMePageYouTubeTile>
            </div>


            <div class="category">

                <h3 data-aos="fade">{{ $t('aboutmePage.resources3') }}</h3>
            </div>
            <div class="tileContainer">
                <AboutMePageWebsiteTile
                v-for="item in websiteList"
                :key="item[0]"
                :name="item[0]"
                :link="item[1]"
                :img="item[2]"
                :type="item[3]"
                ></AboutMePageWebsiteTile>
            </div>
        </div>
    </div>
</template>

<script setup>

const youtubeList = [
    ['UCq8XmOMtrUCb8FcFHQEd8_g','https://www.youtube.com/@helloroman'],
    ['UCzyuZJ8zZ-Lhfnz41DG5qLw','https://www.youtube.com/@Dani_Krossing'],
    ['UCW5YeuERMmlnqo4oq8vwUpg', 'https://www.youtube.com/@NetNinja'],
    ['UCX189tVw5L1E0uRpzJgj8mQ', 'https://www.youtube.com/@DevMentorsPL'],
    ['UCgmcPHueYRarnCkihtNIRlw', 'https://www.youtube.com/@LearnVue'],
    ['UCsBjURrPoezykLs9EqgamOA', 'https://www.youtube.com/@Fireship'],
    ['UCjWhpxUc0R1yQTK360nZNqw', 'https://www.youtube.com/@whosajid'],
    ['UCbRP3c757lWg9M-U7TyEkXA', 'https://www.youtube.com/@t3dotgg'],
]

const websiteList = [
    ['Roadmap.sh', 'https://roadmap.sh/', '/img/icons/roadmap.svg', 'resources'],
    ['Nuxt.js Docs', 'https://nuxt.com/docs/4.x/getting-started/introduction', '/img/icons/nuxt.svg', 'documentation'],
    ['W3Schools', 'https://www.w3schools.com/', '/img/icons/w3schools.svg', 'documentation']
]

</script>

<style lang="scss" scoped>

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 2rem 4rem;
}

.content {
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

    h2 {
        color: var(--text-main);
        transition: color 0.2s, opacity 0.5s !important;
        font-size: 2rem;
        margin-block: 3rem;
        font-weight: 600;
    }

    .category {
        width: 100%;
        margin-left: 4rem;
        box-sizing: border-box;

        h3 {
            margin-top: 3rem;
            font-weight: 500;
            font-size: 1.3rem;
            color: var(--text-lighter);
            transition: color 0.2s;
        }
    }



.tileContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

@media screen and (max-width: 1400px){
    .content {
        width: 90%;
    }
}

@media screen and (max-width: 1000px){
    .content {
        width: calc(90% + 2rem);
    }
}
</style>