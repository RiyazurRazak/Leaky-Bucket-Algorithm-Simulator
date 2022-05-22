<template>
  <NavBar />
  <h1>Input Data</h1>
  <InputGraph />
  <h1>Output Data</h1>
  <OutputGraph />
  <br />
  <div class="center">
     <n-button color="#83BD75" @click="clickHandller">Print Result</n-button>
  </div>
  <Footer/>
</template>


<script setup>
import {NButton} from 'naive-ui'
import NavBar from '../components/NavBar.vue';
import InputGraph from '../components/InputGraph.vue'
import OutputGraph from '../components/OutputGraph.vue'
import Footer from '../components/Footer.vue';
import { onMounted } from 'vue-demi';
import {useDataStore} from '../store/useData'
import { storeToRefs } from 'pinia';
import {useRouter} from 'vue-router'

const data = useDataStore()
const router = useRouter()
const {outputCapacity} = storeToRefs(data);


onMounted(()=>{
  if(outputCapacity.value <= 0){
    router.push("/simulator")
  }
})

const clickHandller = ()=>{
  window.print()
}
</script>


<style scoped>
h1{
  margin-left: 30px;
}
.center{
  text-align: center;
}
</style>