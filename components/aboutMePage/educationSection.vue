<template>
    <div class="section">
        <div class="content">
            <h2 data-aos="fade">{{ $t('aboutmePage.educationTitle') }}</h2>
            <div class="tileContainer">

                <div class="tile" data-aos="fade">
                    <div class="shadow"></div>
                    <div class="left">
                        <i class='bx  bx-code'  ></i> 
                    </div>
                    <div class="right">
                        <h3 class>{{ $t('aboutmePage.education.course.title') }}</h3>
                        <div class="date">2020-2022</div>
                        <p class="description">{{ $t('aboutmePage.education.course.description') }}</p>
                    </div>
                </div>

                <div class="tile" data-aos="fade">
                    <div class="shadow"></div>
                    <div class="left">
                        <i class='bx  bx-education'></i>
                    </div>
                    <div class="right">
                        <h3 class>{{ $t('aboutmePage.education.school.title') }}</h3>
                        <div class="date">2020-2025</div>
                        <p class="description">{{ $t('aboutmePage.education.school.description') }}</p>
                    </div>
                </div>

                <div class="tile" data-aos="fade">
                    <div class="shadow"></div>
                    <div class="left">
                        <i class='bx  bx-globe-alt'  ></i> 
                    </div>
                    <div class="right">
                        <h3 class>{{ $t('aboutmePage.education.inf02.title') }}</h3>
                        <div class="date">2022</div>
                        <p class="description">{{ $t('aboutmePage.education.inf02.description') }}</p>
                    </div>
                </div>

                <div class="tile" data-aos="fade">
                    <div class="shadow"></div>
                    <div class="left">
                        <i class='bx  bx-widget'  ></i> 
                    </div>
                    <div class="right">
                        <h3 class>{{ $t('aboutmePage.education.inf03.title') }}</h3>
                        <div class="date">2024</div>
                        <p class="description">{{ $t('aboutmePage.education.inf03.description') }}</p>
                    </div>
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
        font-weight: 600;
    }

    .section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-block: 2rem;
    }

    .content {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tileContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .tile {
        border-radius: 0.5rem;
        border: solid 0.1rem var(--low-contrast-30);
        background-color: var(--bg-light);
        transition: border 0.2s, background-color 0.2s, opacity 0.5s !important;
        padding: 1rem;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        overflow: hidden;
        margin: 1rem;
        box-sizing: border-box;
        position: relative;

        width: calc(100% / 2 - 2rem);

        .shadow {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            width: 150%;
            aspect-ratio: 1;
            background-color: var(--additive);
            opacity: 0.05;
            mask-image: radial-gradient(closest-side, black 0%, rgba(0, 0, 0, 0) 100%);
            border-radius: 50%;
        }
    }

    .tile:hover {
        background-color: var(--bg);
    }

    .left {
        width: max-content;
        padding-right: 1rem;
            z-index: 2;

        i {
            font-size: 7rem;
            color: var(--additive);
            // filter: drop-shadow(0 0 10rem var(--additive));
            transition: filter 0.2s;
            margin-block: 1rem;
        }
    }

    .right {
        flex: 1;
        padding-left: 1rem;
            z-index: 2;

        h3 {
            color: var(--text-main);
            transition: color 0.2s;
            font-size: 1.2rem;
            margin: 0.5rem 0 0 0;
            font-weight: 600;
        }
        
        .date {
            color: var(--low-contrast);
            font-size: 0.9rem;
            transition: color 0.2s;
            margin: 0.3rem 0 0 0;
        }

        .description {
            color: var(--text-light);
            transition: color 0.2s;
            font-size: 1rem;
            margin: 0.7rem 0 0 0;
        }
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }

        .left i {
            font-size: 5rem;
        }
    }

    @media screen and (max-width: 1000px){
        .content {
            width: calc(90% + 2rem);
        }

        .tile {
            margin: 0.5rem;
            width: calc(100% - 1rem);
        }
    }
</style>