<template>
    <PanelLoading :loaded="loaded"></PanelLoading>
    <i @click="extendOptions = !extendOptions" class='bx bx-objects-horizontal-right extendOptions' ></i>
    <div class="page">
        <div class="content">
            <div class="topSection">
                <h2>Statystyki panelu</h2>
            </div>
            <div class="main">
                <div class="chartContainer">
                    <PanelChartComponent :stacking="stacking" :data="chartData" :type="chartType" :options="chartOptions">Twoja przeglądarka nie obsługuje wykresów</PanelChartComponent>
                </div>
                <div class="options" :class="{optionsExtended: extendOptions}">
                    <h3>Sortuj według:</h3>
                    <select v-model="queryData.groupBy">
                        <option value="day">Dnia</option>
                        <option value="month">Miesiąca</option>
                        <option value="year">Roku</option>
                    </select>
                    <div class="inputContainer">
                        <label for="from">Od:</label>
                        <input id="from" type="date" class="queryFrom" placeholder="Od:" v-model="queryData.from">
                    </div>
                    <div class="inputContainer">
                        <label for="to">Do:</label>
                        <input id="to" type="date" class="queryTo" placeholder="Do:" v-model="queryData.to">
                    </div>
                    <h3>Typ wykresu</h3>
                    <div class="buttonContainer">
                      <button class="chartType" :class="{button_active: chartType == 'bar'}" @click="chartType = 'bar'">Słupkowy</button>
                      <button class="chartType" :class="{button_active: chartType == 'line'}" @click="chartType = 'line'">Liniowy</button>
                    </div>
                    <button class="stacking" :class="{button_active: stacking == true}" @click="stacking = !stacking">Sumowanie</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { staticNames } from '~/data/staticNames';
    
    const extendOptions = ref(false)

    const stacking = ref(false)

    const pageData = ref({});
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const permissionsStore = usePermissionsStore();
    const notificationStore = useNotificationStore()
    const loaded = ref(false);

    const queryData = ref({
        groupBy: "month",
        from: "",
        to: ""

    });

    const chartType = ref("bar")

    const chartData = ref({
            labels: [],
            datasets: [],
    });



    const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      }
    }
    });

    const route = useRoute();

    const setChart = ()=>{
      chartData.value.labels = [...new Set(Object.values(pageData.value).flatMap(dataset => dataset.map(item => {
          const date = new Date(item.date);
          if (queryData.value.groupBy == "day") return item.date;
          if (queryData.value.groupBy == "month") return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;
          if (queryData.value.groupBy == "year") return date.getFullYear();
      })))]
    .sort((a, b) => {
        // Konwertowanie na Date w przypadku grupowania po "day" i "month", aby umożliwić poprawne porównanie
        const dateA = queryData.value.groupBy === "day" || queryData.value.groupBy === "month" ? new Date(a) : a;
        const dateB = queryData.value.groupBy === "day" || queryData.value.groupBy === "month" ? new Date(b) : b;
        
        return dateA - dateB;
    });
        chartData.value.datasets = [];
      Object.keys(pageData.value).forEach(key => {
        chartData.value.datasets.push({
          label:
            staticNames.events[key][0],
          data: chartData.value.labels.map(date => {
            const data = pageData.value[key].find(item => {
              const itemDate = new Date(item.date);
              if(queryData.value.groupBy == "day") return item.date == date;
              if(queryData.value.groupBy == "month") return `${itemDate.getFullYear()}-${(itemDate.getMonth()+1).toString().padStart(2, "0")}` == date;
              if(queryData.value.groupBy == "year") return itemDate.getFullYear() == date;
            });
            return data ? data.count : 0;
          }),
          backgroundColor: staticNames.eventColors[key][0],
          borderColor: staticNames.eventColors[key][1],
          borderRadius: 3,
          borderWidth: 3,
          tension: 0.4
        });
      });
    }

    onBeforeMount(async () => {
    try {
      const user = await usePanelUser()
      if (permissionsStore.permissions['logs'] == 0) {
        navigateTo("/panel");
      }

      const data = ref()
      let formData = new FormData();

      formData.append('groupBy', queryData.value.groupBy);
        formData.append('from', queryData.value.from);
        formData.append('to', queryData.value.to);

      data.value = await $fetch(`${apiUrl}/panel/getStats.php`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if(data.value == 'no_permission'){
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
        navigateTo("/panel")
      }

      pageData.value = data.value;

      setChart();

      loaded.value = true;

    } catch (error) {
      console.error('Błąd podczas ładowania danych:', error);
    }
    
  });

    watch(queryData.value, async () => {
        let formData = new FormData();

        const data = ref({});

        formData.append('groupBy', queryData.value.groupBy);
        formData.append('from', queryData.value.from);
        formData.append('to', queryData.value.to);

        data.value = await $fetch(`${apiUrl}/panel/getStats.php`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
    });

    if(data.value == "no_permission"){
      navigateTo("/panel")
      notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
    }

    pageData.value = data.value;
    setChart();
  });

  definePageMeta({
    layout: "panel",
  });
  
  useSeoMeta({
    title: `${config.public.name} - Statystyki`,
    description: "[description]",
    ogTitle: "[og:title]",
    ogDescription: "[og:description]",
    ogImage: "[og:image]",
    ogUrl: "[og:url]",
  });

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
  ]
  });
</script>

<style scoped>
    .page {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--bg-darker);
    transition-duration: 0.2s;
  }
  
  .content {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: stretch;
  }

  .topSection {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 5rem;
    align-items: center;
  }

  h2 {
    color: var(--text-main);
    font-weight: 500;
    font-size: 2rem;
    
    transition: color 0.2s;
  }

  .chartContainer {
    flex: 5;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.1);
    border-radius: 1rem;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem;
  }

  .main {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    padding: 2rem 1rem;
  }

  .options {
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .options .inputContainer {
    width: 80%;
    justify-content: stretch;
    display: flex;
  }

  .options label {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    margin-right: 0.5rem;
    color: var(--text-light);
    transition-duration: 0.2s;
  }

  .options input {
    width: auto;
    flex: 1;
    background-color: var(--low-contrast);
    color: var(--text-light);
    font-size: 1.2rem;
    padding: 1rem;
    border: none;
    border-radius: 5rem;
    margin-block: 0.2rem;
    box-sizing: border-box;
    outline: none;
    transition-duration: 0.2s;
  }

  .options h3 {
    font-size: 1.2rem;
    color: var(--text-main);
    font-weight: 400;
  }

  .options select {
    background-color: var(--low-contrast);
    color: var(--text-light);
    font-size: 1.2rem;
    padding: 1rem;
    width: 80%;
    border: none;
    border-radius: 5rem;
    margin-block: 0.2rem;
    box-sizing: border-box;
    outline: none;
    transition-duration: 0.2s;
  }

  .extendOptions {
    display: none;
  }

  .options .buttonContainer {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  .chartType {
    background-color: var(--bg-lighter);
    border: solid 0.2rem var(--low-contrast);
    color: var(--text-light);
    width: 48%;
    box-sizing: border-box;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10rem;
    transition: border 0.2s;
  }

  .stacking {
    background-color: var(--bg-lighter);
    border: solid 0.2rem var(--low-contrast);
    color: var(--text-light);
    width: 60%;
    box-sizing: border-box;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10rem;
    transition: border 0.2s;
    margin-top: 1rem;
  }

  .button_active {
    border: solid 0.2rem rgba(31, 177, 31, 0.8);
  }

  @media screen and (max-width: 1400px){
    .content {
      width: 95%;
    }
    select,.inputContainer,.buttonContainer {
        width: 100%;
    }
  }

  @media screen and (max-width: 1000px){
    .content {
      width: 95%;
      height: calc(100% - 50px);
    }

    .options {
      position: fixed;
      z-index: 80;
      opacity: 0;
      top: 0;
      left: 0;
      transition: opacity 0.2s;
      pointer-events: none;
      height: 100vh;
      width: 100vw;
      background-color: var(--bg-darker);
      box-sizing: border-box;
      padding-top: 5rem;
    }

    .extendOptions {
      display: flex;
      position: fixed;
      right: 0.35rem;
      top: 0.35rem;
      height: 3.5rem;
      width: 3.5rem;
      font-size: 2rem;
      background-color: var(--low-contrast);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      color: var(--text-light);
      z-index: 81;
      cursor: pointer;
    }

    .options.optionsExtended {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>