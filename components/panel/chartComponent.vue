<template>
      <canvas ref="chartCanvas"></canvas>
  </template>

<script setup>
import {
  Chart,
  BarController,
  LineController,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Rejestracja komponentów
Chart.register(BarController, BarElement, CategoryScale, LinearScale, LogarithmicScale, LineController, LineElement, PointElement, Tooltip, Legend);

const {data, options, type, stacking} = defineProps(["data", "options", "type", "stacking"]);

const chartCanvas = ref(null);
let chartInstance = null;

const ctx = ref()

const createChart = ()=>{
  if (chartCanvas.value) {
    ctx.value = chartCanvas.value.getContext('2d');
    chartInstance = new Chart(ctx.value, {
      type,
      data,
      options,
    });
  }
}

const destroyChart = ()=>{
  if (chartInstance) {
    chartInstance.destroy();
  }
}

onMounted(() => {
  createChart()
});

onBeforeUnmount(() => {
  destroyChart()
});

watch(()=> data, () => {
  if (chartInstance) {
    chartInstance.data = data;
    chartInstance.update();
  }
}, { deep: true });

watch(()=>type,()=>{
  if(chartInstance){
    chartInstance.type = type
    destroyChart()
    createChart()
  }

}, {deep: true})

watch(()=> stacking, () => {
  if (chartInstance) {
    chartInstance.options.scales.x.stacked = !chartInstance.options.scales.x.stacked
    chartInstance.options.scales.y.stacked = !chartInstance.options.scales.y.stacked
    chartInstance.update()
  }
}, { deep: true });


</script>

<style scoped>

    canvas {
        width: 100%;
        height: 100%;
    }

</style>