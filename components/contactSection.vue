<template>
    <div class="component">
        <div class="content">
            <div class="left section">
                <h2>{{ $t('mainPage.contact1') }}</h2>
                <div class="box">
                    <i></i>
                    <a class="link" to="mailto:kubapiw15@gmail.com" target="blank"></a>
                </div>
            </div>
            <div class="right section">

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
    }

    .section {
        width: 50%;
    }

    .left {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        box-sizing: border-box;
        padding-left: 1rem;
    }

    h2 {
        text-align: left;
        font-size: 2.5rem;
        transition: color 0.2s;
        color: var(--text-main);
        line-height: 5rem;
    }
</style>