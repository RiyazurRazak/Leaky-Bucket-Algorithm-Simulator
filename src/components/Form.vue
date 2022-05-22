<template>
   <div class="root">
     <h2>Inputs</h2>
     <label for="outputCapacity">Enter Output Capacity (Packets / Second)</label>
     <n-input v-model:value="outputCapacity" type="number" id="outputCapacity" placeholder="300" class="input" round autofocus />
     <label for="bufferSize">Enter Size Of Buffer (Number of Packets)</label>
     <n-input v-model:value="bufferSize" type="number" id="bufferSize" placeholder="100" class="input" round />
     <p>Enter Input Capacity</p>
     <table>
         <tr>
             <th>Seconds</th>
             <th>Input Capacity</th>
         </tr>
         <tr v-for="(e, i) in inputValues" :key="i">
             <td>{{i+1}}</td>
             <td> <n-input :on-change="(value)=> inputValues[i] = parseInt(value)" type="number" min="1" id="bufferSize" placeholder="300" class="input" round /></td>
         </tr>
     </table>
     <br />
     <n-button color="#83BD75" @click="runHandller">Run Simulation</n-button>
   </div>
</template>

<script setup>
import {NInput, NButton, useNotification} from 'naive-ui'
import {useRouter} from 'vue-router'
import {useDataStore} from '../store/useData'
import { storeToRefs } from 'pinia'
import Joi from 'joi'

const router = useRouter()
const notification = useNotification()

const data = useDataStore()
const {outputCapacity, bufferSize, inputValues} = storeToRefs(data)


const schema = Joi.number().integer().positive().min(2);
const arraySchema = Joi.array().items(Joi.number().integer().positive().min(2)).length(5);

const showError = (text)=>{
  notification.error({
            content: "Validation Error",
            meta: text,
  })
}
const runHandller = ()=>{
    if(schema.validate(outputCapacity.value).value){
       if(schema.validate(bufferSize.value).value){
           if(arraySchema.validate(inputValues.value).error === undefined){
               console.log(arraySchema.validate(inputValues.value).error)
                  router.push("/result")
           }else{
               showError("Input Capacity should be a positive number and greater than 1")
           }
       }else{
           showError("Buffer size should be a positive number")
       }
    }else{
      showError("Output capacity should be required and greater than 1")
    }
        
}
</script>

<style scoped>
.root{
    width: 80vw;
    margin: auto;
}
.input{
    width: 130px;
    margin: 0 30px;
}
table, th, td{
    border: 1px solid #B4E197;
    border-collapse: collapse;
}
th, td{
    padding: 5px 10px;
}
</style>