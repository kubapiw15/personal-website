<template>
    <div class="container">
        <form action="" class="loginForm" @submit.prevent="handleSubmit()" >
            <h2>Logowanie</h2>
            <div class="username row" :class="
            {username_empty: errors.username == 'empty'}, 
            {username_notfound: errors.username == 'notfound'}, 
            {username_invalid: errors.username == 'invalid'}">
                <div class="iconbox">
                    <i class='bx bx-user show' ></i>
                    <i :class="{show: /^[a-zA-Z0-9_.-]{5,20}$/.test(loginData.username)}" class='bx bxs-user' ></i>
                </div>
                <input type="text" placeholder="Nazwa użytkownka" v-model="loginData.username" class="username__input" autocomplete="username" name="username" maxlength="20">
            </div>
            <div class="password row" :class="
            {password_empty: errors.password == 'empty'}, 
            {password_notfound: errors.password == 'notfound'}, 
            {password_invalid: errors.password == 'invalid'}">
                <div class="iconbox">
                    <i class='bx bx-lock-alt show' ></i>
                    <i :class="{show: /^.{7,100}$/.test(loginData.password)}" class='bx bxs-lock-alt' ></i>
                </div>
                <input type="password" placeholder="Hasło" v-model="loginData.password" class="password__input" autocomplete="current-password" name="password">
            </div>
            <input type="submit" class="submit" value="Zaloguj się">
            <div class="switchButton">
                <p>Nie masz konta?</p>
                <button type="button" class="b2" @click="switchPage()">Przejdź do rejestracji</button>
            </div>
        </form>
    </div>
</template>

<script setup>

const emit = defineEmits(['switchPage']);

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

const loginData = reactive({
    username: "",
    password: ""
});

const errors = reactive({
    username: "",
    password: ""
});

// Handle form submission
const handleSubmit = async () => {

    errors.username = ''
    errors.password = ''

    if(loginData.username.length == 0){
        errors.username = "empty"
    }else if(!(/^[a-zA-Z0-9_.-]{5,50}$/.test(loginData.username))){
        errors.username = "invalid"
    }

    if(loginData.password.length == 0){
        errors.password = "empty"
    }else if(!(/^.{7,100}$/.test(loginData.password))){
        errors.password = "invalid"
    }

    if(errors.password == "" && errors.username == ""){

    const formData = new URLSearchParams();
        formData.append('username', loginData.username);
        formData.append('password', loginData.password);

    const data = await $fetch(`${apiUrl}/panel/login.php`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
    });
    if(data['username'] == 'success' && data['password'] == 'success'){
        navigateTo('/panel')
    } else {
        errors.username = data['username']
        errors.password = data['password']
    }
}
};

// Emit switchPage event
const switchPage = () => {
    emit("switchPage");
};

// Watchers
watch(
    () => loginData.username,
    () => {
        errors.username = "";
    }
);

watch(
    () => loginData.password,
    () => {
        errors.password = "";
    }
);
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

    .loginForm {
        height: 100%;
        width: 100%;
        box-shadow: 0 0 8vh rgba(0, 0, 0, 0.13);
        color: rgb(46, 46, 46);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        position: relative;
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

    .username_empty::after {
        content: "Należy podać nazwę użytkownika.";
    }

    .username_notfound::after {
        content: "Podano nieprawidłowy login lub hasło.";
    }

    .username_invalid::after {
        content: "Podano niepoprawny login.";
    }

    .password_empty::after {
        content: "Należy podać hasło.";
    }

    .password_notfound::after {
        content: "Podano nieprawidłowy login lub hasło.";
    }

    .password_invalid::after {
        content: "Podano niepoprawne hasło.";
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
        display: none
    }

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

        .row::after {
            left: 10vw;
        }

        .switchButton button {
            border: none;
            border-radius: 20vh;
            font-size: 3vh;
            padding: 2vh 4vh;
            color: rgb(23, 77, 77);
            background-color: rgb(207, 230, 230);
            box-shadow: 0 0 1vh rgba(0, 0, 0, 0.219);
            cursor: pointer
        }
    }

</style>