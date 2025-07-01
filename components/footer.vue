<template>
    <div class="footer">
        <div class="content">
            <div class="left section">
                <div class="column">
                    <p class="title">{{ $t('footer.title1') }}</p>
                    <div class="links">
                        <NuxtLink class="link" :to="$localePath('/')">{{ $t('mainPage.navbar0') }}</NuxtLink>
                        <NuxtLink class="link" :to="''">{{ $t('mainPage.navbar1') }}</NuxtLink>
                        <NuxtLink class="link" :to="''">{{ $t('mainPage.navbar2') }}</NuxtLink>
                        <NuxtLink class="link" :to="''">{{ $t('mainPage.navbar3') }}</NuxtLink>
                        <NuxtLink class="link" :to="$localePath('/tools')">{{ $t('mainPage.navbar4') }}</NuxtLink>
                        <NuxtLink class="link" :to="''">{{ $t('mainPage.navbar5') }}</NuxtLink>
                    </div>
                </div>
                <div class="column">
                    <p class="title">{{ $t('footer.title3') }}</p>
                    <div class="links">
                        <a class="link" href="https://github.com/kubapiw15" target="_blank">GitHub</a>
                        <a class="link" href="https://www.npmjs.com/~kubapiw15" target="_blank">NPM</a>
                    </div>
                </div>
                <div class="column">
                    <p class="title">{{ $t('footer.title2') }}</p>
                    <div class="links">
                        <NuxtLink class="link" :to="''">{{ $t('footer.legal2') }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="right section">
                <div class="box">
                    <h2 class="name">{{ domain }}</h2>
                    <div class="logo"></div>
                </div>
                <p class="copyright">{{ $t('footer.copyright') }}</p>
            </div>
        </div>
        
    </div>
</template>

<script setup>

const { domain } = useRuntimeConfig().public

</script>

<style scoped>
    .footer {
        border-top: solid 0.1rem var(--low-contrast-30);
        height: max-content;
        width: 100vw;
        overflow: hidden;
        background-color: var(--bg);
        box-sizing: border-box;
        transition: border-top 0.2s, background-color 0.2s;
        display: flex;
        justify-content: center;
    }

    .content {
        width: 70%;
        height: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        box-sizing: border-box;
        padding-block: 2rem;
    }

    .section {
        display: flex;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: max-content;
        margin-inline: 1rem;
    }

    .links {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: stretch;
    }

    .link, .title {
        margin-block: 0.1rem;
    }

    .title {
        font-weight: 600;
        font-size: 1.3rem;
        margin: 0 0 0.5rem 0;
        color: var(--text-main);
        padding: 0.8rem;
        transition: color 0.2s;
    }

    .link {
        font-weight: 400;
        text-decoration: none;
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
        cursor: pointer;
        color: var(--text-lighter);
        border-radius: 0.5rem;
        transition: color 0.2s, background-color 0.2s;
    }

    .link:hover {
        background-color: var(--low-contrast-15);
    }

    .right {
        justify-content: flex-end;
        align-items: center;
        position: relative;
    }

    .box {
        display: flex;
        align-items: center;
    }

    .name {
        color: var(--text-lighter);
        transition: color 0.2s;
        font-weight: 300;
        font-size: 1.4rem;
        margin-right: 1rem;
    }

    .logo {
        -webkit-mask: url('/img/logo.svg') no-repeat center;
        mask: url('/img/logo.svg') no-repeat center;
        background-color: var(--additive);
        height: 4rem;
        width: 4rem;
        transition: background-color 0.2s;
    }

    .copyright {
        position: absolute;
        bottom: 0;
        white-space: nowrap;
        width: max-content;
        font-size: 0.9rem;
        color: var(--text-lighter);
        margin: 0;
        transition: color 0.2s;
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }
    }

    @media screen and (max-width: 1000px){
        .content {
            width: 95%;
            flex-direction: column;
            max-width: 600px;
        }

        .left {
            flex-direction: column;
        }

        .title {
            font-size: 1.5rem;
            margin: 0;
        }

        .column {
            width: calc(100% - 2rem);
            margin-bottom: 2rem;
        }

        .links {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .link {
            width: calc(50% - 2rem);
            margin-inline: 0.2rem;
            font-size: 1rem;
        }

        .right {
            justify-content: center;
            align-items: center;
        }

        .box {
            padding-block: 3rem 6rem;
        }
    }

</style>