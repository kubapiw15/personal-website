<template>
    <div class="component">
        <div class="content">
            <ProjectsPageTile
            color="rgb(58, 97, 226)"
            :purpose="$t('projectsPage.purpose.training')"
            purposeIcon="bx  bx-book-bookmark"
            name="ScrollMotion"
            logoSrc="/img/logo-scrollmotion.svg"
            link="https://scrollmotion.kubapiw.dev"
            linkDesc="scrollmotion.kubapiw.dev"
            :description="$t('projectsPage.scrollmotion')"
            :lighthouse="[97, 100, 100]"
            :technologies="['nuxtjs', 'scrollmotion', 'googlefonts', 'boxicons']"
            ></ProjectsPageTile>
            <ProjectsPageTile
            color="#00a0e4"
            :purpose="$t('projectsPage.purpose.optimization')"
            purposeIcon="bx  bx-spanner"
            name="VRV Report"
            logoSrc=""
            link="https://daikin.pl/"
            :linkDesc="`${$t('projectsPage.madefor')} Daikin Airconditioning Poland`"
            :description="$t('projectsPage.vrvreport')"
            :lighthouse="``"
            :technologies="['nuxtjs', 'googlefonts', 'boxicons', 'vitepwa', 'pinia', 'tailwind', 'pdfmake']"
            ></ProjectsPageTile>
            <ProjectsPageTile
            color="#ffa500"
            :purpose="$t('projectsPage.purpose.branding')"
            purposeIcon="bx  bx-megaphone"
            name="kubapiw.dev"
            logoSrc="/img/logo.svg"
            link="https://kubapiw.dev/"
            :linkDesc="$t('projectsPage.personal')"
            :description="$t('projectsPage.personalWebsite')"
            :lighthouse="[99, 100, 100]"
            :technologies="['nuxtjs', 'googlefonts', 'boxicons', 'aosjs', 'i18n']"
            ></ProjectsPageTile>
            <!-- TODO zaktualizować lighthouse -->
        </div>
    </div>
</template>

<script setup>
import { ProjectsPageTile } from '#components';


</script>

<style lang="scss" scoped>

.component {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 0.1rem var(--low-contrast-30);
    margin-top: 2rem;
}

.content {
    width: 70%;
    padding-block: 5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

@media screen and (max-width: 1400px) {
    .content {
        width: 90%;
    }
}

@media screen and (max-width: 1000px) {
    .content {
        width: 95%;
        max-width: 600px;
    }
}

</style>