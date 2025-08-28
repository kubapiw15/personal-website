<template>
    <div class="contactForm">
        <div class="bg"></div>
        <form @submit.prevent="formHandler()" class="content" :class="{shown: status == 'form'}">
            <div class="inputContainer" data-aos="fade">
                <div class="inputBox" :class="{inputBox_active: completed.contact}">
                    <label for="contact">{{ $t('mainPage.contact6') }}</label>
                    <input id="contact" autocomplete="email" v-model="formData.contact">
                </div>
            </div>
            <div class="inputContainer" data-aos="fade">
                <div class="inputBox" :class="{inputBox_active: completed.subject}">
                    <label for="subject">{{ $t('mainPage.contact7') }}</label>
                    <input id="subject" v-model="formData.subject">
                </div>
            </div>
            <div class="inputContainer" data-aos="fade">
                <div class="inputBox messageBox" :class="{inputBox_active: completed.message}">
                    <label for="message">{{ $t('mainPage.contact8') }}</label>
                    <textarea  id="message" v-model="formData.message"></textarea>
                </div>
            </div>
            <div class="accept" data-aos="fade">
                <CheckBox v-model="formData.accept"></CheckBox>
                <p>{{ $t('general.pp1') }}<nuxt-link class="link" target="_blank" :to="$localePath('/privacy-policy')">{{ $t('general.pp2') }}</nuxt-link>{{ $t('general.pp3') }}</p>
            </div>
            <div class="inputContainer" data-aos="fade">
            <button class="inputBox submit" subject="submit" :class="{submit_active: Object.values(completed).every(e => e == true)}">{{ $t('mainPage.contact9') }}</button>
            </div>
        </form>
        <div class="sent" :class="{shown: status == 'sent'}">
            <div class="iconBox">
                <i class='i1 bx  bx-check-circle'  ></i> 
            </div>
            <p class="title">{{ $t('mainPage.contact10') }}</p>
            <p class="subtitle">{{ $t('mainPage.contact11') }}</p>
        </div>
        <div class="error" :class="{shown: status == 'error'}">
            <div class="iconBox">
                <i class='i1 bx  bx-x-circle'  ></i> 
            </div>
            <p class="title">{{ $t('mainPage.contact12') }}</p>
            <button @click="reset()" class="tryagain">{{ $t('mainPage.contact13') }}</button>
        </div>
        <div class="pending" :class="{shown: status == 'pending'}">
            <div class="animationBox">
                <i class='bx  bx-loader-dots'  ></i> 
            </div>
        </div>
    </div>
    <!-- TODO działanie formularza -->
     <!-- TODO walidacja e-maila -->
</template>

<script setup>

const status = ref("form")

const formData = ref({
    contact: "",
    subject: "",
    message: "",
    accept: false
})

const completed = ref({
    contact: false,
    subject: false,
    message: false,
    accept: false
})

watchEffect(()=>{
    completed.value = {
    contact: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.contact),
    subject: formData.value.subject != "",
    message: formData.value.message != "",
    accept: formData.value.accept
}
})

const config = useRuntimeConfig()
const apiUrl = config.public.api

const formHandler = async () => {
    if(Object.values(completed.value).every(e => e)){
            status.value = 'pending'
            setTimeout(async () => {
                try {
                    const response = await $fetch(`${apiUrl}/messages`, {
                        method: "POST",
                        body: formData.value
                    })

                    console.log(response)
                    status.value = 'sent'
                } catch(err){
                    console.error(err)
                    status.value = 'error'
                }
                
            }, 500);
    }
}

const reset = () => {

            formData.value = {
                contact: "",
                subject: "",
                message: ""
            }
            status.value = 'form'

}

</script>

<style lang="scss" scoped>

.contactForm {
    height: 100%;
    width: 90%;
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
    overflow: hidden;
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


.sent, .error, .pending, .content {
    transition: opacity 0.2s;

}

.sent, .error, .pending {
    width: calc(100% - 6rem);
    height: calc(100% - 5rem);
    position: absolute;
    pointer-events: none;
    opacity: 0;
    z-index: 5;
}

.sent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    i {
        font-size: 6rem;
    margin-bottom: 2rem;
    }

    .title {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-main);
        text-align: center;
        transition: color 0.2s;
    }

    .subtitle {
        font-size: 1.1rem;
        color: var(--text-lighter);
        text-align: center;
        width: calc(100% - 2rem);
        transition: color 0.2s;
    }

    .iconBox {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .i1 {
            color: var(--additive2);
            transition: color 0.2s;
        }
    }

}

.error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    i {
        font-size: 6rem;
    margin-bottom: 2rem;
    }

    .title {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-main);
        text-align: center;
        transition: color 0.2s;
    }

    .tryagain {
        font-size: 1rem;
        border: solid 0.1rem transparent;
        background-color: var(--low-contrast-30);
        color: var(--text-lighter);
        transition: color 0.2s, background-color 0.2s, border 0.2s;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .tryagain:hover {
        background-color: transparent;
        border: solid 0.1rem var(--low-contrast-30);
    }

    .iconBox {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .i1 {
            color: var(--red);
            transition: color 0.2s;
        }
    }

}

.pending {
    display: flex;
    justify-content: center;
    align-items: center;
    .animationBox {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: loading1 linear 3s infinite;

        i {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--low-contrast-30);
            font-size: 4rem;
            animation: loading2 ease-in-out 3s infinite;
        }
    }
}

@keyframes loading1 {
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg
    }
}

@keyframes loading2 {
    0% {
        rotate: 0deg;
    }

    70%, 100% {
        rotate: 360deg;
    }
}

.accept {
    display: flex;
    align-items: center;

    p {
        color: var(--text-light);
        font-size: 0.8rem;

        .link {
            color: var(--text-lighter);
        }
    }
}

.checkBox {
    margin-right: 1rem;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    pointer-events: none;
    opacity: 0;
    z-index: 5;
}

.shown {
    opacity: 1;
    pointer-events: all;
}

.inputBox {
    border: solid 0.1rem var(--low-contrast);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    margin-block: 0.5rem;
    transition: border 0.2s, opacity 0.5s, background-color 0.2s;
    overflow: hidden;
    z-index: 2;
}

.submit {
    background-color: transparent;
    color: var(--text-light);
    font-size: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: color 0.2s, border 0.2s, background-color 0.2s, opacity 0.5s !important;
    background-color: var(--bg-light);
    font-weight: 600;
    pointer-events: none;
    width: 100%;
}

.submit:hover {
    background-color: var(--bg);
}

.shown .submit_active {
    color: var(--text-main);
    pointer-events: all;
}

.inputBox_active {
    border: solid 0.1rem var(--additive2);

    & label {
        opacity: 0.3;
    }
}

.inputContainer {
    z-index: 2;
}

label {
    color: var(--text-main);
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1rem;
    transition: color 0.2s, opacity 0.2s;
}

input, textarea {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0rem 1rem 1rem 1rem;
    flex: 1;
    font-size: 0.9rem;
    color: var(--text-lighter);
    transition: color 0.2s;
    font-family: inherit;
    resize: none;

}

    input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-text-fill-color: var(--text-lighter) !important;
    -webkit-background-clip: text;
}

.messageBox {
    flex: 1;
    min-height: 15rem;
}

@media screen and (max-width: 1000px){
    .contactForm {
        padding: 0;
        width: 100%;
        background-color: transparent;
    }

    .sent, .pending, .error {
        width: 100%;
    }

    .inputBox {
        background-color: var(--bg-light);
    }

    .bg {
        background-color: transparent;
    }
}


</style>