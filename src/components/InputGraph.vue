<template>
    <BarChart :chartData="chartData" class="root" />
</template>


<script setup>
import {useDataStore} from '../store/useData'
import {BarChart} from 'vue-chart-3'
import { Chart, registerables } from "chart.js";
import { storeToRefs } from 'pinia';


const data = useDataStore()
const {inputValues} = storeToRefs(data)
Chart.register(...registerables)

const chartData = {
    labels: [1,2,3,4,5],
    datasets: [
        {
            label: '',
            data: inputValues.value,
            backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)','rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'],
            borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(201, 203, 207)'],
            borderWidth: 1
        }
    ]
}
</script>


<style scoped>
.root{
    width: 50vw;
    margin: auto;
}
</style>