<template>
    <div class="contactForm">
        <div class="bg"></div>
        <div class="content">
            <div class="inputBox" data-aos="fade">
                <label for="contact">{{ $t('mainPage.contact6') }}</label>
                <input id="contact" v-model="formData.contact">
            </div>
            <div class="inputBox" data-aos="fade">
                <label for="type">{{ $t('mainPage.contact7') }}</label>
                <input id="type" v-model="formData.type">
            </div>
            <div class="inputBox messageBox" data-aos="fade">
                <label for="message">{{ $t('mainPage.contact8') }}</label>
                <textarea  id="message" v-model="formData.message"></textarea>
            </div>
            <button class="inputBox submit" data-aos="fade">Prześlij</button>
        </div>
    </div>
</template>

<script setup>

const formData = ref({
    contact: "",
    type: "",
    message: ""
})

</script>

<style lang="scss" scoped>

.contactForm {
    height: 100%;
    width: 80%;
    background-color: var(--bg-light);
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    border-radius: 1rem;
    position: relative;
    flex-direction: column;
    padding: 2.5rem 3rem;
    transition: background-color 0.2s;
    box-sizing: border-box;
    z-index: 1;
}

.bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--bg);
    mask-image: url('/public/img/bg/topography.svg');
    mask-repeat: no-repeat;
    transition: background-color 0.2s;
    z-index: 1;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    flex: 1;
}

.inputBox {
    border: solid 0.1rem var(--low-contrast);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    margin-block: 0.5rem;
    transition: border 0.2s, opacity 0.5s;
    overflow: hidden;
    z-index: 2;
}

.submit {
    background-color: transparent;
    color: var(--text-main);
    font-size: 1.1rem;
    padding: 1rem;
    cursor: pointer;
    transition: color 0.2s, border 0.2s, background-color 0.2s, opacity 0.5s !important;
    background-color: var(--bg-light);
    font-weight: 500;
}

.submit:hover {
    background-color: var(--bg);
}

.inputBox_active {
    border: solid 0.1rem var(--additive);
}

label {
    color: var(--text-main);
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1rem;
    transition: color 0.2s;
}

input, textarea {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0rem 1rem 1rem 1rem;
    flex: 1;
    font-size: 0.9rem;
    color: var(--text-dark);
    transition: color 0.2s;
    font-family: inherit;
    resize: none;

}

.messageBox {
    flex: 1;
    min-height: 15rem;
}

@media screen and (max-width: 1000px){
    .contactForm {
        padding: 1.5rem 2rem;
        width: 100%;
    }
}


</style>