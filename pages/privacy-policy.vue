<template>
    <div class="page">
            <div class="cmcontainer">
            <ColorMode></ColorMode>
          </div>
          <NuxtLink class="back" :to="$localePath('/')">
            <i class='bx  bx-chevron-left'  ></i> 
            <p>{{ $t("toolsPage.return") }}</p>
          </NuxtLink>  
        <div class="header">
            <div class="content">
                <h1>{{ $t('privacyPolicy.title') }}</h1>
                <p class="update">{{ $t('privacyPolicy.update') }} 29.08.2025</p>
            </div>
        </div>
        <div class="main">
            <div class="content">


                <div class="item">
                    <div class="top">
                        <div class="number">1.</div>
                        <h2>{{ $t('privacyPolicy.li1') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p1') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">2.</div>
                        <h2>{{ $t('privacyPolicy.li2') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p2-1') }}</p>
                        <p>{{ $t('privacyPolicy.p2-2') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">3.</div>
                        <h2>{{ $t('privacyPolicy.li3') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p3-1') }}</p>
                        <ul>
                            <li><p>{{ $t('privacyPolicy.p3-2') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p3-3') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p3-4') }}</p></li>
                        </ul>
                        <p>{{ $t('privacyPolicy.p3-5') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">4.</div>
                        <h2>{{ $t('privacyPolicy.li4') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p4-1') }}</p>
                        <ul>
                            <li><p>{{ $t('privacyPolicy.p4-2') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p4-3') }}</p></li>
                        </ul>
                        <p>{{ $t('privacyPolicy.p4-4') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">5.</div>
                        <h2>{{ $t('privacyPolicy.li5') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p5') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">6.</div>
                        <h2>{{ $t('privacyPolicy.li6') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p6') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">7.</div>
                        <h2>{{ $t('privacyPolicy.li7') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p7-1') }}</p>
                        <ul>
                            <li><p>{{ $t('privacyPolicy.p7-2') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p7-3') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p7-4') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p7-5') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p7-6') }}</p></li>
                            <li><p>{{ $t('privacyPolicy.p7-7') }}</p></li>
                        </ul>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">8.</div>
                        <h2>{{ $t('privacyPolicy.li8') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p8') }}</p>
                    </div>
                </div>

                <div class="item">
                    <div class="top">
                        <div class="number">9.</div>
                        <h2>{{ $t('privacyPolicy.li9') }}</h2>
                    </div>
                    <div class="bottom">
                        <p>{{ $t('privacyPolicy.p9') }}</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    overflow: hidden;
    background-color: var(--bg);
    transition: background-color 0.2s;
}

    .content {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

.cmcontainer {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}

.back {
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  color: var(--text-light);
  transition: color 0.2s;
  text-decoration: none;
  z-index: 10;
  overflow: hidden;
}

.back:hover {
  color: var(--text-lighter);
}

.back i {
  font-size: 1.7rem;
  margin-right: 0.2rem;
  transition: transform 0.2s;
}

.back p {
  margin: 0;
  font-size: 0.9rem;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
}

.back:hover i {
  transform: translateX(-0.3rem);
}

.header {
    width: 100%;
    border-bottom: solid 0.1rem var(--low-contrast-30);
    display: flex;
    justify-content: center;
    transition: border 0.2s;
    
    h1 {
        margin-block: 8rem 5rem;
        color: var(--text-main);
        transition: color 0.2s;
        font-weight: 600;
        font-size: 2rem;
        margin-left: 2rem;

    }

    .content {
        justify-content: flex-start;
        position: relative;
    }

    .update {
        position: absolute;
        bottom: 0.5rem;
        left: 2rem;
        margin: 0;
        color: var(--text-light);
        font-size: 0.9rem;
        transition: color 0.2s;
    }
}

.main {
    width: 100%;
    padding-block: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        flex-direction: column;
    }
}

.item {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    margin-top: 3rem;

    .top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: stretch;

        .number {
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--additive2);
            transition: color 0.2s;
            background-color: rgba(var(--additive2-rgb), 0.1);
            margin-right: 1rem;
        }

        h2 {
            flex: 1;
            display: flex;
            align-items: center;
            text-align: left;
            color: var(--text-main);
            transition: color 0.2s;
            font-weight: 500;
            font-size: 1.5rem;
        }
    }

    .bottom {
        width: 100%;

        p {
            margin-left: 2rem;
            color: var(--text-lighter);
            transition: color 0.2s;
            font-size: 0.9rem;
        }

        ul {

            li {
                margin-left: 1rem;

                p {
                    margin-left: 0.5rem;
                }
            }

            li::marker {
                    color: var(--additive2);
                    transition: color 0.2s;

            }
        }
    }
}

@media screen and (max-width: 1400px){
  .content {
    width: 80%;
  }

  .back p {
    display: none;
  }
}

@media screen and (max-width: 1000px){
  .back p {
    font-size: 1rem;
    display: flex;
  }

  .cmcontainer, .back {
    position: absolute;
  }
}


</style>