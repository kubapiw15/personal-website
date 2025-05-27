<template>
    <div>
        <PanelLoadingScreen :loaded="loaded"></PanelLoadingScreen>
        <NuxtPage/>
    </div>
</template>

<script setup>

    const loaded = ref(false)

    onMounted(()=>{
        loaded.value = true
    })

    useHead({
  htmlAttrs: {
    lang: "pl",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
  ]
});
</script>

<style>

</style>