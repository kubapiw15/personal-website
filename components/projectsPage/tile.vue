<template>
    <div class="tile">
        <div class="background" :style="`background-color: ${color};`"></div>
        <div class="info" data-aos="anim-up">
            <div class="box">
                <div class="linkBox">
                    <h2 class="name">{{ name }}</h2>
                    <a class="link" :href="`${link}`" target="_blank">{{ linkDesc }}</a>
                </div>
                <NuxtImg v-if="logoSrc" alt="Logo" :src="logoSrc" class="logo"></NuxtImg>
            </div>
            <p class="description">{{ description }}</p>
            <div class="techStack">
                <ProjectsPageTechIcon v-for="technology in technologies" :icon="technology"></ProjectsPageTechIcon>
            </div>
        </div>
        <div class="purpose" data-aos="anim-up">
            <p>{{ purpose }}</p>
            <i :class='purposeIcon'></i> 
        </div>
        <div class="score" v-if="lighthouse" data-aos="anim-up">
            <div class="box">
                <div class="number">{{ lighthouse[0] }}</div>
                <p class="label">{{ $t('projectsPage.parameter1') }}</p>
            </div>
            <div class="box">
                <div class="number">{{ lighthouse[1] }}</div>
                <p class="label">{{ $t('projectsPage.parameter2') }}</p>
            </div>
            <div class="box">
                <div class="number">{{ lighthouse[2] }}</div>
                <p class="label">{{ $t('projectsPage.parameter3') }}</p>
            </div>
        </div>
        <div class="preview">
            <NuxtImg class="img" alt="application preview" :src="`/img/preview/${name}.png`"></NuxtImg>
        </div>
    </div>
</template>

<script setup>
const {name, purpose, purposeIcon, color, link, linkDesc, preview, description, logoSrc, lighthouse, technologies}
=defineProps(['name', 'purpose', 'purposeIcon', 'color', 'link', 'linkDesc', 'preview', 'description', 'logoSrc', 'lighthouse', 'technologies'])

</script>

<style lang="scss" scoped>
    .tile {
        height: 40rem;
        width: 100%;
        margin-block: 2rem 6rem;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        border: solid 0.1rem var(--low-contrast-30);
        transition: color 0.2s, border 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }

    .background {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        opacity: 0.1;
        border-radius: 1rem;
        transition: opacity 0.2s, border 0.2s;
        z-index: 2;
    }

    html.light .background {
        opacity: 0.1.5;
    }

    .purpose {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        background-color: var(--bg);
        padding-inline: 1rem;
        border: solid 0.1rem var(--low-contrast);
        transition: background-color 0.2s, border 0.2s, opacity 0.5s, transform 0.5s !important;
        z-index: 3;
        

        p {
            font-size: 0.9rem;
            color: var(--text-main);
            font-weight: 500;
            transition: color 0.2s;
        }

        i {
            font-size: 2.5rem;
            color: var(--text-light);
            margin-left: 1rem;
            transition: color 0.2s;
        }

    }

    .info {
        background-color: var(--bg);
        width: 25rem;
        z-index: 3;
        margin: 0.5rem;
        border-radius: 0.5rem;
        padding: 1rem;
        border: solid 0.1rem var(--low-contrast);
        transition: background-color 0.2s, border 0.2s, opacity 0.5s, transform 0.5s !important;
        position: relative;
        flex: 1;

        .box {
            display: flex;
            align-items: center;
            margin-top: 3rem;
            width: 100;
            justify-content: space-between;
        }

        .name {
            color: var(--text-main);
            font-size: 2.2rem;
            margin: 0 2rem 0 0;
            font-weight: 500;
            transition: color 0.2s;
        }

        .logo {
            height: 4rem;
            width: 4rem;
            padding-inline: 1rem;
        }

        .link {
            color: var(--text-light);
            font-size: 0.9rem;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                text-decoration: underline;
            }
        }

        .description {
            color: var(--text-lighter);
            transition: color 0.2s;
            font-size: 1rem;
            margin-top: 3rem;
        }

        .techStack {
            position: absolute;
            bottom: 0.8rem;
            display: flex;
        }
    }

    .score {
        background-color: var(--bg);
        width: 25rem;
        z-index: 3;
        margin: 0 0.5rem 0.5rem 0.5rem;
        border-radius: 0.5rem;
        padding: 1.5rem 1rem 1rem 1rem;
        border: solid 0.1rem var(--low-contrast);
        transition: background-color 0.2s, border 0.2s, opacity 0.5s, transform 0.5s !important;
        display: flex;
        justify-content: stretch;
        position: relative;

        &::after {
            position: absolute;
            left: 0.2rem;
            top: 0.2rem;
            font-size: 0.8rem;
            content: "Google Lighthouse";
            color: var(--low-contrast);
            transition: color 0.2s;
        }

        .box {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-block: 1rem;
        }

        .number {
            color: var(--bg);
            position: relative;
            font-weight: 600;
            font-size: 1.3rem;
            height: 4.5rem;
            width: 4.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            overflow: hidden;
            border: solid 0.2rem var(--green);
            transition: color 0.2s, border 0.2s;
        }

        .number::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: var(--green);
            transition: background-color 0.2s;
            z-index: -1;
            opacity: 0.6;
        }

        .label {
            color: var(--text-light);
            margin: 0.5rem 0 0 0;
            font-size: 1rem;
            transition: color 0.2s;
        }

    }

    .preview {
        position: absolute;
        bottom: 0.5rem;
        right: 0;
        height: calc(100% - 1rem);
        overflow: hidden;
        width: calc(100% - 28rem);
        display: flex;
        justify-content: center;
        mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent),
              linear-gradient(to right, transparent, black 20%);
        mask-composite: intersect; /* standard */
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent),
                            linear-gradient(to right, transparent, black 20%);
        -webkit-mask-composite: destination-in; /* WebKit fallback */
        mask-repeat: no-repeat;
        mask-size: 100% 100%, 100% 100%;
        opacity: 0.2;
        transition: opacity 0.2s;

        .img {
            height: 100%;
        }
    }

    html.light .preview {
        opacity: 0.5;
    }

    @media screen and (max-width: 1000px){

        .tile {
            height: 50rem;
        }

        .info {
            width: auto;
            background-color: transparent;
            border: none;

            .logo {
                height: 6rem;
                width: 6rem;
            }

            .name {
                font-size: 2.5rem;
            }

            .link {
                font-size: 1rem;
            }

            .description {
                font-size: 1.1rem;
            }
        }
        
        .purpose {
            position: static;
            margin: 0 0.5rem 0.5rem 0.5rem;
            justify-content: center;
            padding: 0.5rem;

            p {
                font-size: 1.2rem;
            }

            i {
                font-size: 3.5rem;
            }
        }

        .score {
            width: auto;
        }

        .preview {
            display: none;
        }
    }
    
</style>