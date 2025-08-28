<template>
    <div class="component">
        <div class="content">
            <div class="left section">
                <h2 data-aos="fade">{{ $t('mainPage.contact1') }}</h2>

                <ContactTile
                data-aos="anim-up"
                :name="`${$t('mainPage.contact')}@kubapiw.dev`"
                :platform="`${$t('mainPage.contact2')}`"
                :blank="false"
                :link="`mailto:${$t('mainPage.contact')}@kubapiw.dev`"
                >
                <i class='bx  bx-envelope'></i> 
                </ContactTile>
                <ContactTile
                data-aos="anim-up"
                :name="`Jakub Piwoński`"
                :platform="`${$t('mainPage.contact3')}`"
                :blank="true"
                :link="`https://www.linkedin.com/in/jpiwonski`"
                >
                <i class='bxl  bx-linkedin'></i> 
                </ContactTile>
                <ContactTile
                data-aos="anim-up"
                :name="`kubapiw15 (Jakub Piwoński)`"
                :platform="`${$t('mainPage.contact4')}`"
                :blank="true"
                :link="`https://github.com/kubapiw15`"
                >
                <i class='bxl  bx-github'></i> 
                </ContactTile>
            </div>
            <div class="right section">
                <h2 data-aos="fade">{{ $t('mainPage.contact5') }}</h2>
                <ContactForm></ContactForm>
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
        margin-block: 6rem;
    }

    .content {
        width: 70%;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        height: 100%;
    }

    .section {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        flex: 1;
    }

    h2 {
        text-align: left;
        font-size: 2rem;
        transition: color 0.2s, transform 0.5s, opacity 0.5s;
        color: var(--text-main);
        line-height: 5rem;
        transition: color 0.2s, opacity 0.5s !important;
        font-weight: 600;
    }

    .contactTile {


        .top {
            i {
                font-size: 2.5rem;
                margin-right: 1rem;
                color: var(--additive);
                transition: color 0.2s;
            }
        }
    }

    
    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }

        .section {
            width: 50%;
        }

    }

    @media screen and (max-width: 1000px){

        /* h2 {
            width: 100%;
        } */

        .content {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }

        .section {
            height: auto;
            width: 100%;

        }

        .section:nth-child(1){
            margin-bottom: 5rem;
        }
    }
    
</style>