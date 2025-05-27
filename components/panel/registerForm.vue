<template>
    <div class="container">
        <form action="" class="registerForm" @submit.prevent="handleSubmit()" >
            <h2>Rejestracja</h2>
            <div class="username row" :class="
            {username_empty: errors.username == 'empty'}, 
            {username_exists: errors.username == 'exists'}, 
            {username_invalid: errors.username == 'invalid'}">
                <div class="iconbox">
                    <i class='bx bx-user show' ></i>
                    <i :class="{show: /^[a-zA-Z0-9_.-]{5,20}$/.test(registerData.username)}" class='bx bxs-user' ></i>
                </div>
                <input type="text" placeholder="Nazwa użytkownka" v-model="registerData.username" autocomplete="username" name="username" maxlength="20" @input="errors.username = ''">
            </div>
            <div class="password row" :class="
            {password_empty: errors.password == 'empty'}, 
            {password_invalid: errors.password == 'invalid'}">
                <div class="iconbox">
                    <i class='bx bx-lock-alt show' ></i>
                    <i :class="{show: /^.{7,100}$/.test(registerData.password)}" class='bx bxs-lock-alt' ></i>
                </div>
                <input type="password" placeholder="Hasło" v-model="registerData.password" autocomplete="new-password" name="password" @input="errors.password = ''">
            </div>
            <div class="password2 row" :class="
            {password_empty: errors.password2 == 'empty'}, 
            {password_nomatch: errors.password2 == 'nomatch'}, 
            {password_invalid: errors.password2 == 'invalid'}">
                <div class="iconbox">
                    <i class='bx bx-lock show'></i>
                    <i :class="{show: /^.{7,100}$/.test(registerData.password2)  && registerData.password2 == registerData.password}" class='bx bxs-lock-alt'></i>
                </div>
                <input type="password" placeholder="Powtórz hasło" v-model="registerData.password2" autocomplete="new-password" name="password" @input="errors.password2 = ''">
            </div>
            <div class="key row" :class="
            {key_empty: errors.key == 'empty'}, 
            {key_notfound: errors.key == 'notfound'}, 
            {key_invalid: errors.key == 'invalid'}">
                <div class="iconbox">
                    <i class='bx bx-key show'></i>
                    <!-- /^[0-9A-Fa-f]{8}$/ -->
                </div>
                <input type="key" placeholder="Klucz rejestracyjny" v-model="registerData.key" autocomplete="one-time-code" name="key" maxlength="8" @input="errors.key = ''">
            </div>
            <input type="submit" class="submit" value="Zarejestruj konto">
            <div class="switchButton">
                <p>Masz już konto?</p>
                <button type="button" class="b2" @click="switchPage()">Wróć do logowania</button>
            </div>
        </form>
    </div>
</template>

<script setup>

    const emit = defineEmits(['switchPage'])

    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl

    const registerData = ref({
                    username: "",
                    password: "",
                    password2: "",
                    key: ""
                })

    const errors = ref({
                    username: "",
                    password: "",
                    password2: "",
                    key: ""
                })


            async function handleSubmit(){
                errors.value = {
                    username: '',
                    password: '',
                    password2: '',
                    key: ''
                }
                if(registerData.value.username.length == 0){
                    errors.value.username = 'empty'
                } else if(!/^[a-zA-Z0-9_.-]{5,20}$/.test(registerData.value.username)){
                    errors.value.username = 'invalid'
                }

                if(registerData.value.password.length == 0){
                    errors.value.password = 'empty'
                } else if(!/^.{7,100}$/.test(registerData.value.password)){
                    errors.value.password = 'invalid'
                }

                if(registerData.value.password != registerData.value.password2) {
                    errors.value.password2 = 'nomatch'
                }
                if(registerData.value.key.length == 0){
                    errors.value.key = 'empty'
                } else if(!/^[0-9A-Fa-f]{8}$/.test(registerData.value.key)){
                    errors.value.key = 'invalid'
                }
                if (Object.values(errors.value).every(e => e === '' || e === null)) {
                    const data = ref();
                    let formData = new FormData();
                    Object.keys(registerData.value).forEach(element => {
                        formData.append(element, registerData.value[element])
                    });
                    console.log(formData.get("key"))
                    data.value = await $fetch(`${apiUrl}/panel/register.php`, {
                        method: "POST",
                        credentials: "include",
                        body: formData
                    })
                    console.log(data.value)
                    if(data.value === 'success'){
                        navigateTo("/panel");
                    } else {
                        Object.keys(data.value).forEach(element => {
                            errors.value[element] = data.value[element]
                        })
                    }
                }
            }

            function switchPage() {
                emit("switchPage");
            }

</script>

<style scoped>
    .container {
        width: 50%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .registerForm {
        height: 100%;
        width: 100%;
        box-shadow: 0 0 8vh rgba(0, 0, 0, 0.13);
        color: rgb(46, 46, 46);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        position: relative
    }

    h2 {
        color: rgb(23, 80, 80);
        font-size: 4vh;
        letter-spacing: 0.3vh;
        margin: 5vh;
    }

    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2vh;
        width: 70%;
        position: relative;
    }

    .row::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 5vw;
        transform: translateY(100%);
        font-size: 1.7vh;
        color: rgb(204, 35, 35);
    }


    i {
        font-size: 5.5vh;
        color: rgb(23, 80, 80);
        transition-duration: 0.2s;
        opacity: 0;
    }

    .show {
        opacity: 1;
        pointer-events: all;
    }

    i:nth-of-type(2n){
        position: absolute;
    }

    .iconbox {
        position: relative;
        display: flex;
    }

    input:not([type="submit"]) {
        font-size: 2.5vh;
        padding: 1.5vh 0;
        margin-left: 2vh;
        border: none;
        border-bottom: 0.2vh solid rgb(151, 151, 151);
        outline: none;
        color: rgb(71, 71, 71);
        width: 70%;
        transition-duration: 0.2s;
        background-color: transparent;
    }

    input:not([type="submit"]):focus {
        border-bottom: 0.2vh solid rgb(23, 80, 80);
    }

    input::placeholder {
        color: rgb(155, 155, 155);
        font-weight: 200;
    }

    .submit {
        font-size: 3vh;
        padding: 1.5vh 5vh;
        margin: 5vh;
        border-radius: 5vh;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: rgb(31, 107, 107);
        color: rgb(230, 230, 230);
        letter-spacing: 0.3vh;
        box-shadow: 0 0 3vh rgba(0, 0, 0, 0.26);
        transition-duration: 0.2s;
    }

    .submit:hover {
        background-color: rgb(41, 141, 141);
    }

    .switchButton {
        display: none;
    }

    /* Klasy błedów */

    .username_empty::after {
        content: "Należy podać nazwę użytkownika.";
    }

    .username_exists::after {
        content: "Użytkownik o takiej nazwie już istnieje.";
    }

    .username_invalid::after {
        content: "Podano niepoprawny login.";
    }

    .password_empty::after {
        content: "Należy podać hasło.";
    }

    .password_invalid::after {
        content: "Podano niepoprawne hasło.";
    }

    .password_nomatch::after {
        content: "Hasła nie są identyczne.";
    }

    .key_invalid::after {
        content: "Podano niepoprawy klucz.";
    }

    .key_empty::after {
        content: "Należy podać klucz.";
    }

    .key_notfound::after {
        content: "Nie znaleziono klucza.";
    }

    /* ----- */

    @media screen and (max-width: 1000px){
        .switchButton {
            display: flex;
            position: absolute;
            bottom: 0;
            margin: 2vh;
            flex-direction: column;
        }

        .switchButton p {
            font-size: 2vh;
        }

        .switchButton button {
            border: none;
            border-radius: 20vh;
            font-size: 3vh;
            padding: 2vh 4vh;
            color: rgb(23, 77, 77);
            background-color: rgb(207, 230, 230);
            box-shadow: 0 0 1vh rgba(0, 0, 0, 0.219);
        }
    }

</style>