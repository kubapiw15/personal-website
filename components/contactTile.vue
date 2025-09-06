<template>
    <a :href="link" class="contactTile" :target="blank ? `_blank` : '_self'">
        <div class="top">
            <slot></slot>
            <p class="platform">{{ platform }}</p>
        </div>
        <p class="name">{{ name }}</p>
    </a>
</template>

<script setup>

const { name, platform, link, blank } = defineProps(['name', 'platform', 'link', 'blank']) 

</script>

<style lang="scss" scoped>

    .contactTile {
        width: calc(80%);
        position: relative;
        border-radius: 0.5rem;
        box-sizing: border-box;
        padding: 1rem;
        transition: background-color 0.2s, transform 0.5s, opacity 0.5s;
        margin-block: 1rem;
        text-decoration: none;
        cursor: default;

        &::after {
            content: "";
            bottom: -1rem;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--low-contrast-30);
            position: absolute;
            z-index: 2;
            transition: background-color 0.2s;
            mask-image: linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%);
        }

        &:hover {
            background-color: var(--low-contrast-15);
        }

        .top {
            display: flex;
            align-items: center;

            p {
                font-size: 0.9rem;
                font-weight: 400;
                color: var(--text-lighter);
                transition: color 0.2s;
            }
        }

        .name {
            font-size: 1.3rem;
            margin-block: 0.5rem;
            font-weight: 500;
            color: var(--text-main);
                transition: color 0.2s;
                user-select: all;
        }
    }

    .contactTile:nth-last-child(1)::after {
        display: none;
    }

    @media screen and (max-width: 1000px){
        .contactTile {
            width: 100%;
            background-color: var(--low-contrast-15);
            margin-block: 0.5rem;

            &::after {
                display: none;
            }
        }
    }


</style>