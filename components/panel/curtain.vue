<template>
    <div class="curtain" :class="{curtain_login: login}">
        <div class="item login" :class="{item_login: login}">
            <h3>Masz już konto?</h3>
            <p class="p1">Zaloguj się i korzystaj z pełni możliwości swojego konta (nazwa firmy).</p>
            <div class="row">
                <i class='bx bx-left-arrow-alt' ></i><button class="b1" @click="login = !login">Wróć do logowania</button>
            </div>
        </div>
        <div class="item register" :class="{item_login: login}">
            <h3>Nie masz konta?</h3>
            <p class="p2">Zarejestruj się na (nazwa firmy) i dołącz do tysięcy użytkowników tworzących naszą społeczność.</p>
            <div class="row">
                <button class="b2" @click="login = !login">Przejdź do rejestracji</button><i class='bx bx-right-arrow-alt' ></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                login: false
            }
        }
    }
</script>

<style scoped>
    .curtain {
        position: absolute;
        left: 0;
        right: auto;
        top: 0;
        height: 100%;
        width: 50%;
        background-color: rgb(23, 80, 80);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.5s ease;
        overflow: hidden;
        transform: translateX(100%);
    }

    .item {
        width: 100%;
        min-width: 100%;
        height: 100%;
        transition: all 0.5s ease;
        transform: translateX(-100%);
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        color: rgb(243, 243, 243);
        padding-inline: 10vh;
    }

    .item:nth-of-type(1) {
        align-items: flex-end;
    }

    .curtain_login {
        transform: translateX(0vw);
    }

    .item_login {
        transform: translateX(0vw);
    }

    h3 {
        font-size: 5vh;
        font-weight: 300;
        margin-top: 10vh;
        color: rgb(187, 223, 223);
    }

    p {
        text-align: start;
        font-size: 3vh;
    }

    .p1 {
        text-align: end;
    }

    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    i {
        font-size: 5vh;
        color: rgb(187, 223, 223);
    }

    button {
        font-size: 3.4vh;
        font-weight: 500;
        background-color: transparent;
        border: none;
        color: inherit;
        padding: 0;
        margin: 0;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    button:hover {
        margin-right: 2vh;
    }

    .b1:hover {
        margin-right: 0;
        margin-left: 2vh;
    }

    @media screen and (max-width: 1000px){
        .curtain {
            display: none;
        }
    }
</style>