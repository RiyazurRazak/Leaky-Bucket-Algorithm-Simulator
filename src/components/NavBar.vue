<template>
    <nav class="root">
        <h1>Leaky Bucket Algorithm Simulator</h1>
        <div class="links">
          <router-link to="/"><n-button color="#83BD75" text-color="#000" style="font-weight:600;" >Info</n-button></router-link>
          <router-link to="/simulator"><n-button color="#83BD75" text-color="#000" style="font-weight:600;" >Simulator</n-button></router-link>
        </div>
    </nav>
</template>


<script setup>
import { NButton } from 'naive-ui';
</script>

<style scoped>
.root{
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #B4E197;
    -webkit-text-stroke-width: .4px;
    -webkit-text-stroke-color: black;
}
.links a{
    margin: 0 10px;
}
.links a button{
    margin: 10px 0;
}
</style>