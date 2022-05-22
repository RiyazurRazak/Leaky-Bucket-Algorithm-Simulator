<template>
    <BarChart :chartData="chartData" class="root" />
</template>


<script setup>
import {useDataStore} from '../store/useData'
import {BarChart} from 'vue-chart-3'
import { Chart, registerables } from "chart.js";
import { storeToRefs } from 'pinia';
import {onMounted, reactive, readonly,ref} from 'vue'


const data = useDataStore()
const {inputValues, outputCapacity, bufferSize} = storeToRefs(data)
Chart.register(...registerables)
const output = []
const discartedPackets = new Array(5).fill(0);
let idx = 5;
    const dataRates = [...inputValues.value]
    console.log(dataRates)
    const maxBuffer = readonly(bufferSize.value);
    const outputRate = readonly(outputCapacity.value);
    let buffer = 0;
    dataRates.forEach((rate, index)=>{
        if(rate < outputRate){
            output[index] = rate
        }else{
            const extraPackets = rate - outputRate;
            if(buffer + extraPackets < maxBuffer){
                buffer += extraPackets;
            }else{
                const freeBufferSize = maxBuffer - buffer;
                const toBeDiscard = extraPackets - freeBufferSize;
                discartedPackets[index] = toBeDiscard;
                const toBeStored = extraPackets - toBeDiscard;
                buffer += toBeStored;
            }
            output[index] = outputRate;
        }
    })
    const max = Math.floor(buffer/outputRate);
    for(let i=0; i<max; i++){
        output[idx++] = outputRate;
        buffer -= outputRate;
    }
    if(buffer > 0)
      output[idx] = buffer;
   
console.log(output, discartedPackets)
const chartData = {
    labels: Array.from({length: output.length}, (_, i) => i + 1),
    datasets: [
        {
            label: 'Transmitted Packets',
            data: output,
            backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)','rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'],
            borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(201, 203, 207)'],
            borderWidth: 1,
        },{
            label: "Discarded Packet",
            data: discartedPackets,
            backgroundColor: "rgb(255,0,0,0.2)",
            borderColor: "rgb(255,0,0)",
            borderWidth: 1,
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