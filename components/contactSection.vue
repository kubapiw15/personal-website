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
        width: 70%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
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
</style>