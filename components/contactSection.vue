<template>
    <div class="component">
        <div class="content">
            <div class="left section">
                <h2>{{ $t('mainPage.contact1') }}</h2>
                <a to="mailto:kubapiw15@gmail.com" target="blank" class="box">
                    <div class="top">
                        <i class='bx  bx-envelope'></i> 
                        <div class="description">
                            <p class="platform"></p>
                            <p class="name"></p>
                        </div>
                    </div>
                    <div class="bottom">
                        <p></p>
                    </div>
                    <div class="shadow"></div>
                </a>
            </div>
            <div class="right section">
                <h2>Napisz do mnie</h2>
            </div>
            <div class="separator">
                <p>Albo</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .component {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
    }

    .content {
        width: 80%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
    }

    .separator {
        position: absolute;
        left: 50%;
        top: 0;
        height: calc(100% - 4rem);
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.075rem;
        background-image: linear-gradient(180deg, transparent 0%, var(--low-contrast) 40%, var(--low-contrast) 60%, transparent 100%);
        box-sizing: border-box;
        margin-block: 2rem;
        transition: background-image 0.2s;
    }

    .separator p {
        background-color: var(--bg);
        transition: color 0.2s, background-color 0.2s;
        padding: 0.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-light);
    }

    .section {
        width: 45%;
        height: 20rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
    }

    h2 {
        text-align: left;
        font-size: 2rem;
        transition: color 0.2s;
        color: var(--text-main);
        line-height: 5rem;
    }

    .box {
        width: calc(80%);
        border: solid 0.1rem var(--lower-contrast);
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        box-sizing: border-box;
        padding: 1rem;
    }

    .shadow {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 200%;
        width: 200%;
        background-color: var(--low-contrast);
        mask-image: radial-gradient(circle,rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.0) 100%);
    }
</style>