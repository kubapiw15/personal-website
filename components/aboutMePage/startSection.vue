<template>
    <div class="section">
        <div class="content">
            <h2></h2>
            <div class="startContainer">
                <div class="left" data-aos="fade">
                    <span>2023</span>
                    <span class="main">2024</span>
                    <span>2025</span>
                </div>
                <div class="right">
                    <p data-aos="anim-left">{{ $t('aboutmePage.start') }}</p>
                    <NuxtLink data-aos="anim-up" class="link" :to="$localePath('/projects')">{{ $t('aboutmePage.projects')}}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    h2 {
        color: var(--text-main);
        transition: color 0.2s, opacity 0.5s !important;
        font-size: 2rem;
        margin-block: 3rem;
    }

    .section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-block: 2rem;
    }

    .content {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .startContainer {
        display: flex;
        justify-content: stretch;
        align-items: center;
        width: 100%;
    }

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        mask-image: linear-gradient(180deg, transparent 5%, black 40%, black 60%, transparent 95%);
        transition: opacity 0.5s !important;

        span {
            font-weight: 800;
            color: var(--additive);
            margin-block: 1.5rem;
            margin-inline: 2rem;
            font-size: 5rem;
            line-height: 5rem;
            opacity: 0.3;
            transition: opacity 0.2s, color 0.2s;

            &.main {
                font-size: 6rem;
                line-height: 6rem;
                opacity: 1;
            }
        }
    }

    
        html.light .left span {
            opacity: 0.6;
        }

        html.light .left span.main {
            opacity: 1;
        }

    .right {
        flex: 1;
        padding-inline: 4rem;

        p {
            color: var(--text-main);
            transition: color 0.2s, transform 0.5s, opacity 0.5s !important;
            font-size: 1.2rem;
            margin-bottom: 3rem;
        }

        .link {
            background-color: var(--low-contrast-30);
            padding: 1rem 2rem;
            font-size: 1rem;
            border: solid transparent 0.1rem;
            text-decoration: none;
            color: var(--text-main);
            border-radius: 0.5rem;
            transition: background-color 0.2s, border 0.2s, color 0.2s, transform 0.5s, opacity 0.5s !important;
        }

        .link:hover {
            border: solid 0.1rem var(--low-contrast-30);
            background-color: transparent;
        }
        
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }
    }

    @media screen and (max-width: 1000px) {
        .section {
            margin-bottom: 6rem;
        }
        .startContainer {
            flex-direction: column;
        }
        .left, .right {
            width: 100%;
        }

        .left {
            flex-direction: row;
            mask-image: linear-gradient(90deg, transparent 5%, black 40%, black 60%, transparent 95%);
            padding-block: 2rem;

            span {
                font-size: 3rem;
                margin: 0 1rem;

                &.main {
                    font-size: 3.5rem;
                }
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                text-align: center;
            }

            .link {
                font-size: 1.2rem;
                padding: 1.5rem 3rem;
                margin-top: 2rem;
            }
        }
    }

</style>